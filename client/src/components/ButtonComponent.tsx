export interface ButtonComponentProps {
    onClick: any;
    text: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onClick, text }) => {
    return (
        <button className="button-component" onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonComponent;
