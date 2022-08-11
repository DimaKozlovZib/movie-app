import React, { useState } from "react";
import classes from "./Torch.module.css";

function Torch(arg) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [Gradient, setGradient] = useState("radial-gradient(circle at -10000px -10000px, transparent,#000 20%)");
    const [tirchVisible, settirchVisible] = useState(false);

    function torchMove(e) {
        settirchVisible(true);
        setX(e.pageX);
        setY(e.pageY);
        setGradient(`radial-gradient(circle at ${x}px ${y}px, transparent,#000 20%)`)
    }
    function torchUnvisible() {
        console.log(tirchVisible)
        if (tirchVisible) {
            settirchVisible(false);
            setGradient("radial-gradient(circle at -10000px -10000px, transparent,#000 20%)");
        }
    }

    return (
        <div
            onMouseMove={torchMove}
            onTouchMove={torchMove}
            onMouseOut={torchUnvisible}
            className={classes.torchWrapper}
        >

            <div className={"container " + classes.container}>
                <div className={classes.torchTextContant}>
                    {arg.textContant === false ? "" : arg.textContant}
                </div>
            </div>
            <div style={{ background: Gradient }} className={classes.torch} id="torch"></div>
        </div>
    )
}

export default Torch;