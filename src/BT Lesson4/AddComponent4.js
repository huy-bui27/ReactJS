import React, {useState} from 'react';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const calculate = (operator) => {
        const n1 = Number(num1);
        const n2 = Number(num2);
        if (operator === '+') setResult(n1 + n2);
        if (operator === '-') setResult(n1 - n2);
        if (operator === 'x') setResult(n1 * n2);
        if (operator === '/') setResult(n2 !== 0 ? n1 / n2 : 'Error');
    };

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <br/>
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div>
                <button onClick={() => calculate('+')}>+</button>
                <button onClick={() => calculate('-')}>-</button>
                <button onClick={() => calculate('x')}>x</button>
                <button onClick={() => calculate('/')}>/</button>
            </div>
            <p>Result: {result}</p>
        </div>
    );
}

export default Calculator;