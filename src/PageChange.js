import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function PageChange() {
    return (
        <div className="page-list">
            <ul className="page-list-items">
                <li className="page-list-item" id="one"><a><FontAwesomeIcon icon={faAngleLeft} className="arrow-left" /> Back</a></li>
                <li className="page-list-item" id="two"><a>1</a></li>
                <li className="page-list-item" id="three"><a>2</a></li>
                <li className="page-list-item" id="four"><a>3</a></li>
                <li className="page-list-item-dots"><a>...</a></li>
                <li className="page-list-item" id="five"><a>21</a></li>
                <li className="page-list-item" id="six"><a>Next <FontAwesomeIcon icon={faAngleRight} className="arrow-right" /></a></li>
            </ul>
        </div>

    )
}