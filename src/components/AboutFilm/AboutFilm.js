import React, { useState, useEffect, memo } from "react";
import getDataAboutFilm from "../Api/getDataAboutFilm";
import getSequelsAndPrequels from "../Api/getSequelsAndPrequels";
import getSimilars from "../Api/getSimilars";
import FilmsSlider from "../FilmsSlider/FilmsSlider";
import ImageLoad from "../ImageLoad/ImageLoad";
import "./AboutFilm.css";
import { useNavigate } from 'react-router-dom';
import Loader from "../Loader/Loader";

const AboutFilm = memo(({ filmId }) => {
    const [DataAboutFilm, setDataAboutFilm] = useState(null);
    const [InfoList, setInfoList] = useState(null);
    const [SequelsAndPrequels_Similars, setSequelsAndPrequels_Similars] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        setInfoList(DataAboutFilm ?
            [
                { itemName: "Длина", data: `${DataAboutFilm.filmLength} мин` },
                { itemName: "Год", data: DataAboutFilm.year },
                {
                    itemName: "Ограничение", data: `${DataAboutFilm.ratingAgeLimits ?
                        DataAboutFilm.ratingAgeLimits.match(/(\d+)/)[0] + '+' : '-'}`
                },
                { itemName: "Слоган", data: DataAboutFilm.slogan },
                { itemName: "Рейтинг MPAA", data: DataAboutFilm.ratingMpaa },
                {
                    itemName: DataAboutFilm.countries.length > 1 ? "Страны" : "Страна", data:
                        DataAboutFilm.countries.map(item => item.country).join(", ")
                }
            ] : null
        );
    }, [DataAboutFilm])

    useEffect(() => {
        if (filmId !== null) {
            getData(filmId);
            getSequelsAndPrequels_Similars(filmId);
        }
    }, [filmId]);

    const getData = async (filmId) => {
        const result = await getDataAboutFilm(filmId);
        setDataAboutFilm(result);
    };

    const getSequelsAndPrequels_Similars = async (filmId) => {
        const SequelsAndPrequels = await getSequelsAndPrequels(filmId);
        const similars = await getSimilars(filmId);
        setSequelsAndPrequels_Similars([...SequelsAndPrequels, ...similars.items]);
    };

    let genres = (DataAboutFilm ? DataAboutFilm.genres.map(item => item.genre).join(", ") : '');

    return (
        DataAboutFilm ? <div className={`windowAboutFilm`}>
            <div className="container">

                <div className="go-out-button-box">
                    <button className="go-out-button" onClick={() => {
                        history(-1);
                    }}>{'< Назад'}</button>
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
                            <h3 className="windowAboutFilm__genres">
                                {genres}
                            </h3>
                        </div>

                        <div className="short-description">
                            <p>{DataAboutFilm.shortDescription}</p>
                        </div>

                        <div className="link-button-box">
                            <a href={DataAboutFilm.webUrl} target="_blank" rel="noreferrer" className="button">Смотреть</a>
                            <button className="button">Буду смотреть</button>
                        </div>

                        <div className="information-list">
                            {
                                InfoList ? InfoList.map(({ itemName, data }) =>
                                    <ListItem key={itemName} name={itemName} data={data} />) : ''
                            }
                        </div>

                    </div>
                </div>
                <div className="review">
                    <div className="description-box">
                        <div className="description-box__title">
                            <h3>Описание фильма</h3>
                        </div>
                        <p className="film-description">{DataAboutFilm.description}</p>
                    </div>
                    <div className="SequelsAndPrequels_Similars-wrapper">
                        <div className="SequelsAndPrequels_Similars__title">
                            <h3>Похожие фильмы</h3>
                        </div>
                        <FilmsSlider films={SequelsAndPrequels_Similars} />
                    </div>
                </div>
            </div>
        </div> : <Loader />)
});




const ListItem = memo(({ name, data }) => {
    return (
        <div className="list__item">
            <div className="list__item-title">
                {name}
            </div>
            <div className="list__item-data">
                {data ? data : '-'}
            </div>
        </div>
    )
})

export default AboutFilm;