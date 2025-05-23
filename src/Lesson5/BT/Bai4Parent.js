import React from "react";
import Child4 from "./bai4Child";

function Parent() {
    const handleClick = () => {
        alert("Clicked!");
    }
    return (
        <>
            <h1>Parent component</h1>
            <Child4 handleClick={handleClick}/>
        </>
    )
}

export default Parent;
