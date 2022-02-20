export interface ButtonComponentProps {
    onClick: any;
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
    return (
        <button className="button-component" onClick={props.onClick}>
            Details
        </button>
    );
};

export default ButtonComponent;
