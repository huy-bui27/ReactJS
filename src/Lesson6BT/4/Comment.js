import {useState} from "react";
import CommentSection from "./CommentSection";

function Comment() {
    const [comments, setComments] = useState([]);
    const addComment = (content) => {
        setComments([...comments, content]);
    }
    return (
        <div>
            <CommentSection comments={comments} onSubmit={addComment}/>
        </div>
    )
}

export default Comment;