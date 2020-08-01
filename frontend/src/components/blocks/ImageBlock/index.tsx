import React from "react";
import "./style.scss";

interface Props {
    ImgSrc: string;
    text?: string;
}
const ImageBlock = (props: Props) => {
    return (
        <div className="block">
            <div className="img_block">
                <img src={props.ImgSrc} className="img_src" />
            </div>
            {props.text && (
                <div className="inner">
                    <h1>{props.text}</h1>
                </div>
            )}
        </div>
    );
};

export default ImageBlock;
