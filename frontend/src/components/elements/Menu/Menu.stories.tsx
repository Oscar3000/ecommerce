import * as React from "react";
import Menu from "./index";
import { storiesOf } from "@storybook/react";
import Link from "../Link";

storiesOf("Menu", module).add("with three items", () => {
    return (
        <Menu title={"Men"} className="test">
            <Link route={"#"}>Sweater</Link>
            <Link route={"#"}>Trouser</Link>
            <Link route={"#"}>Jackets</Link>
        </Menu>
    );
});
