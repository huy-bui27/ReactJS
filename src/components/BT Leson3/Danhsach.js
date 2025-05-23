import React from "react";

function danhSach() {
    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Apricot",
        "Black rowan",
        "Cranberry"
    ];
    return (
        <div>
            <h1>List of fruits</h1>
            <ul>
                {fruits.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default danhSach;