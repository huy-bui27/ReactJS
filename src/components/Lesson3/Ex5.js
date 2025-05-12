import React from "react";
function Ex5() {
    const names = ['Alice', 'Bob', 'Charlie']
    return (
        <ul>
            {names.map((name, i) => (
                <li key={i}>{name}</li>
            ))}
        </ul>
    );
}
export default Ex5;