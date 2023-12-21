import React, { useState } from "react";
import { createGenre } from "../http/dvdApi";

const CreateGenre = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const addGenre = () => {
        createGenre({name: value}).then( (data) => {
            setValue('');
        });
    }
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <h2 className="modal__title">Add Genre</h2>
            <form className="modal__form">
                <input type="text" className="modal__input" 
                placeholder="Genre title" value={value}
                onChange={ (e) => setValue(e.target.value)}/>
            </form>
            <div className="modal__buttons">
                <button className="modal__button" onClick={addGenre}>Add</button>
                <button className="modal__button" onClick={onHide}>Close</button>
            </div>
        </div>
    )
}

export default CreateGenre;