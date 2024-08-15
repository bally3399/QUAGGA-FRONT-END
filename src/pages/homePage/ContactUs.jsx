import React from "react";

const ContactUs = () => {
    return (
        <div className=" mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white  px-4 ">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                <form className="space-y-6">
                    <div className="relative">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <p className="text-gray-600">Or reach us at:</p>
                    <p className="text-gray-800 font-medium mt-2">support@example.com</p>
                    <p className="text-gray-800 font-medium mt-1">+123 456 7890</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;