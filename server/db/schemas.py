from flask_marshmallow import Marshmallow
from db.models import Addresses

ma = Marshmallow()


class AddressesSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Addresses
