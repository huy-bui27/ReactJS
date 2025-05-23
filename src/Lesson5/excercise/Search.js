import React from "react";
import SearchBox from "./SearchBox";

function Search() {
    const products = ["Iphone", "Macbook", "Ipad", "Airpod", "Imac"];
    const handleSearch = (keyword) => {
        const productResult = products.filter(
            product => product.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
        );
        console.log("Ket qua:", productResult);

    }
    return (
        <SearchBox handleSearch={handleSearch}/>
    )
}

export default Search;