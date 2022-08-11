import React from "react";
import classes from "./header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className="logo">
                    <h1>MOVIE</h1>
                </div>
            </div>
        </header>
    )
};

export default Header;