import React, {useState} from 'react';
import CartItem7 from "./CartItem7";

function Cart7() {
    const [items, setItems] = useState([
        {name: 'Sản phẩm A', quantity: 1},
        {name: 'Sản phẩm B', quantity: 2},
        {name: 'Sản phẩm C', quantity: 0},
    ]);

    const updateQuantity = (name, newQuantity) => {
        if (newQuantity >= 0) {
            setItems((prev) =>
                prev.map((item) =>
                    item.name === name ? {...item, quantity: newQuantity} : item
                )
            );
        }
    };

    return (
        <div>
            <h2>Giỏ hàng</h2>
            {items.map((item) => (
                <CartItem7 key={item.name} item={item} onUpdate={updateQuantity}/>
            ))}
        </div>
    );
}

export default Cart7;