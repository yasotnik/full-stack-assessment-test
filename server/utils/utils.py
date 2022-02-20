import json
from flask import make_response


def unpack_door_details(doors_addresses_join):
    acc = []
    for door, address in doors_addresses_join:
        acc.append(
            {
                "id": door.id,
                "name": door.name,
                "installation_time": door.installation_time,
                "sensor_uuid": door.sensor_uuid,
                "address": {
                    "street": address.street,
                    "city": address.city,
                    "postal_code": address.postal_code,
                    "state": address.state,
                    "country_code": address.country_code,
                    "geolocation": address.geolocation,
                },
            }
        )
    return acc


def make_json_response(data):
    response = make_response(json.dumps(data, default=str))
    response.headers["Content-Type"] = "application/json"
    return response
