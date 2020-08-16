import React from "react";
import Link from "../../../elements/Link";
import "./style.scss";

const SideBar = (props: any) => {
    return (
        <div className="sidebar">
            <Link route={"#"} className="item">
                Home
            </Link>
            <div className="item">
                <button>
                    Men
                    <span>
                        <i className="fa fa-angle-down" aria-hidden="true" />
                    </span>
                </button>
                <div className="content">
                    <Link route={"#"}>Sweater</Link>
                    <Link route={"#"}>Trouser</Link>
                    <Link route={"#"}>Jackets</Link>
                </div>
            </div>
            <div className="item">
                <button>
                    Women
                    <span>
                        <i className="fa fa-angle-down" aria-hidden="true" />
                    </span>
                </button>
                <div className="content">
                    <Link route={"#"}>Sweater</Link>
                    <Link route={"#"}>Trouser</Link>
                    <Link route={"#"}>Jackets</Link>
                </div>
            </div>
            <Link route={"#"} className="item">
                Blog
            </Link>
            <Link route={"#"} className="item">
                <i className="fas fa-shopping-cart" aria-hidden="true" />
            </Link>
        </div>
    );
};

export default SideBar;
