import React from "react";
import "./Loader.css";

function Loader() {
    // если массив с фильмами не пустой то loader не появляется
    return (
        <div className="loader-wrapper">
            <div className={`Loader`}></div>
        </div>
    )
}

export default Loader;