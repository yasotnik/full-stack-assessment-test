from flask_marshmallow import Marshmallow
from db.models import Addresses, Doors, Users, UserDoorPermissions
from marshmallow import Schema, fields

ma = Marshmallow()


class AddressesSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Addresses


class DoorsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Doors


class UsersSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Users


class UsersDoorsPermissionsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserDoorPermissions


# Nested Schema?
# class DoorsAddressesSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Doors

#     id = fields.Int()
#     sensor_uuid = fields.String()
#     name = fields.String()
#     installation_time = fields.String()
#     address = fields.Nested(AddressesSchema)
