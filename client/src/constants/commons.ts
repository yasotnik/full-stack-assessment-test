export interface DoorInterface {
    id: number;
    name: string;
    installation_time: string;
    sensor_uuid: string;
    last_opening: string;
    last_com: string;
    address: DoorAddressInterface;
}

export interface DoorAddressInterface {
    street: string;
    city: string;
    postal_code: string;
    state: string;
    country_code: string;
    geolocation: string;
}

export interface DoorDetailedInfo {
    door: string;
    users: DoorUsers[];
}

export interface DoorUsers {
    email: string;
    first_name: string;
    last_name: string;
    access_granted_at: string;
}

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    creation_time: string;
}
