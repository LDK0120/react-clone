import React from "react"
import "./Main.css"
import Carousel from "./Carousel"
import HuluOriginal from "./HuluOriginal"
import LatestNews from "./LatestNews"
import Footer from "./Footer"
import data from "./data.js"


export default function Main() {
        const carouselItem = data;

    return (
        <div className="Main">

        {
            carouselItem.map(item => {
                return (
                    <div key={item.id}>
                    <Carousel image={item.image} distributor={item.distributor} title={item.title} streaming={item.streaming} link={item.url} />
                    </div>
                )})
        }
            <HuluOriginal />
            <LatestNews />
            <Footer />
        </div>
    )
}

        