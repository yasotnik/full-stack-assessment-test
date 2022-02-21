export interface SelectFieldComponentProps {
    options: string[];
}

const SelectFieldComponent: React.FC<SelectFieldComponentProps> = ({
    options,
}) => {
    return (
        <select className="select-field-component" name="users" id="users">
            {options.map((option) => (
                <option>{option}</option>
            ))}
        </select>
    );
};

export default SelectFieldComponent;
