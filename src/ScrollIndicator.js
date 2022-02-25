import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollIndicator(props) {

    let position = props.position;

    function handleClick() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (

        <div>
            {position !== 0 && <div className="scroll" onClick={handleClick}><FontAwesomeIcon icon={faArrowUp} className="arrow-up-icon" /></div>}
            </div>
    )
}