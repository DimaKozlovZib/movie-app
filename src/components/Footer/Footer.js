import React from 'react';
import { Link } from 'react-router-dom';
import { AboutPath, FilmsListPath, TopFilmsPath } from '../../routes';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className="logo">
                    <h1>MOVIE</h1>
                </div>
                <div className="pages">
                    <h4>Страницы</h4>
                    <ul>
                        <li>
                            <Link to={`/${AboutPath}`}>О проэкте</Link>
                        </li>
                        <li>
                            <Link to={`/${FilmsListPath}`}>Фильмы</Link>
                        </li>
                        <li>
                            <Link to={`/${TopFilmsPath}`}>Топ фильмов</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
