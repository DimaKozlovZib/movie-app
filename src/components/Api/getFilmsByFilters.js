import { API_KEY } from "./constants";

export default async function getFilmsByFilters({ ActiveGenres, ActiveCountries, MaxYear, MinYear, Sort }, pageNumber) {
    const ActiveGenresFilt = ActiveGenres && ActiveGenres.id !== 0 ? 'genres=' + ActiveGenres.id : null;
    const ActiveCountriesFilt = ActiveCountries && ActiveCountries.id !== 0 ? 'countries=' + ActiveCountries.id : null;
    //{id, value}

    const MaxYearFilt = MaxYear && MaxYear > 0 ? 'yearTo=' + MaxYear : null;
    const MinYearFilt = MinYear ? 'yearFrom=' + MinYear : null;
    const pageNumberFilt = 'page=' + pageNumber;
    const order = Sort ? 'order=' + Sort.id : null;

    const fetchAtributes = [ActiveGenresFilt, ActiveCountriesFilt, MaxYearFilt, MinYearFilt, pageNumberFilt, order, 'type=FILM']
        .filter(item => !item && item === null ? false : true).join('&');

    const result = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?${fetchAtributes}`, {
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