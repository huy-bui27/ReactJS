import React from "react";
function PostItem({title,date, excerpt}) {
    return(
        <div>
            <h2>{title}</h2>
            <p><em>{date}</em></p>
            <p>{excerpt}</p>
            <hr/>
        </div>
    )
}
function PostList({posts}) {
    return (
        <div>
            {posts.map((post, index) => (<PostItem key={index} title={post.title} date={post.date}
            excerpt={post.excerpt} />))}
        </div>
    )
}
export default PostList;