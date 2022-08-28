import React, { useState, useEffect, memo } from "react";
import getDataAboutFilm from "../Api/getDataAboutFilm";
import ImageLoad from "../ImageLoad/ImageLoad";
import "./AboutFilm.css";

const AboutFilm = memo(({ filmId, setwindowIsOpen }) => {
    const [DataAboutFilm, setDataAboutFilm] = useState();

    useEffect(() => {
        if (filmId !== null) {
            getData(filmId);
            document.querySelector("body").style.overflow = "hidden";
            setwindowIsOpen(true);
        }
    });

    const getData = async (filmId) => {
        const result = await getDataAboutFilm(filmId);
        setDataAboutFilm(result);
    }

    return (
        DataAboutFilm ?
            (<div className={`windowAboutFilm`}>
                <div className="container">
                    <div className="go-out-button-box">
                        <button className="go-out-button" onClick={() => {
                            setwindowIsOpen(false);
                            document.querySelector("body").style.overflow = "auto";
                        }}>{"< Назад"}</button>
                    </div>
                    <div className="content-wrapper">
                        <div className="windowAboutFilm__poster-box">
                            <ImageLoad url={DataAboutFilm.posterUrlPreview} />
                        </div>

                        <div className="content-box">
                            <div className="filmName">
                                <h2 className="nameRu">{`${DataAboutFilm.nameRu} (${DataAboutFilm.year})`}</h2>
                            </div>

                            <div className="genres">
                                <h3 className="windowAboutFilm__genres">{
                                    DataAboutFilm.genres.map(item => {
                                        return item.genre;/*изначально жанры приходят как список из объектов*/
                                    }).join(", ")
                                }</h3>
                            </div>

                            <div className="information-list">
                                <div className="list__item">
                                    <div className="list__item-title">
                                        Длина
                                    </div>
                                    <div className="list__item-data">
                                        {`${DataAboutFilm.filmLength} мин`}
                                    </div>
                                </div>
                                <div className="list__item">
                                    <div className="list__item-title">
                                        Год
                                    </div>
                                    <div className="list__item-data">
                                        {DataAboutFilm.year}
                                    </div>
                                </div>
                                <div className="list__item">
                                    <div className="list__item-title">
                                        Ограничение
                                    </div>
                                    <div className="list__item-data">
                                        {`${DataAboutFilm.ratingAgeLimits.match(/(\d+)/)[0]}+`}
                                    </div>
                                </div>
                                <div className="list__item">
                                    <div className="list__item-title">
                                        {DataAboutFilm.countries.length > 1 ? "Страны" : "Страна"}
                                    </div>
                                    <div className="list__item-data">
                                        {DataAboutFilm.countries.map(item => {
                                            return item.country;
                                        }).join(", ")}
                                    </div>
                                </div>
                            </div>

                            <div className="link-button-box">
                                <a href={DataAboutFilm.webUrl} target="_blank" rel="noreferrer" className="button">Смотреть</a>
                                <button className="button">Буду смотреть</button>
                            </div>
                        </div>
                    </div>

                    <p className="film-description">{DataAboutFilm.description}</p>
                </div>
            </div>) : ""
    )
})

export default AboutFilm;