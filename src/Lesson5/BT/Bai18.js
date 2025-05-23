import React, {useState} from 'react';
import PaymentMethodForm from './Display18';

function App() {
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <div>
            <PaymentMethodForm onChange={handleChange}/>
            <p>Phương thức thanh toán: {paymentMethod || 'Chưa chọn'}</p>
        </div>
    );
}

export default App;