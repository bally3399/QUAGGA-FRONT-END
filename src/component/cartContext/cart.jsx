
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart, totalPrice } = useContext(CartContext);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                    <span>{item.name} - ${item.price}</span>
                    <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2">Remove</button>
                </div>
            ))}
            <div className="font-bold text-xl">Total: ${totalPrice}</div>
        </div>
    );
};

export default Cart;
