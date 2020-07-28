import Head from "next/head";
import "../styles/Home.module.scss";
import React from "react";
//import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <div className="section1 body-content">
                    <div className="container">
                        <h1 className="yellow-text accent-3 center">Kollen Store</h1>
                        <div className="row">
                            <div className="col s12 center light-blue-text accent-2 text-content">
                                Click any text to edit or style it. Select text to insert a link. Click blue {"Gear"} in
                                the top right corner to hide/show buttons, text, title and change the block background.
                                Click red {"+"} in the bottom right corner to add a new block. Use the top left menu to
                                create new pages, sites and add themes
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row center-block">
                        <div className="col s12 l8 offset-l2 m8 offset-m2">
                            <blockquote className="text-content">
                                We are a responible company and we make sure all our designs are to your satisfication
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div className="section3">
                    <div className="container center">
                        <h1 className="text-center">Kollen Store</h1>
                        <div className="mt-3 text-content white-text">
                            We deal in beautifully designed clothes and so many more!
                        </div>
                        <button className="btn waves-effect center red btn-large waves-light">Order Now!</button>
                    </div>
                    <div className="row mt-4 text-uppercase box">
                        <div className="col s6 l3 m3 m-3 center">
                            <a href="#">
                                <i className="fas fa-3x fa-shopping-bag white-text"></i>
                                <h5 className="white-text">Bag</h5>
                            </a>
                        </div>
                        <div className="col s6 l3 m3 m-3 center">
                            <a href="#">
                                <i className="fas fa-3x fa-shopping-bag white-text"></i>
                                <h5 className="white-text">Quality Clothes</h5>
                            </a>
                        </div>
                        <div className="col s6 l3 m3 m-3 center">
                            <a href="#">
                                <i className="fas fa-3x fa-shopping-bag white-text"></i>
                                <h5 className="white-text">Affordable Prices</h5>
                            </a>
                        </div>
                        <div className="col s6 l3 m3 m-3 center">
                            <a href="#">
                                <i className="fas fa-3x fa-shopping-bag white-text"></i>
                                <h5 className="white-text">Delivery to any part</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="page-footer accent-1 light-blue">
                <div className="row">
                    <div className="col l4 m4 s12 center">
                        <img src="~/Images/14992610-9191-47d3-92cb-fc4ce020b1ea.png" />
                        <ul className="footerLink">
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Store</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">We are Hiring!</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l4 m4 s12">
                        <div>
                            <h5 className="text-uppercase">Style</h5>
                            <div className="footer-content">
                                <div>Kollen is a High brand store where beautifully designed clothes are sold.</div>
                                <div className="mt3">
                                    Kollen store is a place where all type of clothing accessories from clothes to bags
                                    t shoes and even jewelries are made and designed by Kollen.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l4 m4 s12">
                        <h5 className="text-uppercase">Subscribe</h5>
                        <div className="footer-content mt3">Get monthly updates and free resources. </div>
                        <div className="mt2">
                            <div className="row">
                                <div className="col s12 m6 l6">
                                    <div className="input-field">
                                        <input id="subscribe" type="email" className="validate white-text" />
                                        <label className="white-text" htmlFor="email">
                                            Email
                                        </label>
                                        <span className="helper-text" data-error="Enter a valid email"></span>
                                    </div>
                                </div>
                                <div className="col s12 m6 l6 mt3">
                                    <button className="btn waves-effect waves-green white green-text">
                                        Subscribe
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt2">
                            <h5 className="text-uppercase">Connect with us</h5>
                            <div className="socialList mt1">
                                <div className="social-item">
                                    <a href="#">
                                        <i className="fab fa-facebook fa-2x white-text"></i>
                                    </a>
                                </div>
                                <div className="social-item">
                                    <a href="#">
                                        <i className="fab fa-youtube fa-2x white-text"></i>
                                    </a>
                                </div>
                                <div className="social-item">
                                    <a href="#">
                                        <i className="fab fa-instagram fa-2x white-text"></i>
                                    </a>
                                </div>
                                <div className="social-item">
                                    <a href="#">
                                        <i className="fab fa-twitter fa-2x white-text"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="text-center">&copy;{new Date().getFullYear()} Kollen store. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}
