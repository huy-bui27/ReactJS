import {useState} from "react";

function Example1() {
    const [header, setHeader] = useState('This is header...');
    const [content, setContent] = useState('This is content...');
    return (
        <div>
            <h1>{header}</h1>
            <button onClick={() => setHeader("HeaderChange!")}>Change Header</button>
            <h2>{content}</h2>
            <button onClick={() => setContent("ContentChange!")}>Change Content</button>
        </div>
    )
}

export default Example1;