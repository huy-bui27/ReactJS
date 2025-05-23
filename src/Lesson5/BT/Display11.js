import React from "react";

function Display11({onNameChange}) {
    const handleChange = (e) => {
        const name = e.target.value;
        onNameChange(name);
    };
    return (
        <div>
            <label>
                <input type="text" onChange={handleChange}/>
            </label>
        </div>
    )
}

export default Display11;