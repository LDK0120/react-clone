import React from "react"
import "./Carousel.css"

export default function Carousel(props) {
    return (
        <div className="Carousel">
            <img src={`../${props.image}`} className="carousel-image" />
            <div className="carousel-text">
                <h3>{props.distributor}</h3>
                <h1>{props.title}</h1>
                <h2>{props.streaming}</h2>
                <a href={props.link}>LEARN MORE</a>
            </div>
        </div>
    )
}

