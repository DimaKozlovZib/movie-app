export default async function getPosts(PageNumber) {
    const result = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
        method: 'GET',
        headers: {
            'X-API-KEY': 'c3f60396-9710-4c86-9e08-6b8b39d6f6dc',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => { return json })
        .catch(err => console.log(err))

    return result;
}