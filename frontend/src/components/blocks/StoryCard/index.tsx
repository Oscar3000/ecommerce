import React from "react";
import "./style.scss";
interface Props {
    imgSrc: string;
    time?: string;
    title: string;
    descritpion: string;
    more?: boolean;
}

const StoryCard: React.SFC<Props> = (props: Props) => {
    return (
        <div className="StoryCard container">
            <div className="StoryCard__img__block">
                <img src={props.imgSrc} className="img_src" />
            </div>
            <div className="StoryCard__content">
                <div className="container">
                    {props.time && <p>{props.time}</p>}
                    <h3>{props.title}</h3>
                    <p>{props.descritpion}</p>
                    {props.more && (
                        <div>
                            <hr />
                            <div>
                                <span>News</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StoryCard;
