import React from "react"
import "./Main.css"
import Carousel from "./Carousel"
import HuluOriginal from "./HuluOriginal"
import LatestNews from "./LatestNews"
import Footer from "./Footer"

export default function Main() {
    return (
        <div className="Main">
            <Carousel />
            <HuluOriginal />
            <LatestNews />
            <Footer />
        </div>
    )
}