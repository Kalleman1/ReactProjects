import React from "react";
import SendEmail from "./SendEmail";
import Contact from "./Contact";
import QuickLinks from "./QuickLinks";

const Footer = () => {
    return(
        <div className="footer-background">
            <div className="left-box">
                <h1 className="footer-header">Quick links</h1>
                <QuickLinks/>
            </div>
            <div className="middle-box">
                <h1 className="footer-header">Contact us</h1>
                <Contact/>
            </div>
            <div className="right-box">
                <h1 className="footer-header">Join our newsletter</h1>
                <SendEmail/>
            </div>
        </div>
    )
}

export default Footer;