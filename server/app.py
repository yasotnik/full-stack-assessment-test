#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask, make_response, request, abort
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import db.schemas as schemas
import db.models as models
from constants import API_VERSION, BASE_API_URL
from utils.utils import make_json_response, unpack_door_details, unpack_door_users

app = Flask(__name__)
app.config.from_object("config.DebugConfig")
db = SQLAlchemy()
ma = Marshmallow()
db.init_app(app)

api_prefix = "/{}/{}".format(BASE_API_URL, API_VERSION)


@app.route("/" + BASE_API_URL + "/is_online/", methods=["GET"])
def health_check():
    return json.dumps(
        {
            "online": True,
        }
    )


@app.route(api_prefix + "/addresses/", methods=["GET"])
def get_addresses_list():
    addresses = models.Addresses.query.all()
    addresses_schema = schemas.AddressesSchema(many=True)
    response = make_response(addresses_schema.dumps(addresses, ensure_ascii=False))
    response.headers["Content-Type"] = "application/json"
    return response


@app.route(api_prefix + "/doors/", methods=["GET"])
def get_doors_list():
    query_parameters = request.args
    if query_parameters.get("id"):
        # store in redis?
        doors_schema = schemas.DoorsSchema()
        users_doors_permissions_schema = schemas.UsersDoorsPermissionsSchema(many=True)
        door_id = query_parameters.get("id")
        door = db.session.query(models.Doors).get(door_id)
        door_users = (
            db.session.query(models.UserDoorPermissions, models.Users)
            .join(models.Users, models.Users.id == models.UserDoorPermissions.user_id)
            .filter(models.UserDoorPermissions.door_id == door_id)
            .all()
        )
        response = make_response(
            json.dumps(unpack_door_users(door_users, door), default=str)
        )
    if not query_parameters:
        doors_schema = schemas.DoorsSchema(many=True)
        doors = models.Doors.query.all()
        response = make_response(doors_schema.dumps(doors, ensure_ascii=False))
    response.headers["Content-Type"] = "application/json"
    return response


@app.route(api_prefix + "/users/", methods=["GET"])
def get_users_list():
    users = models.Users.query.all()
    users_schema = schemas.UsersSchema(many=True)
    response = make_response(users_schema.dumps(users, ensure_ascii=False))
    response.headers["Content-Type"] = "application/json"
    return response


@app.route(api_prefix + "/users_doors_permissions/", methods=["GET"])
def get_users_doors_permissions_list():
    users_doors_permissions = models.UserDoorPermissions.query.all()
    users_doors_permissions_schema = schemas.UsersDoorsPermissionsSchema(many=True)
    response = make_response(
        users_doors_permissions_schema.dumps(
            users_doors_permissions, ensure_ascii=False
        )
    )
    response.headers["Content-Type"] = "application/json"
    return response


@app.route(api_prefix + "/doors_detailed_list/", methods=["GET"])
def get_doors_detailed():
    doors_addresses = (
        db.session.query(models.Doors, models.Addresses).join(models.Addresses).all()
    )
    return make_json_response(unpack_door_details(doors_addresses))


app.run()
