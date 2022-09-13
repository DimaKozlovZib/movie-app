import React from "react";
import { Routes, Route } from 'react-router-dom';
import { AboutPath, FilmIdPath, FilmsListPath } from "../routes";
import About from "./pages/AboutPage/About";
import FilmById from "./pages/FilmById";
import FilmsList from "./pages/FilmsList";

const AppRouter = () => {
    return (
        <Routes >
            <Route path={AboutPath} element={<About />} />
            <Route path={FilmIdPath} element={<FilmById />} />
            <Route path={FilmsListPath} element={<FilmsList />} />
        </Routes>
    )
}
export default AppRouter;