import React, { useState } from "react";
import { createDeveloper } from "../http/dvdApi";

const CreateDeveloper = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const addDeveloper = () => {
        createDeveloper({name: value}).then( (data) => {
            setValue('');
        });
    }
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <h2 className="modal__title">Add Developer</h2>
            <form className="modal__form">
                <input type="text" className="modal__input" 
                placeholder="Developer title" value={value}
                onChange={ (e) => setValue(e.target.value)}/>
            </form>
            <div className="modal__buttons">
                <button className="modal__button" onClick={addDeveloper}>Add</button>
                <button className="modal__button" onClick={onHide}>Close</button>
            </div>
        </div>
    )
}

export default CreateDeveloper;