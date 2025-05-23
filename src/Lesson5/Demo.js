import React from "react";

const DemoOnDoubleClickEvent = () => {
    const handleDoubleClick = (e) => {
        e.preventDefault();
        alert('clicked');
    }
    return (
        <>
            <button onDoubleClick={handleDoubleClick}>Click</button>
            ></>
    )
}
export default DemoOnDoubleClickEvent;