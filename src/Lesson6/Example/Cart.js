import {useState} from "react";
import CartItem from "./CartItem";

function Cart() {
    const [items, setItem] = useState([
        {id: 1, name: 'Ao thun', price: 150000, quantity: 1},
        {id: 2, name: 'Quan bo', price: 300000, quantity: 5},
        {id: 3, name: 'Quan Baggy', price: 450000, quantity: 3},
    ]);
    const handleChangeQuantity = (id, newQuantity) => {
        setItem(
            (previos) => previos.map(
                (item) => item.id === id ? {...item, quantity: newQuantity} : item
            )
        )
    }
    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )
    return (
        <div>
            <h1>Gio hang</h1>
            {items.map((item) => (
                <CartItem onChangeQuantity={handleChangeQuantity} item={item}/>
            ))}
            <h1> Tong tien la: {totalPrice.toLocaleString()}đ</h1>
        </div>
    )
}

export default Cart;