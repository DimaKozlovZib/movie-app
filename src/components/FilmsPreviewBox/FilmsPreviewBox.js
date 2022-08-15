import React, { useEffect, useState } from "react";
import getPosts from "../Api/getData";
import FilmListItems from "./FilmListItems/FilmListItems";
import "./filmsList.css";
import PageChange from "./PageChange/PageChange";

function FilmsPreviewBox() {
    const [pageNumber, setpageNumber] = useState(1);
    const [films, setfilms] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [goodFetchResult, setgoodFetchResult] = useState();
    const ifFetchError = `Ой что-то пошло не так! Проверьте соединение с интернетом.`

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
    console.log(pageCount)
    return (
        <div className="filmsListWrapper">
            <h2 className="main-filmList-title">фильмы</h2>
            {
                goodFetchResult ? <FilmListItems films={films} /> :
                    <div className="FetchError">{ifFetchError}</div>
            }
            <PageChange pageNum={pageNumber} setPageFunc={setpageNumber} pageCount={pageCount} />
        </div>
    )
}

export default FilmsPreviewBox;