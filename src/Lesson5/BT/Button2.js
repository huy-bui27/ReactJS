import React from 'react';

function Button2({onButtonClick}) {
    return <button onClick={() => onButtonClick(2)}>Nut 2</button>
}

export default Button2;