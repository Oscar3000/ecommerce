import * as React from "react";
import Slider from "./index";
import { storiesOf } from "@storybook/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

storiesOf("Slider", module).add("default", () => {
    return (
        <Slider options={{ autoplay: true, cssEase: "linear" }}>
            <img alt={"first"} src={require("../../../../public/Images/pexels-dazzle-jam-1038043.jpg")} />
            <img alt={"second"} src={require("../../../../public/Images/pexels-godisable-jacob-859195.jpg")} />
            <img alt={"third"} src={require("../../../../public/Images/pexels-godisable-jacob-923210.jpg")} />
            <img alt={"fourth"} src={require("../../../../public/Images/pexels-godisable-jacob-953266.jpg")} />
        </Slider>
    );
});
