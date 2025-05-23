import React from "react";
import Child from "./Child";

function Parent() {
    const handleClick = () => {
        alert("Hello World!");
    }
    return (
        <>
            <h1>Parent component</h1>
            <Child handleClick={handleClick}/>
        </>
    )
}

export default Parent;
