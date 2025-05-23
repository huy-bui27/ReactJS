import React from "react";
import CountrySelector from "./Select";

function Select() {
    const handleSelectCountry = (code) => {
        const greeting = {
            VN: "Xin chao",
            US: "Hello",
            JP: "Kon ni cho wa",
        }
        console.log(greeting[code]);
    }
    return (
        <CountrySelector handleSelectCountry={handleSelectCountry}/>
    )
}

export default Select;