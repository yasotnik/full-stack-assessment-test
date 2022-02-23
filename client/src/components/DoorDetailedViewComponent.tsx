import { useEffect, useState } from "react";
import { DoorDetailedInfo, DoorUsers } from "../constants/commons";
import API from "../api/api";
import { useParams } from "react-router-dom";
import UserComponent from "./UserComponent";
import AddUserComponent from "./AddUserComponent";

const DoorDetailedViewComponent: React.FC = (props) => {
    const [doorUsers, setDoorUsers] = useState<DoorUsers[]>([]);
    const [doorName, setDoorName] = useState("");
    const [userAdded, setUserAdded] = useState(false);

    let params = useParams();

    useEffect(() => {
        API.get<DoorDetailedInfo>(`doors`, {
            params: {
                id: params.doorId,
            },
        })
            .then((res) => {
                setDoorUsers(res.data.users);
                setDoorName(res.data.door);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [userAdded, params.doorId]);
    return (
        <>
            <div className="data--container">
                <div className="door-component--title">
                    <span>Users:</span>
                </div>
                <div className="separator--line"></div>
                <div className="detailed-view--container">
                    {doorUsers.length ? (
                        doorUsers.map((user) => (
                            <div key={user.access_granted_at}>
                                <UserComponent user={user} />
                            </div>
                        ))
                    ) : (
                        <span className="detailed-view--no-data">
                            {`No users found for ${doorName} door. 🤖`}
                        </span>
                    )}
                </div>
                <AddUserComponent
                    addUserCallback={() => setUserAdded(!userAdded)}
                />
            </div>
        </>
    );
};

export default DoorDetailedViewComponent;
