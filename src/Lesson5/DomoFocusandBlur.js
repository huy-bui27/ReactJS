import React from "react";

function DomoFocusAndBlur() {
    const handleOnFocus = () => {
        console.log("Focus");
    }
    const handleOnBlur = () => {
        console.log("Blur");
    }
    return (
        <input onFocus={handleOnFocus} onBlur={handleOnBlur} placeholder="Dien"/>
    )
}

export default DomoFocusAndBlur;
