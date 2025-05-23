import React from "react";

function DemoOnSubmit() {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    }
    return (
        <>
            <form onSubmit={handleSubmitForm}>
                <input type="text"/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default DemoOnSubmit;
