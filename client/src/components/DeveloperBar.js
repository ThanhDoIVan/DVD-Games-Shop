import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const DeveloperBar = observer(() => {
    const {dvd} = useContext(Context);
    
    return (
        <div className="bar">
            <ul className="bar__list">
                Developers
                {dvd.developers.map( (developer) => 
                    <li className={ developer.id === dvd.selectedDeveloper.id ? 
                        'bar__element bar__element-active' : 'bar__element'} 
                        onClick={ () => dvd.setSelectedDeveloper(developer) }
                        key={developer.id}>
                            {developer.name}
                    </li>
                )}
            </ul>
        </div>
    );
});

export default DeveloperBar