import React, { useState } from "react";
import classes from "./Torch.module.css";

function Torch(arg) {
    const [Gradient, setGradient] = useState("radial-gradient(circle at -10000px -10000px, transparent,#000 20%)");
    const [torchVisible, settorchVisible] = useState(false);

    function torchMove(e) {
        settorchVisible(true);
        setGradient(`radial-gradient(circle at ${e.pageX}px ${e.pageY}px, transparent,#000 20%)`)
    }
    function torchUnvisible() {
        if (torchVisible) {
            settorchVisible(false);
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
            <div style={{ background: Gradient }} className={classes.torch}></div>
        </div>
    )
}

export default Torch;