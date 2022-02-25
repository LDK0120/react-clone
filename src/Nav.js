import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    
    return (
        <nav className="nav-bar">
        <div className="nav-items">
          <div className="nav-left">
          <p className="logo"><span className="letter-height">h</span>U<span className="letter-height">l</span>U PRESS</p>
          <a className="item" id="item-one" href="/" >NEWS</a>
          <a className="item" href="https://press.hulu.com/guides/">GUIDES</a>
          <a className="item" href="https://press.hulu.com/schedule/february-2022/">SCHEDULE</a>
          <p className="item">ORIGINALS <span className="arrow-down"><FontAwesomeIcon icon={faAngleDown} className="search-icon" /></span></p>
          <p className="item">FX <span className="arrow-down"><FontAwesomeIcon icon={faAngleDown} className="search-icon" /></span></p>
          <p className="item">ASSETS <span className="arrow-down"><FontAwesomeIcon icon={faAngleDown} className="search-icon" /></span></p>
          <p className="item">ABOUT <span className="arrow-down"><FontAwesomeIcon icon={faAngleDown} className="search-icon" /></span></p>
          </div>

          <div className="nav-right">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifying-icon" />
          <button className="login-btn">LOG IN</button>
          </div>
        </div>
      </nav>
    )
}




          