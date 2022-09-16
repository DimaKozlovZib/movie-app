import React from "react";
import { Routes, Route } from 'react-router-dom';
import { AboutPath, FilmIdPath, FilmsListPath, TopFilmsPath } from "../routes";
import About from "./pages/AboutPage/About";
import FilmById from "./pages/FilmById";
import FilmsList from "./pages/FilmsList";
import TopFilms from "./pages/TopFilms";

const AppRouter = () => {
    return (
        <Routes >
            <Route path={AboutPath} element={<About />} />
            <Route path={FilmIdPath} element={<FilmById />} />
            <Route path={FilmsListPath} element={<FilmsList />} />
            <Route path={TopFilmsPath} element={<TopFilms />} />
            <Route path={'*'} element={<FilmsList />} />
        </Routes>
    )
}
export default AppRouter;