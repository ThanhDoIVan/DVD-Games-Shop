import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DVD_ROUTE } from "../utils/consts";
import { Context } from "../index";

const DvdItem = ({ dvdObj }) => {
    const history = useHistory();
    const {dvd} = useContext(Context);
    const genres = dvd.genres;
    const genre = genres.filter( (genre) => genre.id === dvdObj.genreId)[0].name;
    const developers = dvd.developers;
    const developer = developers.filter( (developer) => developer.id === dvdObj.developerId)[0].name;
    
    return (
        <div className="item" onClick={ () => history.push(DVD_ROUTE + '/' + dvdObj.id)}>
            <img className="item__image" src={ process.env.REACT_APP_API_URL + dvdObj.img } alt={ dvdObj.name }/>
            <div className="item__description">
                <h2 className="item__title">{ dvdObj.name }</h2>
                <p className="item__text">{genre.toUpperCase()}</p>
                <p className="item__text">{developer.toUpperCase()}</p>
                <p className="item__text">rating: {dvdObj.rating}</p>
                <p className="item__price">{dvdObj.price + '.00$'}</p>
            </div>
            <button className="item__button">Purchase</button>
        </div>
    );
};

export default DvdItem;