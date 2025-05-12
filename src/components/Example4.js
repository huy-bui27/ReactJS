import React from "react";
function Example4() {
    const myStyle={
        color:"red",
        backgroundColor:" black",
        fontFamily:"Helvetica",
        fontWeight:"bold",
    }
    const linkElement =(
        <a href="https://www.google.com/search?q=gg+d%E1%BB%8Bch&rlz=1C1GCEA_enVN1133VN1133&oq=gg&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg8IARBFGDsYgwEYsQMYgAQyDAgCECMYJxiABBiKBTINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzY2MmowajeoAgiwAgHxBXGyMsVcezST&sourceid=chrome&ie=UTF-8" target="_blank" className="link">Link GG dich</a>
    );
    const nestedElement = (
        <div className="container">
            <p style={myStyle}>Day la noi dung cua the p</p>
            <span>Day la noi dung cua the span</span>
        </div>
    );
    return (
        <>
            {nestedElement}
            {linkElement}</>
    );
}
export default Example4;