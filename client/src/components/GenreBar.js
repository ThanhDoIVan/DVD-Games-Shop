import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const GenreBar = observer(() => {
    const {dvd} = useContext(Context);

    return (
        <div className="bar">
            <ul className="bar__list">
                Genres
                {dvd.genres.map( (genre) => 
                    <li className={ genre.id === dvd.selectedGenre.id ? 
                        'bar__element bar__element-active' : 'bar__element'} 
                        onClick={ () => dvd.setSelectedGenre(genre) }
                        key={genre.id}>
                            {genre.name}
                    </li>
                )}
            </ul>
        </div>
    );
});

export default GenreBar