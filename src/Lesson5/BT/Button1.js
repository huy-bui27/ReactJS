import React from 'react';

function Button1({onButtonClick}) {
    return <button onClick={() => onButtonClick(1)}>Nut 1</button>
}

export default Button1;