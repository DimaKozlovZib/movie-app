import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import ImageLoad from "../ImageLoad/ImageLoad";

const FilmListItems = memo(({ films, style }) => {
    const history = useNavigate();
    return (
        <>
            {
                films ? films.map(item =>
                    <ItemFilm
                        item={item}
                        style={style ? style : null}
                        history={history}
                        key={item.filmId}
                    />
                ) : ''
            }
        </>

    )
})

const ItemFilm = memo(({ item, style, history }) => {

    return (
        <div className="film" style={style ? style : null} onClick={() => {
            history('/movie-app/films/' + (item.filmId || item.kinopoiskId));
        }}>
            <div className="poster-box">
                <ImageLoad url={item.posterUrlPreview} />
                <div className="film-rating">{item.rating || item.ratingKinopoisk}</div>
            </div>
            <div className="text-contant">
                <h3>{item.nameRu || item.nameOriginal}</h3>
                <h4>
                    {
                        item.genres ? item.genres.map(item => item.genre).join(", ") : ''
                        /*изначально жанры приходят как список из объектов*/
                    }
                </h4>
            </div>
        </div>
    )
})




export default FilmListItems;