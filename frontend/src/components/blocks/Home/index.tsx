import React from "react";
import Header from "../Header";
import Footer from "../Footer";
interface Props {
    products?: [];
}

const HomePage = (props: Props) => {
    return (
        <>
            <Header />
            <Footer />
        </>
    );
};

export default HomePage;
