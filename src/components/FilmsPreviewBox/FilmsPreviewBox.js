import React, { useEffect, useState } from "react";
import getPosts from "../Api/getData";
import FilmListItems from "./FilmListItems/FilmListItems";
import "./filmsList.css";

function FilmsPreviewBox() {
    const [pageNumber, setpageNumber] = useState(1);
    const [films, setfilms] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [goodFetchResult, setgoodFetchResult] = useState();
    const ifFetchError = `Ой что-то пошло не так! Проверьте соединение с интернетом.`

    useEffect(() => {
        getData()
    }, []);

    async function getData() {
        try {
            const fetchResult = await getPosts();
            setgoodFetchResult(true);
            setfilms(fetchResult.films);
            setpageCount(fetchResult.pageCount);
        } catch (error) {
            setgoodFetchResult(false);
        }
    }

    return (
        <div className="filmsListWrapper">
            <h2 className="main-filmList-title">фильмы</h2>
            {
                goodFetchResult ? <FilmListItems films={films} /> :
                    <div className="FetchError">{ifFetchError}</div>
            }
        </div>
    )
}

export default FilmsPreviewBox;