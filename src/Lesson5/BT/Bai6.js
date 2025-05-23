import React from "react";
import LikeDislikeButtons from "./Display6";

function Bai6() {
    const handleFeedback = (isLiked) => {
        alert(isLiked ? 'Ban thich' : 'Ban khong thich');
    }
    return (
        <div>
            <LikeDislikeButtons onFeedback={handleFeedback}/>
        </div>
    )
}

export default Bai6;