import React, { useState } from "react";
import CreateGenre from "../components/CreateGenre";
import CreateDeveloper from "../components/CreateDeveloper";
import CreateDvd from "../components/CreateDvd";

const Admin = () => {
    const [genreVisible, setGenreVisible] = useState(false);
    const [developerVisible, setDeveloperVisible] = useState(false);
    const [dvdVisible, setDvdVisible] = useState(false);

    return (
        <div className="admin">
            <div className="admin__panel bar">
                <div className="admin__list bar__list">
                    <button className="admin__button bar__element"
                    onClick={() => {
                        setGenreVisible(true);
                        setDeveloperVisible(false);
                        setDvdVisible(false);
                    }}>
                        Add Genre
                    </button>
                    <button className="admin__button bar__element"
                    onClick={() => {
                        setGenreVisible(false);
                        setDeveloperVisible(true);
                        setDvdVisible(false);
                    }}>
                        Add Developer
                    </button>
                    <button className="admin__button bar__element"
                    onClick={() => {
                        setGenreVisible(false);
                        setDeveloperVisible(false);
                        setDvdVisible(true);
                    }}>
                        Add DVD
                    </button>
                </div>
            </div>
            <CreateGenre show={genreVisible} onHide={() =>setGenreVisible(false)}/>
            <CreateDeveloper show={developerVisible} onHide={() => setDeveloperVisible(false)}/>
            <CreateDvd show={dvdVisible} onHide={() => setDvdVisible(false)}/>
        </div>
    );
}

export default Admin;