import { API_KEY } from "./constants";

export default async function getDataAboutFilm(filmId) {
    const result = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => { return json })
        .catch(err => console.log(err))
    console.log(result)
    return result;
}