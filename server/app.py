#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import db.schemas as schemas
import db.models as models
from constants import API_VERSION, BASE_API_URL

app = Flask(__name__)
app.config.from_object("config.DebugConfig")
db = SQLAlchemy()
ma = Marshmallow()
db.init_app(app)

api_prefix = "/{}/{}".format(BASE_API_URL, API_VERSION)


@app.route("/" + BASE_API_URL + "/health_check/", methods=["GET"])
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
    return addresses_schema.dumps(addresses, ensure_ascii=False)


@app.route(api_prefix + "/doors/", methods=["GET"])
def get_doors_list():
    doors = models.Doors.query.all()
    doors_schema = schemas.DoorsSchema(many=True)
    return doors_schema.dumps(doors, ensure_ascii=False)


@app.route(api_prefix + "/users/", methods=["GET"])
def get_users_list():
    users = models.Users.query.all()
    users_schema = schemas.UsersSchema(many=True)
    return users_schema.dumps(users, ensure_ascii=False)


@app.route(api_prefix + "/users_doors_permissions/", methods=["GET"])
def get_users_doors_permissions_list():
    users_doors_permissions = models.UserDoorPermissions.query.all()
    users_doors_permissions_schema = schemas.UsersDoorsPermissionsSchema(many=True)
    return users_doors_permissions_schema.dumps(
        users_doors_permissions, ensure_ascii=False
    )


app.run()
