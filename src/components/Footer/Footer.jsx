import React from "react";
import "./Footer.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Payment from "../../assets/payment1.jpg";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="col">
                    <div className="title">Who are we?</div>
                    <div className="text">
                        We're young & wild explorers out on a journey to turn on your true vibe.All that has happened to us is overwhelming, yes, but it pushes us to do more, be more and make more products that you can use to jazz up your lifestyle. So, in 2023, we've started to fearlessly rock in India with a range of products that free-spirited Indians like you can truly call your own!
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationDot />
                        <div className="text">
                            Balarampur, Baruipur, Kolkata 700144
                        </div>
                    </div>
                    <div className="c-item">
                        <FaWhatsapp />
                        <div className="text">Phone: 8336942309</div>
                    </div>
                    <div className="c-item">
                        <BiLogoGmail />
                        <div className="text">Email: storeuss68@gmail.com</div>
                    </div>
                </div>


                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">USS-STORE 2023 CREATED BY SHAURYA. PREMIUM E-COMMERCE SOLUTIONS.</span>
                    <img src={Payment} />
                </div>
            </div>
        </footer>

    );
};

export default Footer;
