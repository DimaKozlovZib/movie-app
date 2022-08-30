import './App.css';
import React, { useState } from 'react';
import AboutFilm from './components/AboutFilm/AboutFilm';
import { WindowAboutFilmContext } from './components/Context';
import FilmsPreviewBox from './components/FilmsPreviewBox/FilmsPreviewBox';
import Header from './components/Header/header';
import Torch from './components/Torch/Torch';

function App() {
  const [OpenFilmId, setOpenFilmId] = useState(null);
  const [WindowIsVisible, setWindowIsVisible] = useState(false);

  return (
    <WindowAboutFilmContext.Provider value={{
      OpenFilmId,
      setOpenFilmId,
      WindowIsVisible,
      setWindowIsVisible
    }}>
      <div className="App">

        <AboutFilm filmId={OpenFilmId} visible={WindowIsVisible} setVisible={setWindowIsVisible} />

        <Header />
        <Torch textContant={
          <div>
            <h1>Movie app</h1>
            <h2>Easy movie search</h2>
          </div>
        } />
        <FilmsPreviewBox />
      </div>
    </WindowAboutFilmContext.Provider>
  );
}

export default App;
