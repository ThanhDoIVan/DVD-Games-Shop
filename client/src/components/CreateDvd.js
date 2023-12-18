import React, { useContext, useState } from "react";
import { Context } from "../index";

const CreateDvd = ({show, onHide}) => {

    const {dvd} = useContext(Context);
    const [description, setDescription] = useState([]);

    const addDescription = () => {
        setDescription( [...description, {title: '', info: '', number: Date.now()}] )
    }

    const removeDescription = (number) => {
        setDescription( description.filter( (elem) => elem.number !== number) )
    }

    if (!show) {
        return null;
    }

    return (
        <div className="modal" onHide={onHide}>
            <h2 className="modal__title">Add Dvd</h2>
            <div className="modal__form">
                <select className="modal__dropbox">
                    <option selected hidden>Genre</option>
                    {dvd.genres.map( (genre) => 
                        <option key={genre.id}>{genre.name}</option>
                    )}
                </select>
                <select className="modal__dropbox">
                    <option selected hidden>Developer</option>
                    {dvd.developers.map( (developer) => 
                        <option key={developer.id}>{developer.name}</option>
                    )}
                </select>
                <input type="text" className="modal__input" placeholder="Dvd title"/>
                <input type="text" className="modal__input" placeholder="Dvd price"/>
                <input type="file" className="modal__input" placeholder="Dvd price" id="file" accept="image/*"/>
                <label for="file" className="modal__input modal__input-file">
                    Choose a Photo
                </label>
                { description.map( (elem) => 
                    <div className="modal__info" key={elem.number}>
                        <input type="text" className="modal__input" placeholder="Property title"/>
                        <input type="text" className="modal__input" placeholder="Property info"/>
                        <button className="modal__button" 
                        onClick={() => removeDescription(elem.number)}>Close</button>
                    </div>
                )

                }
            </div>
            <div className="modal__buttons modal__buttons-modify">
                <button className="modal__button modal__button-long" onClick={addDescription}>Add Property</button>
                <div className="modal__buttons-wrapper">
                    <button className="modal__button" >Add</button>
                    <button className="modal__button" onClick={onHide}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default CreateDvd;