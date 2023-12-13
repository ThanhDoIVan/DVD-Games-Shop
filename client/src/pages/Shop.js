import React from "react";
import GenreBar from "../components/GenreBar";
import DeveloperBar from "../components/DeveloperBar";

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop__filter">
                <div className="shop__genres">
                    <GenreBar />
                </div>
                <div className="shop__developers">
                    <DeveloperBar />
                </div>
            </div>
            <div className="shop__catalog">

            </div>
        </div>
    );
}

export default Shop;