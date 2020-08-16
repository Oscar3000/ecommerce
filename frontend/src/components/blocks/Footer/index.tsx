import React from "react";
import Link from "../../elements/Link";
import "./style.scss";

const Footer = (props: any) => {
    return (
        <footer className="footer container-fluid">
            <div className="footer__follow">
                <h5 className="text-uppercase">Connect with us</h5>
                <div className="socialList mt1">
                    <div className="social-item">
                        <Link route="#">
                            <i className="fab fa-facebook fa-2x white-text" />
                        </Link>
                    </div>
                    <div className="social-item">
                        <Link route="#">
                            <i className="fab fa-youtube fa-2x white-text" />
                        </Link>
                    </div>
                    <div className="social-item">
                        <Link route="#">
                            <i className="fab fa-instagram fa-2x white-text" />
                        </Link>
                    </div>
                    <div className="social-item">
                        <Link route="#">
                            <i className="fab fa-twitter fa-2x white-text" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer__content row">
                <div className="col">
                    <h5 className="text-uppercase">PAYMENT METHOD</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore.
                    </p>
                    <div className="payment__methods">
                        <div className="col-4">
                            <i className="fab fa-paypal" />
                        </div>
                        <div className="col-4">
                            <i className="fab fa-cc-visa" />
                        </div>
                        <div className="col-4">
                            <i className="fab fa-cc-amex" />
                        </div>
                        <div className="col-4">
                            <i className="fab fa-cc-jcb" />
                        </div>
                        <div className="col-4">
                            <i className="fab fa-cc-mastercard" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h5 className="text-uppercase">Shopping guide</h5>
                    <div className="list">
                        <Link route="#">FAQ</Link>
                        <Link route="#">Shipment</Link>
                        <Link route="#">Policies</Link>
                        <Link route="#">Clothing car</Link>
                        <Link route="#">Purchase conditions</Link>
                    </div>
                </div>
                <div className="col">
                    <h5 className="text-uppercase">company</h5>
                    <div className="list">
                        <Link route="#">About us</Link>
                        <Link route="#">Our team</Link>
                        <Link route="#">Offices</Link>
                        <Link route="#">Contact</Link>
                        <Link route="#">Giveways</Link>
                    </div>
                </div>
            </div>
            <div className="footer__divider" />
            <div className="footer__copyright">
                <p className="text-center">&copy;{new Date().getFullYear()} Kollen store. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
