import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export default function Search() {

    const [border, setBorder] = useState("")

    function handleFocus() {
        setBorder("color-border")
    }

    function removeFocus() {
            setBorder("")
    }

    return (
        <div className="Search">
            <div className="search-box" id={border}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-section-icon" />  
            <form> 
                <input type="search" placeholder="Search Newsroom" required onFocus={handleFocus} onBlur={removeFocus} />
            </form>
            </div>
          <p className="item search-category">CATEGORIES</p><FontAwesomeIcon icon={faAngleDown} />

        </div>
    )
}