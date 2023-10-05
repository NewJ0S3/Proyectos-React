import React from "react";
import "../styles.css/Contador.css"

function Contador({numClicks}) {
    return (
        <div className="contador">
            {numClicks}
        </div>
    );
}

export default Contador;