import React from "react";

function NameDisplay({name}) {
    return (
        <button onClick={() => alert(name)}>Hien thi ten</button>
    )
}

function App() {
    return (
        <div>
            <NameDisplay name={"name"}/>
        </div>
    )
}

export default App;