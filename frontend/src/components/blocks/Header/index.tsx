import React from "react";
import "./style.scss";
import Link from "../../elements/Link";
import Menu from "../../elements/Menu";
import SideBar from "./SideBar";

const Header = (props: any) => {
    const [sidebar, toggleSideBar] = React.useState<boolean>(false);
    return (
        <header>
            <nav className="navbar">
                <div className="navbar__brand">
                    {/** Brand name */}
                    <div>
                        <Link route={"#"}>
                            <img className="navbar__brand__img" src="/Images/logo.png" />
                        </Link>
                    </div>
                    {/** Sidebar button */}
                    <button className="navbar__button" onClick={() => toggleSideBar(!sidebar)}>
                        <i className="fas fa-bars" />
                    </button>
                </div>
                {/** Menu */}
                <div className="navbar__menu">
                    <Link route={"#"} className="item">
                        Home
                    </Link>
                    <Menu title="Men" className="item">
                        <Link route={"#"}>Sweater</Link>
                        <Link route={"#"}>Trouser</Link>
                        <Link route={"#"}>Jackets</Link>
                    </Menu>
                    <Menu title="Women" className="item">
                        <Link route={"#"}>Sweater</Link>
                        <Link route={"#"}>Trouser</Link>
                        <Link route={"#"}>Jackets</Link>
                    </Menu>
                    <Link route={"#"} className="item">
                        Blog
                    </Link>
                    <Link route={"#"} className="item">
                        <i className="fas fa-shopping-cart" aria-hidden="true" />
                    </Link>
                </div>
                {/** Sidebar */}
                {sidebar && <SideBar />}
            </nav>
        </header>
    );
};

export default Header;
