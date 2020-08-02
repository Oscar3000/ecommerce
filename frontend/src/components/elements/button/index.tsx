import React, { useState } from "react";
import ctx from "classnames";
import "./style.scss";
interface Props {
    name: string;
    onClick?: () => void;
}
const Button = (props: Props) => {
    return (
        <button onClick={props.onClick} className={ctx("btn")}>
            {props.name}
        </button>
    );
};

export default Button;
