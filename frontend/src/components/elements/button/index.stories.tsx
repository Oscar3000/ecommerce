import * as React from "react";
import Button from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Button", module)
    .add("with text", () => {
        return <Button name="Hello Button" />;
    })
    .add("with click", () => {
        const click = () => console.log("i was clicked");
        return <Button name="pls click me" onClick={click} />;
    });
