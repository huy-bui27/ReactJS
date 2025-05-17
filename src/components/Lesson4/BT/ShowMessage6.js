import React from "react";

function LoginStatus({isLoggedIn}) {
    return (
        <p>{isLoggedIn ? "Da dang nhap" : "Chau dang nhap"}</p>
    )
}

export default LoginStatus;