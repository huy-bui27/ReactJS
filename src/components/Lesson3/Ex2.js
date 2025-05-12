import React from "react";
function Ex2() {
    const user = {
        firstName: "John",
        lastName: "Doe",
    }
    function formatName(user) {
        return `${user.firstName} ${user.lastName}`;
    }
    return (
        <h2>Xin chao, {formatName(user)}</h2>
    )
}
export default Ex2;