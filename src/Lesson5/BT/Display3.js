import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    const handleIncrement = () => {
        setNumber(number + 1);
        console.log(number + 1);
    };
    const handleDecrement = () => {
        setNumber(number - 1);
        console.log(number - 1);
    };
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <p>So hien tai:{number}</p>
        </div>
    )
}

export default Counter;