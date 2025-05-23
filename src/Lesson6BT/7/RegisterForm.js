import {useState} from "react";

function RegisterForm({onSubmit}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && email.trim()) {
            onSubmit({name, email});
            setName('');
            setEmail('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Tên:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Nhập tên'/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Nhập email'/>
                </label>
            </div>
            <button type="Submit">Đăng ký</button>
        </form>
    )
}

export default RegisterForm;