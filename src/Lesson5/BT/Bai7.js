import React from "react";
import Display7 from "./Display7";

function Bai7() {
    const getGender = (gender) => {
        alert("Ban da chon:" + gender);
    };
    return (
        <div>
            <h2>Chon gioi tinh:</h2>
            <Display7 tellParent={getGender}/>
        </div>
    );
}

export default Bai7;