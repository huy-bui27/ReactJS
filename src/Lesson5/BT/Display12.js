import React from "react";

function Display12({onSearch}) {

    return (
        <input type="text" placeholder="Tim kiem" onChange={(e) => onSearch(e.target.value)}/>
    )
}

export default Display12;