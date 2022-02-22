import React from "react";
import "./Nav.css"

export default function Nav() {
    return (
        <nav className="nav-bar">
        <div className="nav-items">
          <div className="nav-left">
          <p className="item logo"><span className="letter-height">h</span>U<span className="letter-height">l</span>U PRESS</p>
          <p className="item"> NEWS</p>
          <p className="item">GUIDES</p>
          <p className="item">SCHEDULE</p>
          <p className="item">ORIGINALS </p>
          <p className="item">FX <span className="arrow-down">∨</span></p>
          <p className="item">ASSETS <span className="arrow-down">∨</span></p>
          <p className="item">ABOUT <span className="arrow-down">∨</span></p>
          </div>

          <div className="nav-right">
          <p className="item"></p>
          <p className="item"><button className="login-btn">LOG IN</button></p>
          </div>
        </div>
      </nav>
    )
}