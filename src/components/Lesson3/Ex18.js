import React from "react";
function Ex18() {
    function NumberDisplay({num}) {
        return <p>So la:{num}</p>;
    }
   const numbers = [10,25,30]
    const displayNumbers =(
        <div>
            {numbers.map((number,index) => (
                <div key={index}><NumberDisplay num ={number} /></div>
            ))}
        </div>
    )
    return (
        <>{displayNumbers}</>
    );

}

export default Ex18;