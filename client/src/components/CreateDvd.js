import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { createDvd, fetchDevelopers, fetchGenres } from "../http/dvdApi";
import { observer } from "mobx-react-lite";

const CreateDvd = observer(({show, onHide}) => {

    const {dvd} = useContext(Context);
    const [description, setDescription] = useState([]);

    useEffect( () => {
        fetchGenres().then( (data) => dvd.setGenres(data));
        fetchDevelopers().then( (data) => dvd.setDevelopers(data));
    }, []);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const addDescription = () => {
        setDescription( [...description, {title: '', description: '', number: Date.now()}] )
    }

    const removeDescription = (number) => {
        setDescription( description.filter( (elem) => elem.number !== number) )
    }

    const changeDescription = (key, value, number) => {
        setDescription( description.map( (elem) => elem.number === number ? {...elem, [key]: value} : elem));
    }

    const addDvd = () => {
        const formData = new FormData();
        formData.append('name', title);
        formData.append('price', price);
        formData.append('img', file);
        formData.append('genreId', dvd.selectedGenre.id);
        formData.append('developerId', dvd.selectedDeveloper.id);
        formData.append('info', JSON.stringify(description));

        createDvd(formData).then( (data) => {
            dvd.setSelectedGenre('Genre');
            dvd.setSelectedDeveloper('Developer');
            setTitle('');
            setPrice(0);
            setFile(null);
            setDescription([]);
        })
    }

    const selectFile = (event) => {
        setFile(event.target.files[0]);
    }

    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <h2 className="modal__title">Add Dvd</h2>
            <div className="modal__form">

                <div className="modal__dropdown">
                    <button className="modal__button modal__button-dropdown">
                        {dvd.selectedGenre.name || 'Genre'}
                    </button>
                    <div className="modal__options">
                        {dvd.genres.map( (genre) =>
                            <div className="modal__option" key={genre.id}
                            onClick={ () => dvd.setSelectedGenre(genre)}>
                                {genre.name}
                            </div>
                        )}
                    </div>
                </div>

                <div className="modal__dropdown">
                    <button className="modal__button modal__button-dropdown">
                        {dvd.selectedDeveloper.name || 'Developer'}
                    </button>
                    <div className="modal__options">
                        {dvd.developers.map( (developer) =>
                            <div className="modal__option" key={developer.id}
                            onClick={ () => dvd.setSelectedDeveloper(developer)}>
                                {developer.name}
                            </div>
                        )}
                    </div>
                </div>

                <input type="text" className="modal__input" 
                placeholder="Dvd title" value={title} onChange={ (e) => setTitle(e.target.value)}/>
                
                <input type="text" className="modal__input" 
                placeholder="Dvd price" value={price} onChange={ (e) => setPrice(Number(e.target.value))}/>
                
                <input type="file" className="modal__input" placeholder="Dvd price" 
                id="file" accept="image/*" onChange={selectFile}/>
                <label htmlFor="file" className="modal__input modal__input-file">
                    {file ? 'Photo selected' : 'Choose a photo'}
                </label>

                { description.map( (elem) => 
                    <div className="modal__info" key={elem.number}>
                        <input type="text" className="modal__input" 
                        placeholder="Property title" value={elem.title}
                        onChange={ (e) => changeDescription('title', e.target.value, elem.number)}/>

                        <input type="text" className="modal__input" 
                        placeholder="Property info" value={elem.description}
                        onChange={ (e) => changeDescription('description', e.target.value, elem.number)}/>

                        <button className="modal__button" 
                        onClick={() => removeDescription(elem.number)}>Close</button>
                    </div>
                )}

            </div>

            <div className="modal__buttons modal__buttons-modify">

                <button className="modal__button modal__button-long" onClick={addDescription}>Add Property</button>
                <div className="modal__buttons-wrapper">
                    <button className="modal__button" onClick={addDvd}>Add</button>
                    <button className="modal__button" onClick={onHide}>Close</button>
                </div>

            </div>
        </div>
    )
});

export default CreateDvd;