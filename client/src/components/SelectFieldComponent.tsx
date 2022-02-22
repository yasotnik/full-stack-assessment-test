import { useState } from "react";
import { User } from "../constants/commons";

export interface SelectFieldComponentProps {
    options: User[];
    onChange: any;
}

const SelectFieldComponent: React.FC<SelectFieldComponentProps> = ({
    options,
    onChange,
}) => {
    return (
        <select
            className="select-field-component"
            name="users"
            id="users"
            onChange={(event) => onChange(event.target.value)}
        >
            {options.map((user: User) => (
                <option
                    value={user.id}
                >{`#${user.id}, ${user.first_name} ${user.last_name}`}</option>
            ))}
        </select>
    );
};

export default SelectFieldComponent;
