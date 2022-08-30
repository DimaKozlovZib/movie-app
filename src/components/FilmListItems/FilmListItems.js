import React, { memo, useContext } from "react";
import { WindowAboutFilmContext } from "../Context";
import ImageLoad from "../ImageLoad/ImageLoad";

const FilmListItems = memo(({ films }) => {
    const { setOpenFilmId, setWindowIsVisible } = useContext(WindowAboutFilmContext);

    return (
        <div className="container film-container">
            {
                films.map(item =>
                    <ItemFilm
                        item={item}
                        key={item.filmId}
                        setOpenFilmId={setOpenFilmId}
                        setWindowIsVisible={setWindowIsVisible}
                    />
                )
            }
        </div>
    )
})

const ItemFilm = memo(({ item, setOpenFilmId, setWindowIsVisible }) => {

    return (
        <div className="film" onClick={() => {
            setOpenFilmId(item.filmId);
            setWindowIsVisible(true);
        }}>
            <div className="poster-box">
                <ImageLoad url={item.posterUrlPreview} />
                <div className="film-rating">{item.rating}</div>
            </div>
            <div className="text-contant">
                <h3>{item.nameRu}</h3>
                <h4>
                    {
                        item.genres.map(item => item.genre).join(", ")
                        /*изначально жанры приходят как список из объектов*/
                    }
                </h4>
            </div>
        </div>
    )
})




export default FilmListItems;