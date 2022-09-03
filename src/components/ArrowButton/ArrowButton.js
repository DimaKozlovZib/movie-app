import React, { memo } from "react";
import "./ArrowButton.css"

const ArrowButton = memo(({ direction, clickFunc, disabled }) => {
    return (
        <button className={`${direction} change-page-arrowButton`}
            onClick={clickFunc}
            disabled={disabled}
        > <div className="arrowBox"><span></span></div></button >
    )
})

export default ArrowButton;