import React from "react";
import cx from "classnames";
import "./style.scss";

interface Props {
    title: string;
    children: any;
    className?: string;
}
const Menu = (props: Props) => {
    return (
        <div className={cx("menu", props.className)}>
            <button>
                {props.title}
                <span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
            <div className="menu__content">{props.children}</div>
        </div>
    );
};

export default Menu;
