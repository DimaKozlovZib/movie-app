import React from "react";
import "./Error.css"

function Error({ tryAgainFunc }) {
    return (
        <div className="Error-wrapper">
            <div className="error-icon"><span>!</span></div>
            <div className="FetchError">Ой что-то пошло не так! Проверьте соединение с интернетом.</div>
            <button className="tryAgain" onClick={tryAgainFunc}>Повторить</button>
        </div>
    )
}

export default Error;