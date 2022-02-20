import * as React from "react";

export interface StatusComponentProps {
    status: boolean;
}

const StatusComponent: React.FC<StatusComponentProps> = ({ status }) => {
    const statusClassName = status ? "open" : "closed";
    return (
        <div className="status--container">
            <div
                className={`status--container-circle ${statusClassName}`}
            ></div>
        </div>
    );
};

export default StatusComponent;
