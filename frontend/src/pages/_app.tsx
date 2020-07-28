import "../styles/globals.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import React from "react";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    return <Component {...pageProps} />;
}

export default MyApp;
