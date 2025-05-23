import React from "react";

function Display16({handleSelectCountry}) {
    return (
        <select onChange={(e) => handleSelectCountry(e.target.value)}>
            <option value={null}>Moi chon quoc gia</option>
            <option value={"VN"}>Việt Nam</option>
            <option value={"US"}>Mỹ</option>
            <option value={"TQ"}>Trung Quốc</option>
        </select>
    )
}

export default Display16;