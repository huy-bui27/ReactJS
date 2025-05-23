import React from 'react';
import CommentForm from './CommentForm';

function CommentSection({comments, onSubmit}) {
    return (
        <div>
            <h3>Bình luận</h3>
            <ul>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))
                ) : (
                    <li>Chưa có bình luận</li>
                )}
            </ul>
            <CommentForm onSubmit={onSubmit}/>
        </div>
    );
}

export default CommentSection;