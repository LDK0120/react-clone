import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./App.css"
import Nav from "./Nav"
import Main from "./Main"


export default function App() {
const searchIcon = "fa-solid fa-magnifying-glass";

  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  )
}

