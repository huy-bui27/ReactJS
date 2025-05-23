import React from "react";

function OnMouseOver() {
    const handleMouseOver = () => {
        console.log("mouse");
    }
    const handleMouseOut = () => {
        console.log("leave");
    }
    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hover over me</div>
    )
}

export default OnMouseOver;
