import React, { useContext } from 'react';
import { CartContext } from '../../component/cartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddToCart = () => {
    const { cart, getTotalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    const handleProceedToPayment = () => {
        if (cart.length === 0) {
            toast.warning("Your cart is empty. Please add items before proceeding.");
        } else {
            navigate('/payment');
            toast.success("Navigating to payment...");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="border-b pb-4 flex justify-between">
                                <div>{item.name}</div>
                                <div>₦{item.price.toFixed(2)}</div>
                            </li>
                        ))}
                    </ul>
                    <div className="text-right font-bold text-lg mt-4">
                        Total: ₦{getTotalPrice().toFixed(2)}
                    </div>
                    <button
                        onClick={handleProceedToPayment}
                        className="bg-teal-500 text-white w-full py-2 mt-4 hover:bg-teal-600 transition"
                        aria-label="Proceed to Payment"
                    >
                        Proceed to Payment
                    </button>
                </>
            )}
        </div>
    );
};

export default AddToCart;