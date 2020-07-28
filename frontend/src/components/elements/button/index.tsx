import React from "react";
import "./style.scss";
interface Props {
    name: string;
    onClick?: () => void;
}
const Button = (props: Props) => {
    return (
        <button onClick={props.onClick} className="btn">
            {props.name}
        </button>
    );
};

export default Button;
