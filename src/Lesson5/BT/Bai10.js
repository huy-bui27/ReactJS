import React, {useState} from "react";
import Display10 from "./Display10";

function Bai10() {
    const [clickLabel, setClickLabel] = useState(null);
    return (
        <div>
            <h1>Nhấn:</h1>
            <Display10 label="Nút A" onButtonClick={setClickLabel}/>
            <Display10 label="Nút B" onButtonClick={setClickLabel}/>
            <Display10 label="Nút C" onButtonClick={setClickLabel}/>
            <p>{clickLabel ? `Ban da nhan: ${clickLabel}` : 'Chua nhan'}</p>

        </div>
    )
}

export default Bai10;