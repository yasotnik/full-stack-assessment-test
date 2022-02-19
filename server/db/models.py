from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Addresses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    street = db.Column(db.String)
    postal_code = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)
    country_code = db.Column(db.String)
    geolocation = db.Column(db.String)
