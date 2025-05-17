import React  from "react";
import PostList from "./ShowMessage7";

function Cau7(){
    const posts =[
        {
            title: 'Bài viết 1',
            date: '2025-05-17',
            excerpt: 'Đây là đoạn trích ngắn của bài viết đầu tiên.',
        },
        {
            title: 'Bài viết 2',
            date: '2025-05-18',
            excerpt: 'Đây là đoạn trích ngắn của bài viết thứ hai.',
        },
    ]
    return(
     <div>
         <h1>List:</h1>
         <PostList posts={posts} />
     </div>
    )
}
export default Cau7;