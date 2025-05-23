import React from "react";

function DemoOnChange() {
    const handleOnChange = (e) => {
        e.preventDefault();
        console.log("Name type is:", e.target.value);
    }
    return (
        <>
            <input type="text" onChange={handleOnChange} placeholder="First Name"/>
        </>
    )
}

export default DemoOnChange;
