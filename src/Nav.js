import React from "react";
import "./Nav.css"

export default function Nav() {
    return (
        <nav className="nav-bar">
        <div className="nav-items">
          <div className="nav-left">
          <p className="item logo"><span className="letter-height">h</span>U<span className="letter-height">l</span>U PRESS</p>
          <a href="https://press.hulu.com/news/">NEWS</a>
          <a href="https://press.hulu.com/guides/">GUIDES</a>
          <a href="https://press.hulu.com/schedule/february-2022/">SCHEDULE</a>

          
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
