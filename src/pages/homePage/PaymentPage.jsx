import React, { useState } from 'react';
import { HiOutlineCreditCard, HiOutlineOfficeBuilding, HiOutlineCash } from "react-icons/hi";
import { FaPaypal } from 'react-icons/fa';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
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
                        <div className="flex justify-between py-2">
                            <span>Product 1</span>
                            <span>₦100,000</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>Product 2</span>
                            <span>₦200,000</span>
                        </div>
                    </div>
                    <div className="flex justify-between py-2 font-bold">
                        <span>Total</span>
                        <span>₦300,000</span>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    <div className="space-y-4">
                        {/* Credit Card */}
                        <div
                            className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'credit-card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                            onClick={() => handlePaymentMethodChange('credit-card')}
                        >
                            <HiOutlineCreditCard className="text-2xl text-blue-600 mr-4" />
                            <span>Credit Card</span>
                        </div>

                        {/* PayPal */}
                        <div
                            className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                            onClick={() => handlePaymentMethodChange('paypal')}
                        >
                            <FaPaypal className="text-2xl text-blue-600 mr-4" />
                            <span>PayPal</span>
                        </div>

                        {/* Bank Transfer */}
                        <div
                            className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'bank' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                            onClick={() => handlePaymentMethodChange('bank')}
                        >
                            <HiOutlineOfficeBuilding className="text-2xl text-blue-600 mr-4" />
                            <span>Bank Transfer</span>
                        </div>

                        {/* Cash on Delivery */}
                        <div
                            className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'cash' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                            onClick={() => handlePaymentMethodChange('cash')}
                        >
                            <HiOutlineCash className="text-2xl text-blue-600 mr-4" />
                            <span>Cash on Delivery</span>
                        </div>
                    </div>
                </div>

                {/* Billing Information */}
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

                {/* Payment Summary */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
                    <div className="flex justify-between py-2">
                        <span>Subtotal</span>
                        <span>₦300,000</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span>Shipping</span>
                        <span>₦10,000</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span>Taxes</span>
                        <span>₦5,000</span>
                    </div>
                    <div className="flex justify-between py-2 font-bold border-t mt-4 pt-4">
                        <span>Total</span>
                        <span>₦315,000</span>
                    </div>

                    {/* Confirmation Button */}
                    <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                        Confirm Payment
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PaymentPage;
