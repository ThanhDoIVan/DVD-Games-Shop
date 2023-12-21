import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import DvdItem from "./DvdItem";

const DvdList = observer(() => {
    const {dvd} = useContext(Context);
    return (
        <div className="shop__catalog">
            { dvd.dvds.map( (dvd) => 
                <DvdItem key={dvd.id} dvdObj={dvd} genres={dvd.genres} developers={dvd.developers}/>
            )}
        </div>
    );
});

export default DvdList;