import React, { useEffect, useState, memo } from "react";
import getPosts from "../Api/getData";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import FilmListItems from "../FilmListItems/FilmListItems";
import "./filmsList.css";
import PageChange from "./PageChange/PageChange";

const FilmsPreviewBox = memo(() => {
    const [pageNumber, setpageNumber] = useState(1);
    const [films, setfilms] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [goodFetchResult, setgoodFetchResult] = useState(null);
    const filmsTitle = React.createRef();
    console.log(filmsTitle)

    useEffect(() => { getData(pageNumber) }, [pageNumber]);

    async function getData(PageNumber) {
        try {
            setgoodFetchResult(null);

            const fetchResult = await getPosts(PageNumber);

            setfilms(fetchResult.films);
            setpageCount(fetchResult.pagesCount);
            setgoodFetchResult(true);
        } catch (error) {
            setgoodFetchResult(false);
        }
    };

    return (
        <div className="filmsListWrapper">
            <h2 className="main-filmList-title" ref={filmsTitle}>Фильмы</h2>

            {
                goodFetchResult === null ? <Loader loadActive={films.length !== 0} /> : <></>
            }
            {
                goodFetchResult === true ?
                    (
                        <>
                            <div className="container film-container">
                                <FilmListItems films={films} />
                            </div>
                            <PageChange pageNum={pageNumber} setPageFunc={setpageNumber} pagesCount={pageCount} toScrollElement={filmsTitle} />
                        </>
                    )
                    :
                    (
                        goodFetchResult === false ? <Error tryAgainFunc={() => { getData(pageNumber) }} />
                            : <></>
                    )
            }
        </div>
    );
});

export default FilmsPreviewBox;