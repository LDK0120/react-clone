import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import ScrollIndicator from "./ScrollIndicator";


export default function App() {

  const [check, setCheck] = useState(0)

  function handleScroll() {
    let currentPosition = window.pageYOffset;
    setCheck(currentPosition)
  }

  window.addEventListener('scroll', handleScroll)


  return (
    <div className="App">
      <div className="top-padding"></div>
    <div className="row">
      <div className=" col col-left">
        <img src="main-news-image.png" alt="main news image" />
      </div>
      <div className="col col-right">
        <div className="texts">
        <p className="bold-text"><strong>AUGUST 6, 2021</strong></p>
        <h2 className="title">Hulu Presents Upcoming Original Series 'Dopesick,' 'The Great' Season Two, 'Only Murders In The Building' And 'Nine'
        </h2>
        <div className="article"><p>Company Greenlights Comedy Series 'This Fool' Created by and Starring Comedian Chris Estrada and Expands Unscripted True Crime Collection With New Documentary 'Dead Asleep' and Docuseries 'Captive Audience' Premiere Dates Revealed for 'Dopsick,' Second</p>
        </div>
          <a href="https://press.hulu.com/news/2021/08/06/hulu-presents-at-the-2021-television-critics-association-summer/">READ MORE</a>
      </div>
      </div>
</div>
      <Nav />
      <Main />
      <ScrollIndicator position={check} />
  </div>
  )
}
