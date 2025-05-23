import React from 'react';

function CartItem7({item, onUpdate}) {
    return (
        <div>
            <span>{item.name}</span>
            <span> (Số lượng: {item.quantity})</span>
            <button onClick={() => onUpdate(item.name, item.quantity + 1)}>+</button>
            <button
                onClick={() => onUpdate(item.name, item.quantity - 1)}
                disabled={item.quantity <= 0}
            >
                −
            </button>
        </div>
    );
}

export default CartItem7;