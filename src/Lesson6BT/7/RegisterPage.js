import React, {useState} from 'react';
import RegisterForm from "./RegisterForm";

function RegisterPage() {
    const [users, setUsers] = useState([]);
    const addUser = (user) => {
        setUsers([...users, user]);
    };
    return (
        <div>
            <h2>Đăng ký</h2>
            <RegisterForm onSubmit={addUser}/>
            <h3>Danh sách người đăng ký</h3>
            <ul>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <li key={index}>{user.name}-{user.email}</li>
                    ))
                ) : (
                    <li> Chưa có người đăng ký</li>
                )}
            </ul>
        </div>
    )
}

export default RegisterPage;