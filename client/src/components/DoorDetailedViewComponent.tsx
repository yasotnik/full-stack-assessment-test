import { useEffect, useState } from "react";
import { DoorDetailedInfo, DoorUsers } from "../constants/commons";
import API from "../api/api";
import { useParams } from "react-router-dom";
import UserComponent from "./UserComponent";

const DoorDetailedViewComponent: React.FC = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [doorUsers, setDoorUsers] = useState<DoorUsers[]>([]);
    const [doorName, setDoorName] = useState("");

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
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);
    return (
        <>
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
        </>
    );
};

export default DoorDetailedViewComponent;
