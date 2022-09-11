import React, { memo, useContext } from "react";
import { WindowAboutFilmContext } from "../Context";
import ImageLoad from "../ImageLoad/ImageLoad";

const FilmListItems = memo(({ films, style }) => {
    const { setOpenFilmId, setWindowIsVisible } = useContext(WindowAboutFilmContext);

    return (
        <>
            {
                films ? films.map(item =>
                    <ItemFilm
                        item={item}
                        style={style ? style : null}
                        key={item.filmId}
                        setOpenFilmId={setOpenFilmId}
                        setWindowIsVisible={setWindowIsVisible}
                    />
                ) : ''
            }
        </>

    )
})

const ItemFilm = memo(({ item, setOpenFilmId, setWindowIsVisible, style }) => {

    return (
        <div className="film" style={style ? style : null} onClick={() => {
            setOpenFilmId(item.filmId || item.kinopoiskId);
            setWindowIsVisible(true);
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