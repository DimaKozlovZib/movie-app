import React from 'react';
import { useParams } from 'react-router-dom';
import AboutFilm from '../AboutFilm/AboutFilm';
import Layout from './Layout';

const FilmById = () => {
    const params = useParams();
    return (
        <Layout>
            <AboutFilm filmId={params.id} />
        </Layout>
    );
}

export default FilmById;
