import React from "react";
import ctx from "classnames";
import "./style.scss";

interface Props {
    className?: string;
    children?: any;
}

const Label: React.FC<Props> = ({ children, className }: Props) => {
    return <span className={ctx("ProductLabel", className)}>{children}</span>;
};

export default Label;
