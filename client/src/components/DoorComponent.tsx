import * as React from "react";
import { Link } from "react-router-dom";
import { DoorInterface } from "../constants/commons";
import ButtonComponent from "./ButtonComponent";
import StatusComponent from "./StatusComponent";

export interface DoorComponentProps {
    image: string;
    door: DoorInterface;
}

const DoorComponent: React.FC<DoorComponentProps> = (props) => {
    const doorStatus = props.door.last_com !== "-";
    return (
        <div className="door-component--container">
            <div className="door-component--header">
                <div className={"door-component--status"}>
                    <StatusComponent status={doorStatus} />
                </div>
                <div className={"door-component--title"}>
                    {props.door.name} <span>#{props.door.id}</span>
                </div>
            </div>
            <div className="door-component--image-container">
                <img className="door-component--image" src={props.image}></img>
            </div>
            <div className="door-component--info">
                <span>
                    <strong>Installation time:</strong>
                    {props.door.installation_time}
                </span>
                <span>
                    <strong>Last opening: </strong>
                    {props.door.last_opening}
                </span>
                <span>
                    <strong>Last communication: </strong>
                    {props.door.last_com}
                </span>
            </div>
            <div className="door-component--button-container">
                <Link to={`/doors/${props.door.id}`}>
                    <ButtonComponent onClick={() => {}} />
                </Link>
            </div>
        </div>
    );
};

export default DoorComponent;
