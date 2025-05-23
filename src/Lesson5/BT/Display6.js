import React from "react";

function LikeDislikeButtons({onFeedback}) {
    const handleLike = () => {
        onFeedback(true);
    }
    const handleDislike = () => {
        onFeedback(false);
    }
    return (
        <div>
            <h2> Phan hoi</h2>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
        </div>
    )
}

export default LikeDislikeButtons;