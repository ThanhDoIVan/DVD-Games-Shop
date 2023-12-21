import React, { useContext, useEffect } from "react";
import GenreBar from "../components/GenreBar";
import DeveloperBar from "../components/DeveloperBar";
import DvdList from "../components/DvdList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchDevelopers, fetchDvds, fetchGenres } from "../http/dvdApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {dvd} = useContext(Context);

    useEffect( () => {
        fetchGenres().then( (data) => dvd.setGenres(data));
        fetchDevelopers().then( (data) => dvd.setDevelopers(data));
        fetchDvds(null, null, 1, 8).then( (data) => {
            dvd.setDvds(data.rows);
            dvd.setTotalCount(data.count);
        });
    }, []);

    useEffect( () => {
        fetchDvds(dvd.selectedGenre.id, dvd.selectedDeveloper.id, dvd.page, 8).then( (data) => {
            dvd.setDvds(data.rows);
            dvd.setTotalCount(data.count);
        });
    }, [dvd.page, dvd.selectedGenre, dvd.selectedDeveloper]);

    return (
        <div>
            <div className="shop">
                <div className="shop__filter">
                    <GenreBar />
                    <DeveloperBar />
                </div>
                <DvdList />
            </div>
            <Pages />
        </div>
    );
});

export default Shop;