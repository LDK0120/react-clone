import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollIndicator(prop) {
    return (
        <div>
            {prop.position !== 0 && <div className="scroll"><FontAwesomeIcon icon={faArrowUp} className="arrow-up-icon" /></div>}
        </div>
    )
}