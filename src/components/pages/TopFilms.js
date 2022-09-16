import React from 'react';
import getTopFims from '../Api/getTopFims';
import FilmsPreviewBox from '../FilmsPreviewBox/FilmsPreviewBox';
import Layout from './Layout';

const TopFilms = () => {
    return (
        <Layout>
            <FilmsPreviewBox getApiFunc={getTopFims} needFilters={false} title={'Топ фильмов'} />
        </Layout>
    );
}

export default TopFilms;
