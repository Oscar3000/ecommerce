import * as React from "react";
import Header from "./index";
import { storiesOf } from "@storybook/react";
import ImageBlock from "../ImageBlock";
storiesOf("Navbar", module).add("with three items", () => {
    return (
        <>
            <Header />
            <ImageBlock ImgSrc={require("../../../../public/Images/ol.jpg")} text="Welcome to Kollen" />
        </>
    );
});
