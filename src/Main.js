import React from "react";
import Search from "./Search";
import Cards from "./Cards";
import Footer from "./Footer";
import data from "./data.js";


export default function HuluOriginal() {
    return (
        <div className="HuluOriginal">
            


            <Search />
            <Cards cardsData={data} />
            <Footer />
        </div>
    )
}