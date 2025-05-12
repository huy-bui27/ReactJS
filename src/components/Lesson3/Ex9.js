import React from "react";
function Ex9() {
    function Heading({ text }) {
        return <h2>{text}</h2>;
    }

    const strings = ["Xin chào", "Chào mừng bạn", "React JSX"];
    const nameList = (
        <div>
            {strings.map((str, index) => (
                <div key={index}>
                    <Heading text={str} />
                </div>
            ))}
        </div>
    );
    return (
        <>
            {nameList}
            {Heading}
        </>
    );
}
export default Ex9;