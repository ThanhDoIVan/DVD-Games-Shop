import React from "react";

const CreateDeveloper = ({show, onHide}) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <h2 className="modal__title">Add Developer</h2>
            <form className="modal__form">
                <input type="text" className="modal__input" 
                placeholder="Developer title"/>
            </form>
            <div className="modal__buttons">
                <button className="modal__button" >Add</button>
                <button className="modal__button" onClick={onHide}>Close</button>
            </div>
        </div>
    )
}

export default CreateDeveloper;