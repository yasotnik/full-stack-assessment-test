from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()


class Addresses(db.Model):
    __tablename__ = "addresses"
    id = db.Column(db.Integer, primary_key=True)
    street = db.Column(db.String)
    postal_code = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)
    country_code = db.Column(db.String)
    geolocation = db.Column(db.String)


class Doors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sensor_uuid = db.Column(db.String)
    name = db.Column(db.String)
    address_id = db.Column(db.Integer, db.ForeignKey("addresses.id"))
    installation_time = db.Column(db.String)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    creation_time = db.Column(db.String)


class UserDoorPermissions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    door_id = db.Column(db.Integer)
    creation_time = db.Column(db.String)
