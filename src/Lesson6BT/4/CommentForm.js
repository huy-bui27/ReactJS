import {useState} from "react";

function CommentForm({onSubmit}) {
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            onSubmit(content);
            setContent('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={content}
                   onChange={(e) => setContent(e.target.value)}
                   placeholder="Enter Comment"/>
            <button type="Submit">Gui</button>
        </form>
    )
}

export default CommentForm;