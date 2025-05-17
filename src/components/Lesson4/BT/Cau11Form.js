import React from 'react';
import InputField from "./Cau11Input";
import SubmitButton from "./Cau11Button";

function FormRegister() {
    return(
        <form className="registration-form-static">
            <h1>Form Register</h1>
            <InputField label="Name" type = "text" id="name" />
            <InputField label="Email" type = "email" id="email" />
            <InputField label="Message" type = "text" id="message" />
            <SubmitButton text="Gui" />
        </form>
    );
}
export default FormRegister;