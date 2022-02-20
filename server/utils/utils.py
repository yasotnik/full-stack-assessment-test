import json
from datetime import datetime
from flask import make_response

def timestamp_to_datetime(ts):
    if ts:
        ts = float(ts)
        return datetime.utcfromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
    else: return "-"

def parse_timestamp_with_timezone(tsz):
    if tsz:
        return datetime.strftime(tsz,"%Y-%m-%d %H:%M:%S")
    else: return "-"

def unpack_door_details(doors_addresses, doors_last_open, door_last_comm):
    acc = []
    for door, address in doors_addresses:
        acc.append(
            {
                "id": door.id,
                "name": door.name,
                "installation_time": parse_timestamp_with_timezone(door.installation_time),
                "sensor_uuid": door.sensor_uuid,
                "last_opening": timestamp_to_datetime(doors_last_open[door.sensor_uuid]),
                "last_com": timestamp_to_datetime(door_last_comm[door.sensor_uuid]),
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


def unpack_door_users(door_users, door):
    users = []
    for user_door, user in door_users:
        users.append(
            {
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "access_granted_at": user_door.creation_time,
            }
        )
    return {"door": door.name, "users": users}


def make_json_response(data):
    response = make_response(json.dumps(data, default=str))
    response.headers["Content-Type"] = "application/json"
    return response
