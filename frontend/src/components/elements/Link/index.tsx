import React from "react";

interface LinkProps {
    route: string;
    preRouteAction?: (callback: () => void) => void;
    onClick?: (e: React.MouseEvent) => void;
    newWindow?: boolean;
    children?: any;
}

const handleOnClick = (
    e: React.MouseEvent,
    route: any,
    newWindow: boolean,
    preRouteAction?: (callback: () => void) => void,
) => {
    e.preventDefault();
    const goToRoute = () => {
        if (e.metaKey) {
            newWindow = true;
        }
        if (newWindow) {
            window.open(route);
            return;
        }
        window.location.href = route;
        return;
    };
    if (preRouteAction) {
        preRouteAction(() => {
            goToRoute();
        });
    } else {
        goToRoute();
    }
};

const Link: React.FC<LinkProps> = ({ route, onClick, newWindow, children, ...props }: LinkProps) => {
    return (
        <a href={route} onClick={onClick ? onClick : (e) => handleOnClick(e, route, newWindow)} {...props}>
            {children}
        </a>
    );
};

export default Link;
