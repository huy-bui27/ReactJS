import React from 'react';

function Display10({label, onButtonClick}) {
    return <button onClick={() => onButtonClick(label)}>{label}</button>
}

export default Display10;