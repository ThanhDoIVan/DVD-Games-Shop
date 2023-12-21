import { $authHost, $host } from "./index";

export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/genre', genre);
    return data;
}

export const fetchGenres = async () => {
    const {data} = await $host.get('api/genre');
    return data;
}

export const createDeveloper = async (developer) => {
    const {data} = await $authHost.post('api/developer', developer);
    return data;
}

export const fetchDevelopers = async () => {
    const {data} = await $host.get('api/developer');
    return data;
}

export const createDvd = async (dvd) => {
    const {data} = await $authHost.post('api/dvd', dvd);
    return data;
}

export const fetchDvds = async (genreId, developerId, page, limit = 8) => {
    const {data} = await $host.get('api/dvd', {params: {
        genreId, developerId, page, limit
    }});
    return data;
}

export const fetchOneDvd = async (id) => {
    const {data} = await $host.get('api/dvd/' + id);
    return data;
}
