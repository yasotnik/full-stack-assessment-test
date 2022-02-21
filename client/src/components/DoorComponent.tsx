import * as React from "react";
import { Link } from "react-router-dom";
import { DoorInterface } from "../constants/commons";
import ButtonComponent from "./ButtonComponent";
import StatusComponent from "./StatusComponent";

export interface DoorComponentProps {
    image: string;
    door: DoorInterface;
}

const DoorComponent: React.FC<DoorComponentProps> = ({ image, door }) => {
    const doorStatus = door.last_com !== "-";
    return (
        <div className="door-component--container">
            <div className="door-component--header">
                <div className={"door-component--status"}>
                    <StatusComponent status={doorStatus} />
                </div>
                <div className={"door-component--title"}>
                    {door.name} <span>#{door.id}</span>
                </div>
            </div>
            <div className="door-component--image-container">
                <img className="door-component--image" src={image}></img>
            </div>
            <div className="door-component--info-title">Time data:</div>
            <div className="door-component--info">
                <span>
                    <strong>Installation time:</strong>
                    {door.installation_time}
                </span>
                <span>
                    <strong>Last opening: </strong>
                    {door.last_opening}
                </span>
                <span>
                    <strong>Last communication: </strong>
                    {door.last_com}
                </span>
            </div>
            <div className="separator--line"></div>
            <div className="door-component--info-title">Address:</div>
            <div className="door-component--info">
                <span>
                    <strong>City/State:</strong>
                    {door.address.city},{door.address.state}
                </span>
                <span>
                    <strong>Street:</strong>
                    {door.address.street}
                </span>
                <span>
                    <strong>Country code/Postal code: </strong>
                    {door.address.country_code},{door.address.postal_code}
                </span>
            </div>
            <div className="door-component--button-container">
                <Link to={`/doors/${door.id}`}>
                    <ButtonComponent onClick={() => {}} />
                </Link>
            </div>
        </div>
    );
};

export default DoorComponent;
