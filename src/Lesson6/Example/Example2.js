import {useState} from "react";

function Example2() {
    const [color, setColor] = useState('red');
    return (
        <div>
            <p style={{color: `${color}`}}>Color is : {color}</p>
            <button onClick={() => setColor('blue')} style={{color: 'blue'}}>Change color blue</button>
            <button onClick={() => setColor('red')} style={{color: 'red'}}>Change color blue</button>

        </div>
    )
}

export default Example2;