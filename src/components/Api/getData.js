
//c3f60396-9710-4c86-9e08-6b8b39d6f6dc

export default async function getPosts(PageNumber) {
    const result = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${PageNumber}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': '8c8e1a50-6322-4135-8875-5d40a5420d86',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => { return json })
        .catch(err => console.log(err))
    console.log(result)
    return result;
}