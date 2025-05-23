import React from "react";

function Ex15() {
    const items = [
        {id: 1, title: "Học JSX"},
        {id: 2, title: "Lập trình React"},
        {id: 3, title: "Xây dựng ứng dụng"}
    ];

    return (
        <ul>
            {items.map(item => (<li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );

}

export default Ex15;