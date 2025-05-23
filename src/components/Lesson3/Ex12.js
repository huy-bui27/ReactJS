import React from "react";

function Ex12() {
    const product = {
        name: "Huy",
        price: 12,

    };
    const productDisplay = (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    )
    return (
        <>
            {productDisplay}</>
    );
}

export default Ex12;