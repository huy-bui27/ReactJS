import React from "react";

function DemoOnKeyupAndOnKeydown() {
    function handleOnKeyup(e) {
        e.preventDefault();
        console.log(e.key);
    }

    function handleOnKeydown(e) {
        e.preventDefault();
        console.log(e.key);
    }

    return (
        <input onKeyUp={handleOnKeyup} onKeyDown={handleOnKeydown} placeholder="Dien"/>
    )
}

export default DemoOnKeyupAndOnKeydown;
