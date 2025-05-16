import React from "react";
function Ex17() {
    const myStyle={
        fontSize:"18px",
        fontWeight:"bold",
    }
    const nestedElement = (
        <div className="container">
            <span style={myStyle}>Quantrong!</span>
        </div>
    );
    return (
        <>
            {nestedElement}
            </>
    );
}
export default Ex17;