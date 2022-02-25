import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <div className="Footer">
            <div className="top-row">
                <a href="https://www.instagram.com/hulu/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
                <a href="https://twitter.com/hulu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="icon"/></a>
                <a href="https://www.facebook.com/hulu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} className="icon"/></a>
                <a href="https://www.linkedin.com/company/hulu/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="icon"/></a>

            </div>
            <div className="bottom-row">
                <div className="bottom-row-left">
                    <a href="https://press.hulu.com/corporate/" rel="noreferrer">ABOUT</a>
                    <a href="https://jobs.disneycareers.com/search-jobs?acm=ALL&alrpm=ALL&ascf=[%7B%22key%22:%22custom_fields.IndustryCustomField%22,%22value%22:%22Disney+Streaming%22%7D,%7B%22key%22:%22custom_fields.IndustryCustomField%22,%22value%22:%22Hulu%22%7D]" target="_blank" rel="noreferrer">CAREERS</a>
                    <a href="https://help.hulu.com/s/" target="_blank" rel="noreferrer">HELP</a>
                    <a href="https://advertising.hulu.com/" target="_blank" rel="noreferrer">ADVERTISING</a>
                </div>

                <div className="bottom-row-right">
                    <a href="https://info.evidon.com/pub_info/3920?v=1&nt=0&nw=false" rel="noreferrer"><img src="info.png" className="info-icon" alt="info" /> ABOUT ADS</a>
                    <a href="https://press.hulu.com/terms/" rel="noreferrer">TERMS OF USE</a>
                    <a href="https://press.hulu.com/privacy-policy/" rel="noreferrer">PRIVACY POLICY</a>
                    <a href="https://www.hulu.com/ca-privacy-rights" rel="noreferrer">YOUR CALIFORNIA PRIVACY RIGHTS</a>
                    <span className="copyright">2022 Hulu, LLC</span>
                </div>
            </div>
            
        </div>
    )
}