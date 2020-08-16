import Head from "next/head";
import "../styles/Home.module.scss";
import React from "react";
import HomePage from "../components/blocks/Home";
// import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/Images/logo.png" />
            </Head>
            <HomePage />
        </div>
    );
}
