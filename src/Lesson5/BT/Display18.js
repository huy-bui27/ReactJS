import React from 'react';

function PaymentMethodForm({onChange}) {
    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="payment"
                    value="Tiền mặt"
                    onChange={(e) => onChange(e.target.value)}
                />
                Tiền mặt
            </label>
            <label>
                <input
                    type="radio"
                    name="payment"
                    value="Thẻ tín dụng"
                    onChange={(e) => onChange(e.target.value)}
                />
                Thẻ tín dụng
            </label>
            <label>
                <input
                    type="radio"
                    name="payment"
                    value="Chuyển khoản"
                    onChange={(e) => onChange(e.target.value)}
                />
                Chuyển khoản
            </label>
        </div>
    );
}

export default PaymentMethodForm;