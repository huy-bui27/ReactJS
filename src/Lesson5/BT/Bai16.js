import React from "react";
import Display16 from "./Display16";

function Bai16() {
    const handleSelectCountry = (code) => {
        const greeting = {
            VN: "Xin chao",
            US: "Hello",
            TQ: "Ni hao",
        }
        console.log(greeting[code]);
    }
    return (
        <Display16 handleSelectCountry={handleSelectCountry}/>
    )
}

export default Bai16;