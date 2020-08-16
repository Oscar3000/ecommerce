import React from "react";
import Slider from "react-slick";
import "./style.scss";

interface Props {
    options?: {};
    children: JSX.Element[];
}

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div className={className} style={{ ...style, display: "none", right: "5px" }} onClick={onClick}>
            <i className="arrow right" />
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div className={className} style={{ ...style, display: "none", left: "10px" }} onClick={onClick}>
            <i className="arrow left" />
        </div>
    );
};

const defaultSetting = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const slider = (props: Props) => {
    const settings = { ...defaultSetting, ...props.options };
    return (
        <figure className="slider">
            <Slider {...settings}>{props.children.map((item) => item)}</Slider>
        </figure>
    );
};

export default slider;
