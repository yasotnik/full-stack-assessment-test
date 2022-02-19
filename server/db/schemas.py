from flask_marshmallow import Marshmallow
from db.models import Addresses, Doors, Users, UserDoorPermissions

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
