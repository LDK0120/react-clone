import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Search() {
    return (
        <div className="Search">
            <form>
                <FontAwesomeIcon icon={faCoffee} />
                <input type="search" placeholder="Search Newsroom" required />
            </form>
          <p className="item search-category">CATEGORIES ∨</p>
        </div>
    )
}