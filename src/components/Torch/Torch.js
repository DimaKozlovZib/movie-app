import React, { useState } from "react";
import "./Torch.css";

function Torch({ children, ...props }) {
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
            className={'torchWrapper'}
        >

            <div className={"container"}>
                <div className={'torchTextContant'}>
                    {children}
                </div>
            </div>
            <div style={{ background: Gradient }} className={'torch'}></div>
        </div>
    )
}

export default Torch;