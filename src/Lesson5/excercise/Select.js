import React from "react";

function CountrySelector({handleSelectCountry}) {
    return (
        <select onChange={(e) => handleSelectCountry(e.target.value)}>
            <option value={null}>Moi chon quoc gia</option>
            <option value={"VN"}>Viet Nam</option>
            <option value={"US"}>My</option>
            <option value={"JP"}>Nhat Ban</option>
        </select>
    )
}

export default CountrySelector;