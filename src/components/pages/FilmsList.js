import React from 'react';
import getFilmsByFilters from '../Api/getFilmsByFilters';
import FilmsPreviewBox from '../FilmsPreviewBox/FilmsPreviewBox';
import Layout from './Layout';

const FilmsList = () => {
    return (
        <Layout>
            <FilmsPreviewBox getApiFunc={getFilmsByFilters} needFilters={true} title={'Фильмы'} />
        </Layout>
    );
}

export default FilmsList;
