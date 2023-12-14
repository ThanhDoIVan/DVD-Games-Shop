import {makeAutoObservable} from 'mobx'; 

export default class DvdStore {
    constructor() {
        this._genres = [
            {id: '1', name: 'Action'},
            {id: '2', name: 'RPG'},
            {id: '3', name: 'Fighting'},
            {id: '4', name: 'Sport'},
            {id: '5', name: 'Strategy'},
        ];
        this._developers = [
            {id: '1', name: 'Insomniac'},
            {id: '2', name: 'Blizzard'},
            {id: '3', name: 'Ubisoft'},
            {id: '4', name: 'CD Project Red'},
            {id: '5', name: 'Namco Bandai'},
        ];
        this._dvds = [
            {id: '1', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '2', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '3', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '4', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '5', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '6', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '7', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '8', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
        ];
        this._selectedGenre = {};
        this._selectedDeveloper = {};
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
        this._selectedGenre = genre;
    }

    setSelectedDeveloper(developer) {
        this._selectedDeveloper = developer;
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
}