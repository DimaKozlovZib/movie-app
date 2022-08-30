import React, { memo, useState } from "react";
import "./ImageLoad.css";

const ImageLoad = memo(({ url }) => {
    const [LoadNow, setLoad] = useState(true);

    return (
        <img onLoad={() => setLoad(false)} src={url} className={LoadNow ? "Load-Now" : ''} />
    )
})

export default ImageLoad;