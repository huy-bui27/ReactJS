import React from "react";
import Counterbutton from "./Counterbutton";


function Counter() {

    return (
        <Counterbutton handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
    )
}

export default Counter;