import React from "react";

function OnMouse() {
    const handleMouseEnter = () => {
        console.log("mouse");
    }
    const handleMouseLeave = () => {
        console.log("leave");
    }
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hover over me</div>
    )
}

export default OnMouse;
