import React, { useContext } from "react";
import DvdItem from "../components/DvdItem";
import { Context } from "../index";

const Basket = () => {
    const {dvd} = useContext(Context)
    return (
        <div className="shop__catalog">
            basket ball           
        </div>
    );
}

export default Basket;