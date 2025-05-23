import React from "react";

function MenuItem({label, onSelect, isActive}) {
    return (
        <button
            onClick={() => onSelect(label)}
            style={{fontWeight: isActive ? 'bold' : 'normal'}}>
            {label}
        </button>
    )
}

export default MenuItem;