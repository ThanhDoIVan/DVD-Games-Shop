import {makeAutoObservable} from 'mobx'; 

export default class DvdStore {
    constructor() {
        this._genres = [
            {id: '1', name: 'Боевики'},
            {id: '2', name: 'РПГ'}
        ];
        this._developers = [
            {id: '1', name: 'Insomniac'},
            {id: '2', name: 'Blizzard'}
        ];
        this._dvds = [
            {id: '1', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '2', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '3', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'},
            {id: '4', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg'}
        ];
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

    get genres() {
        return this._genres;
    }

    get developers() {
        return this._developers;
    }

    get dvds() {
        return this._dvds;
    }
}