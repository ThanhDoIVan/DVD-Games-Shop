import React from "react";
import GenreBar from "../components/GenreBar";
import DeveloperBar from "../components/DeveloperBar";
import DvdList from "../components/DvdList";

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop__filter">
                <GenreBar />
                <DeveloperBar />
            </div>
            <DvdList />
        </div>
    );
}

export default Shop;