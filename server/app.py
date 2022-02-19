#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import db.schemas as schemas
import db.models as models


app = Flask(__name__)
app.config.from_object("config.DebugConfig")
db = SQLAlchemy()
ma = Marshmallow()
db.init_app(app)


@app.route("/")
def index():
    return json.dumps({"name": "kiwiki", "email": "kiwi@kiwi.ki"})


@app.route("/addresses/")
def get_addresses_list():

    addresses = models.Addresses.query.all()
    addresses_schema = schemas.AddressesSchema(many=True)

    return addresses_schema.dumps(addresses)


app.run()
