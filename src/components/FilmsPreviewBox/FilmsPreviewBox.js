import React, { useEffect, useState } from "react";
import getPosts from "../Api/getData";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import FilmListItems from "../FilmListItems/FilmListItems";
import "./filmsList.css";
import PageChange from "./PageChange/PageChange";
import AboutFilm from "../AboutFilm/AboutFilm";

function FilmsPreviewBox() {
    const [pageNumber, setpageNumber] = useState(1);
    const [films, setfilms] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [goodFetchResult, setgoodFetchResult] = useState(true);
    const filmsTitle = React.createRef();
    const [filmIdToOpen, setfilmIdToOpen] = useState(null);

    useEffect(() => {
        getData(pageNumber)
    }, [pageNumber]);

    async function getData(PageNumber) {
        try {
            const fetchResult = await getPosts(PageNumber);
            setgoodFetchResult(true);
            setfilms(fetchResult.films);
            setpageCount(fetchResult.pagesCount);
        } catch (error) {
            setgoodFetchResult(false);
        }
    }

    return (
        <div className="filmsListWrapper">
            <AboutFilm filmId={filmIdToOpen} />
            <h2 className="main-filmList-title" ref={filmsTitle}>Фильмы</h2>
            <Loader loadActive={films.length !== 0} />
            {
                goodFetchResult ? <FilmListItems films={films} setfilmIdToOpen={setfilmIdToOpen} /> :
                    <Error tryAgainFunc={() => { getData(pageNumber) }} />
            }
            {
                goodFetchResult ? <PageChange pageNum={pageNumber} setPageFunc={setpageNumber} pageCount={pageCount} toScrollElement={filmsTitle} />
                    : ''
            }
        </div>
    )
}

export default FilmsPreviewBox;