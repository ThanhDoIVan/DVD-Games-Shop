import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DVD_ROUTE } from "../utils/consts";

const DvdItem = ({ dvd }) => {
    const history = useHistory();
    return (
        <div className="item" onClick={ () => history.push(DVD_ROUTE + '/' + dvd.id)}>
            <img className="item__image" src={ dvd.img } alt={ dvd.name }/>
            <div className="item__description">
                <h2 className="item__title">{ dvd.name }</h2>
                <p className="item__text">genre</p>
                <p className="item__text">developer</p>
                <p className="item__text">rating: {dvd.rating}</p>
                <p className="item__price">{dvd.price + '.00$'}</p>
            </div>
            <button className="item__button">Purchase</button>
        </div>
    );
};

export default DvdItem;