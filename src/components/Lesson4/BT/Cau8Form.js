import React from 'react';
import InputField from "./Cau8Input";
import SubmitButton from "./Cau8Button";

function FormRegister() {
    return(
        <form className="registration-form-static">
            <h1>Form Register</h1>
            <InputField label="Name" type = "text" id="name" />
            <SubmitButton text="Tim kiem" />
        </form>
    );
}
export default FormRegister;