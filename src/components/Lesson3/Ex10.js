import React from "react";
import Ex9 from "./Ex9";
function Ex10() {
    const myStyle={
        color:"red",
        backgroundColor:" black",
        fontFamily:"Helvetica",
        fontWeight:"bold",
    }

    const nestedElement = (
        <div className="container">
            <h1 style={myStyle}>Day la noi dung cua the p</h1>
        </div>
    );
    return (
        <>
            {nestedElement}
            </>
    );
}
export default Ex10;