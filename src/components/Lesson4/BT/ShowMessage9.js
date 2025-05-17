import React from "react";
function Alert({type, message}) {
    const backgroundColor = {
        success: 'green',
        warning: 'yellow',
        error: 'red'
    }[type] || '#e2e3e5';
    return (
        <div style={{
            backgroundColor,
            padding:'20px',
            borderRadius: '5px',
            margin: '10px 0',
            color:'#333'
        }}>{message}</div>
    )
}


export default Alert;