import React from "react";
import { Link } from "react-router-dom";
import { AboutPath, FilmsListPath } from "../../routes";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1>MOVIE</h1>
                </div>
                <nav className="navigate">
                    <div className="navigate__item">
                        <Link to={`/${AboutPath}`}>О проэкте</Link>
                    </div>
                    <div className="navigate__item">
                        <Link to={`/${FilmsListPath}`}>Фильмы</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;