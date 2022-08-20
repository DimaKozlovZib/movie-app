import React from "react";
import ImageLoad from "../ImageLoad/ImageLoad";

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
        <div className="film">
            <div className="poster-box">
                <ImageLoad url={item.posterUrlPreview} />
                <div className="film-rating">{item.rating}</div>
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