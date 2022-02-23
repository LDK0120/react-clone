import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <div className="Footer">
            <div className="top-row">
                <FontAwesomeIcon icon={faInstagram} className="icon"/>
                <FontAwesomeIcon icon={faTwitter} className="icon"/>
                <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                <FontAwesomeIcon icon={faLinkedinIn} className="icon"/>

            </div>
            <div className="bottom-row">
                <div className="bottom-row-left">
                    <a href="#">ABOUT</a>
                    <a href="#">CAREERS</a>
                    <a href="#">HELP</a>
                    <a href="#">ADVERTISING</a>
                </div>

                <div className="bottom-row-right">
                    <a href="#">ABOUT ADS</a>
                    <a href="#">TERMS OF USE</a>
                    <a href="#">PRIVACY POLICY</a>
                    <a href="#">YOUR CALIFORNIA PRIVACY RIGHTS</a>
                    <span className="copyright">2022 Hulu, LLC</span>
                </div>
            </div>
            
        </div>
    )
}