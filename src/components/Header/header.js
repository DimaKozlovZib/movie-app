import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AboutPath, FilmsListPath, TopFilmsPath } from "../../routes";
import "./header.css";

function Header() {
    const [MobileMenuActive, setMobileMenuActive] = useState('initialState');

    const openMobileMenu = () => {
        if (MobileMenuActive === 'active') {
            setMobileMenuActive("");
            document.querySelector('body').style.overflow = 'auto';
        } else {
            setMobileMenuActive("active");
            document.querySelector('body').style.overflow = 'hidden';
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1>MOVIE</h1>
                </div>
                <div className={`navigate__wrapper ${MobileMenuActive}`}>
                    <nav className="navigate">
                        <div className="navigate__item">
                            <Link to={`/${AboutPath}`}>О проэкте</Link>
                        </div>
                        <div className="navigate__item">
                            <Link to={`/${FilmsListPath}`}>Фильмы</Link>
                        </div>
                        <div className="navigate__item">
                            <Link to={`/${TopFilmsPath}`}>Топ фильмов</Link>
                        </div>
                    </nav>
                    <button className={`mobile-menu ${MobileMenuActive}`} onClick={openMobileMenu}>
                        <span></span>
                    </button>
                </div>


            </div>
        </header>
    )
};

export default Header;