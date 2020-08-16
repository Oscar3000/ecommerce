import React, { useState, useEffect } from "react";
import { checkEngine } from "../../../utilities/context";
interface Props {
    elementRef: React.RefObject<HTMLElement>;
    children: any;
    scroll: {
        y: number;
    };
    placeholder?: JSX.Element;
}

const View = (props: Props) => {
    const [inView, setInView] = useState(false);

    function calcInView() {
        if (!inView && checkEngine() === "client" && props.elementRef.current) {
            const bounds = props.elementRef.current.getBoundingClientRect();
            if (bounds.top < props.scroll.y + window.innerHeight) {
                setInView(true);
            }
        }
    }

    useEffect(calcInView, [props.scroll]);

    if (!inView) {
        return props.placeholder || null;
    }

    return props.children;
};

export default View;
