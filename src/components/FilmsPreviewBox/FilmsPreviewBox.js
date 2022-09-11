import React, { useEffect, useState, memo } from "react";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import FilmListItems from "../FilmListItems/FilmListItems";
import "./filmsList.css";
import PageChange from "./PageChange/PageChange";
import FilterFilms from "../FilterFilms/FilterFilms";
import getFilmsByFilters from "../Api/getFilmsByFilters";

const FilmsPreviewBox = memo(() => {
    const [pageNumber, setpageNumber] = useState(1);
    const [films, setfilms] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [goodFetchResult, setgoodFetchResult] = useState(null);
    const filmsTitle = React.createRef();
    const [Filters, setFilters] = useState({ clear: true });

    useEffect(() => { getData(pageNumber) }, [pageNumber, Filters]);

    async function getData(PageNumber) {
        try {
            setgoodFetchResult(null);

            const fetchResult = await getFilmsByFilters(Filters, PageNumber);

            setfilms(fetchResult.films || fetchResult.items);
            setpageCount(fetchResult.pagesCount || fetchResult.totalPages);
            setgoodFetchResult(true);
        } catch (error) {
            setgoodFetchResult(false);
        }
    };

    return (
        <div className="filmsListWrapper">
            <div className="container">
                <h2 className="main-filmList-title" ref={filmsTitle}>Фильмы</h2>
                <FilterFilms Filters={Filters} setFilters={setFilters} />


                {
                    goodFetchResult === null ? <Loader loadActive={films.length !== 0} /> : <></>
                }
                {
                    goodFetchResult === true ?
                        (
                            <>
                                <div className="film-container">

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
        </div>
    );
});

export default FilmsPreviewBox;