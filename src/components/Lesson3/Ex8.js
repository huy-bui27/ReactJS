import React from "react";
function Ex8() {
    const nestedElement = (
        <div className="container">
            <p>Day la noi dung cua the p</p>
            <span>Day la noi dung cua the span</span>
        </div>
    )
    return (
        <> {nestedElement}
            </>
    );
}
export default Ex8;