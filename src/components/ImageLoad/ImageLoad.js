import React, { useState } from "react";
import "./ImageLoad.css";

function ImageLoad({ url }) {
    const [LoadNow, setLoad] = useState(true);

    function changeState() {
        setLoad(false)
    }

    return (
        <img onLoad={changeState} src={url} className={LoadNow ? "Load-Now" : ''} />
    )
}

export default ImageLoad;