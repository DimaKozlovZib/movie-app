import React, { memo } from "react";
import ImageLoad from "../ImageLoad/ImageLoad";

function FilmListItems(params) {
    const filmsArray = params.films;
    return (
        <div className="container film-container">
            {
                filmsArray.map(item => {
                    return (<ItemFilm item={item}
                        key={item.filmId}
                        setfilmIdToOpen={params.setfilmIdToOpen}
                        setaboutIsOpen={params.setaboutIsOpen} />)
                })
            }
        </div>
    )
}

const ItemFilm = memo((params) => {
    let item = params.item;
    return (
        <div className="film" onClick={() => {
            params.setfilmIdToOpen(item.filmId);
            params.setaboutIsOpen(true);
        }}>
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
})




export default FilmListItems;