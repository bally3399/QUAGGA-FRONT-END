import React, {useContext} from 'react';
import { HiOutlineCreditCard } from "react-icons/hi";
import {CartContext} from "../../component/cartContext/CartContext";
import axios from "axios";
import {toast} from "react-toastify";

const PaymentPage = () => {
    const { cart, totalPrice, userEmail } = useContext(CartContext);

    const handlePayment = async () => {
        try {
            const response = await axios.post('https://quagga.onrender.com/api/payments/initialize', {
                totalPrice,
                email: userEmail,
            });
            const { authorization_url } = response.data;
            window.location.href = authorization_url;
            if (response.data.success) {
                toast.success('Payment successful!');
                localStorage.removeItem('cart');
            }
        } catch (error) {
            toast.error("Payment initialization failed.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Payment Information</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Order Summary */}
                <div className="col-span-2 bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    <div className="border-b mb-4">
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <div key={index} className="flex justify-between py-2">
                                    <span>{item.name}</span>
                                    <span>₦{item.price}</span>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>

                    <div className="flex justify-between py-2 font-bold">
                        <span>Total</span>
                        <span>₦{totalPrice}</span>
                    </div>
                </div>


                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    <div className="space-y-4">
                        <div
                            className="flex items-center p-4 border rounded-lg cursor-pointer border-gray-300"
                            onClick={() => handlePayment()}
                        >
                            <HiOutlineCreditCard className="text-2xl text-blue-600 mr-4" />
                            <span>Paystack</span>
                        </div>
                    </div>
                </div>


                <div className="col-span-2 bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="p-3 border rounded-lg w-full"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="p-3 border rounded-lg w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Street Address"
                                className="p-3 border rounded-lg w-full"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="p-3 border rounded-lg w-full"
                            />
                            <input
                                type="text"
                                placeholder="State"
                                className="p-3 border rounded-lg w-full"
                            />
                            <input
                                type="text"
                                placeholder="ZIP Code"
                                className="p-3 border rounded-lg w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="p-3 border rounded-lg w-full"
                            />
                        </div>
                    </form>
                </div>


                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
                    <div className="flex justify-between py-2">
                        <span>Subtotal</span>
                        <span>₦{totalPrice}</span>
                    </div>

                    <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300" onClick={handlePayment}>
                        Confirm Payment
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PaymentPage;
