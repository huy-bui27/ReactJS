import React from "react";

const OnClickEvent = () => {
    const handleOnClick = (e) => {
        e.preventDefault();
        alert('clicked');
    }
    return (
        <>
            <button onClick={handleOnClick}>Click</button>
        </>
    )
}
export default OnClickEvent;