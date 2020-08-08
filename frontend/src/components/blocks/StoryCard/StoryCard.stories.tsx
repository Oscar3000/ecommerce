import * as React from "react";
import StoryCard from "./index";
import { storiesOf } from "@storybook/react";
import "../../../styles/bootstrap-grid.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

storiesOf("Story Card", module).add("two cards", () => {
    return (
        <div className="row">
            <StoryCard
                title="Spring Vibes"
                imgSrc={require("../../../../public/Images/Full.jpg")}
                descritpion="Aliquam ornare mauris quis sapien interdum euismod. Nullam a elementum odio. Vivamus vestibulum bibendum orci, eget ultricies mi luctus et. Nulla fermentum, leo ac..."
            />
            <StoryCard
                title="Spring Vibes"
                imgSrc={require("../../../../public/Images/Full.jpg")}
                descritpion="Aliquam ornare mauris quis sapien interdum euismod. Nullam a elementum odio. Vivamus vestibulum bibendum orci, eget ultricies mi luctus et. Nulla fermentum, leo ac..."
            />
        </div>
    );
});
