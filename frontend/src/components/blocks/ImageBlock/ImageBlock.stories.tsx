import * as React from "react";
import ImageBlock from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Image Block", module)
    .add("without text", () => {
        return <ImageBlock ImgSrc={require("../../../../public/Images/Full.jpg")} />;
    })
    .add("with text", () => {
        return <ImageBlock ImgSrc={require("../../../../public/Images/ol.jpg")} text="Welcome to Kollen" />;
    });
