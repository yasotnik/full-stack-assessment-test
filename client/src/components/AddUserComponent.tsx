import * as React from "react";
import { useEffect, useState } from "react";
import { User } from "../constants/commons";
import ButtonComponent from "./ButtonComponent";
import SelectFieldComponent from "./SelectFieldComponent";
import API from "../api/api";
import { useParams } from "react-router";

export interface AddUserComponentProps {
    addUserCallback: any;
}

const AddUserComponent: React.FC<AddUserComponentProps> = ({
    addUserCallback,
}) => {
    const [users, setUsers] = useState<User[]>([]);
    const [userId, setUserId] = useState<number>(0);

    const params = useParams();
    const door_id = parseInt(params.doorId ? params.doorId : "1");

    const addUser = (user_id: number, door_id: number) => {
        if (user_id !== 0 && door_id !== 0) {
            API.put(
                `doors/grant_permissions?user_id=${user_id}&door_id=${door_id}`
            ).then((res) => {
                addUserCallback();
            });
        }
    };

    useEffect(() => {
        API.get<User[]>(`users`)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="user-component--container">
            <div className="user-avatar low-opacity">
                <img
                    alt={"Add new user..."}
                    src={
                        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                    }
                />
            </div>

            <div className="user-info">
                <span>
                    <strong>Add Users</strong>
                </span>
                <div className="separator--line"></div>
                <span>
                    <strong>Users list:</strong>
                </span>
                <SelectFieldComponent options={users} onChange={setUserId} />
                <div className="door-component--button-container">
                    <ButtonComponent
                        onClick={() => addUser(userId, door_id)}
                        text={"Add user"}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddUserComponent;
