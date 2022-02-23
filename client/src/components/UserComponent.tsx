import * as React from "react";
import { DoorUsers } from "../constants/commons";

export interface UserComponentProps {
    user: DoorUsers;
    avatar?: string;
}

const UserComponent: React.FC<UserComponentProps> = ({ user, avatar }) => {
    return (
        <div className="user-component--container">
            <div className="user-avatar">
                <img
                    alt={user.first_name}
                    src={
                        "https://pbs.twimg.com/profile_images/1133109643734130688/BwioAwkz_400x400.jpg"
                    }
                />
            </div>
            <div className="user-info">
                <span>
                    <strong>Email:</strong>
                    {user.email}
                </span>
                <span>
                    <strong>First Name:</strong>
                    {user.first_name}
                </span>
                <span>
                    <strong>Last Name:</strong>
                    {user.last_name}
                </span>
                <span>
                    <strong>Access granted at:</strong>
                    {user.access_granted_at}
                </span>
            </div>
        </div>
    );
};

export default UserComponent;
