import React, { useState } from "react";
import PageChange from "./PageChange";

export default function Cards(props) {

    const [active, setActive] = useState(-1);

    return (
        <div className="Cards">

            {props.cardsData.map((item, index) => {
                return (
                    <div className="card" key={index} onMouseOver={() => { setActive(index);}} onMouseLeave={() => { setActive(-1);}}>
                        <a href={item.link}>
                        <img className="card-image" src={`${item.image}`} alt={`card ${index + 1}`} />
                        <div className="card-text">
                        <p className="card-head">{item.head}</p>
                        <p className="card-body">{item.body}</p>
                        <div className={index === active ? "border-bottom": "remove-border-bottom"}></div>
                        </div>
                        </a>
                    </div>
                    
            )})}
            <PageChange />
        </div>
    )
}


        
