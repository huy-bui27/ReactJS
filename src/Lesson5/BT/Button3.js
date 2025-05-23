import React from 'react';

function Button3({onButtonClick}) {
    return <button onClick={() => onButtonClick(3)}>Nut 3</button>
}

export default Button3;