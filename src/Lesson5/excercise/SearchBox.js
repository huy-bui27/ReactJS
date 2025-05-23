import React from "react";

function SearchBox({handleSearch}) {
    return (
        <input placeholder="Search" onChange={(e) => handleSearch(e.target.value)}></input>
    );
}

export default SearchBox;