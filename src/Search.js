import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'



export default function Search() {
    
    return (
        <div className="Search">
            <div className="search-box">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-section-icon" />
            <form>
                <input type="search" placeholder="Search Newsroom" required />
            </form>
            </div>
          <p className="item search-category">CATEGORIES</p><FontAwesomeIcon icon={faAngleDown} />

        </div>
    )
}