import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#093c5e] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-semibold mb-2">About Us</h2>
                        <p className="text-gray-400">
                            Quagga developers building great software.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                        <ul>
                            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size="1.5em" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size="1.5em" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size="1.5em" /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-400 mt-8">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
