import React from "react";

function FilmListItems(params) {
    params = params.films;
    return (
        <div className="container">
            {
                params.map(item => {
                    return (<ItemFilm item={item} key={item.filmId} />)
                })
            }
        </div>
    )
}

function ItemFilm(params) {
    let item = params.item
    return (
        <div className="film" key={item.filmId}>
            <div className="poster-box">
                <img src={item.posterUrlPreview} />
            </div>
            <div className="text-contant">
                <h3>{item.nameRu}</h3>
                <h4>{item.genres.map(item => {
                    return item.genre;/*изначально жанры приходят как список из объектов*/
                }).join(", ")}</h4>
            </div>
        </div>
    )
}




export default FilmListItems;