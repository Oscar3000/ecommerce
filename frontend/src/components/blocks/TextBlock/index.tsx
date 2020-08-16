import React from "react";

interface Item {
    icon: string;
    text: string;
}

interface Props {
    items: Item[];
}

const TextBlock = (props: Props) => {
    return (
        <div className="container">
            <div className="row">
                {props.items.map((item, i) => (
                    <div className="col text-item" key={"block" + i}>
                        <div className="row">
                            <i className={item.icon + "col"} />
                            <div className="col" dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextBlock;
