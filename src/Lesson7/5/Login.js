import React, {useState} from 'react';
import LoginForm from './LoginForm';

function Login() {
    const [message, setMessage] = useState('');

    const handleLogin = (email, password) => {
        if (email === 'admin@gmail.com' && password === '1234') {
            setMessage('Đăng nhập thành công!');
        } else {
            setMessage('Đăng nhập thất bại. Vui lòng kiểm tra email hoặc password.');
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <LoginForm onSubmit={handleLogin}/>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;