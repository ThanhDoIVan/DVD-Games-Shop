import {makeAutoObservable} from 'mobx'; 

export default class DvdStore {
    constructor() {
        this._genres = [];
        this._developers = [];
        this._dvds = [];
        this._selectedGenre = {};
        this._selectedDeveloper = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 8;

        makeAutoObservable(this); // Отслеживание изменений переменных
    }

    setGenres(genres) {
        this._genres = genres;
    }

    setDevelopers(developers) {
        this._developers = developers;
    }

    setDvds(dvds) {
        this._dvds = dvds;
    }

    setSelectedGenre(genre) {
        this.setPage(1);
        this._selectedGenre = genre;
    }

    setSelectedDeveloper(developer) {
        this.setPage(1);
        this._selectedDeveloper = developer;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount;
    }

    setLimit(limit) {
        this._limit = limit;
    }


    get genres() {
        return this._genres;
    }

    get developers() {
        return this._developers;
    }

    get dvds() {
        return this._dvds;
    }

    get selectedGenre() {
        return this._selectedGenre;
    }

    get selectedDeveloper() {
        return this._selectedDeveloper;
    }

    get page() {
        return this._page;
    }

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}