import React from "react";

function Display7({tellParent}) {
    const chooseGender = (gender) => {
        tellParent(gender);
    };
    return (
        <div>
            <button onClick={() => chooseGender('Nam')}>Nam</button>
            <button onClick={() => chooseGender('Nu')}>Nu</button>
            <button onClick={() => chooseGender('Khac')}>Khac</button>
        </div>
    );
}

export default Display7;