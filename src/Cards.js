import React from "react";

export default function Cards(props) {

    return (
        <div className="Cards">

            {props.cardsData.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <a href={item.link}>
                        <img className="card-image" src={`${item.image}`} alt={`hulu image ${index + 1}`} />
                        <div className="card-text">
                        <p className="card-head">{item.head}</p>
                        <p className="card-body">{item.body}</p>
                        </div>
                        </a>
                    </div>
                    
            )})}

        </div>
    )
}


        
