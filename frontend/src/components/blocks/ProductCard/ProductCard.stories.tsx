import * as React from "react";
import ProductCard from "./index";
import { storiesOf } from "@storybook/react";
import "../../../styles/bootstrap-grid.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

storiesOf("Product Card", module).add("two cards", () => {
    return (
        <div className="row">
            <ProductCard
                product={{
                    name: "Jacket",
                    mainImg: require("../../../../public/Images/Full.jpg"),
                    price: 100,
                    discount: 0.3,
                    labels: ["new", "sale"],
                }}
            />
            <ProductCard
                product={{
                    name: "Jacket",
                    mainImg: require("../../../../public/Images/pexels-godisable-jacob-953266.jpg"),
                    price: 100,
                    discount: 0.3,
                    labels: ["new", "stock"],
                }}
            />
        </div>
    );
});
