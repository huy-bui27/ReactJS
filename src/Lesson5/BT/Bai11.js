import React from "react";
import Display11 from "./Display11";

function Bai11() {
    const handleNameChange = (name) => {
        console.log('Ten', name);
    }
    return (
        <div>
            <h1>Nhap ten</h1>
            <Display11 onNameChange={handleNameChange}/>
        </div>
    )
}

export default Bai11;