import React, {useState} from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";

function Bai9() {
    const [clickedButton, setClickedButton] = useState(null);
    return (
        <div>
            <h1>Nhấn:</h1>
            <Button1 onButtonClick={setClickedButton}/>
            <Button2 onButtonClick={setClickedButton}/>
            <Button3 onButtonClick={setClickedButton}/>
            <p>{clickedButton ? `Ban đã nhấn nút ${clickedButton}` : 'Chưa nhấn nút nào'}</p>
        </div>
    )
}

export default Bai9;