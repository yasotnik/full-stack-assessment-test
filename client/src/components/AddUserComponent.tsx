import * as React from "react";
import { useEffect, useState } from "react";
import { DoorUsers, User } from "../constants/commons";
import ButtonComponent from "./ButtonComponent";
import SelectFieldComponent from "./SelectFieldComponent";
import API from "../api/api";

export interface AddUserComponentProps {
    user?: DoorUsers;
    avatar?: string;
}

const AddUserComponent: React.FC<AddUserComponentProps> = ({
    user,
    avatar,
}) => {
    const [users, setUsers] = useState<User[]>([]);

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
                <SelectFieldComponent
                    options={users.map(
                        (user) =>
                            `#${user.id}, ${user.first_name} ${user.last_name}`
                    )}
                />
                <div className="door-component--button-container">
                    <ButtonComponent onClick={() => {}} text={"Add"} />
                </div>
            </div>
        </div>
    );
};

export default AddUserComponent;
