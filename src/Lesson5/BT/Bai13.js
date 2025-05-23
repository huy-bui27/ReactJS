import React, {useState} from 'react';
import PersonalInfoForm from "./Display13";

function App() {
    const [formData, setFormData] = useState({name: '', age: '', email: ''});

    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
    };

    return (
        <div>
            <h2>Form Thông Tin</h2>
            <PersonalInfoForm onChange={handleChange}/>
            <h3>Thông tin:</h3>
            <p>Tên: {formData.name || 'Chưa nhập'}</p>
            <p>Tuổi: {formData.age || 'Chưa nhập'}</p>
            <p>Email: {formData.email || 'Chưa nhập'}</p>
        </div>
    );
}

export default App;