import {useState} from "react";
import EmailInput from "./EmailInput";

function NewlettersForm() {
    let [email, setEmail] = useState('');
    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    }
    const handleSubmitForm = () => {
        alert(`Email đăng kí là :\`${email}\``)
    }
    return (
        <div>
            <h1>Đăng kí nhạn tin</h1>
            <EmailInput onChangeEmail={handleEmailChange} email={email}/>
            <button onClick={handleSubmitForm}>Gửi</button>
        </div>
    )
}

export default NewlettersForm;