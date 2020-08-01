import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextBlock from "./index";
import "../../../styles/bootstrap-grid.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

storiesOf("Text Block", module)
    .add("2 text blocks", () => {
        return (
            <TextBlock
                items={[
                    {
                        icon: "fas fa-3x fa-shopping-bag white-text",
                        text: `<h3>NEXT DAY SHIPPING
    </h3><p>Lorem ipsum dolor sit amet, consectetur elit. Nulla sem libero, dignissim sit amet consequa</p>`,
                    },
                    {
                        icon: "fas fa-3x fa-shopping-bag white-text",
                        text: `<h3>NEXT DAY SHIPPING
    </h3><p>Lorem ipsum dolor sit amet, consectetur elit. Nulla sem libero, dignissim sit amet consequa</p>`,
                    },
                ]}
            />
        );
    })
    .add("3 text blocks", () => {
        return (
            <TextBlock
                items={[
                    {
                        icon: "fas fa-3x fa-shopping-bag white-text",
                        text: `<h3>NEXT DAY SHIPPING
    </h3><p>Lorem ipsum dolor sit amet, consectetur elit. Nulla sem libero, dignissim sit amet consequa</p>`,
                    },
                    {
                        icon: "fas fa-3x fa-shopping-bag white-text",
                        text: `<h3>NEXT DAY SHIPPING
    </h3><p>Lorem ipsum dolor sit amet, consectetur elit. Nulla sem libero, dignissim sit amet consequa</p>`,
                    },
                    {
                        icon: "fas fa-3x fa-shopping-bag white-text",
                        text: `<h3>NEXT DAY SHIPPING
    </h3><p>Lorem ipsum dolor sit amet, consectetur elit. Nulla sem libero, dignissim sit amet consequa</p>`,
                    },
                ]}
            />
        );
    });
