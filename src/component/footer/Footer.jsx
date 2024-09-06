import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };

    return (
        <footer className="bg-[#06324e] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-lg font-semibold mb-2">About Us</h2>
                        <div onClick={handleAboutClick} className='text-gray-400 hover:text-white cursor-pointer mb-2'>
                            About us
                        </div>
                        <p className="text-gray-400">
                            Quagga software developer.
                        </p>
                    </div>


                    <div>
                        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                        <ul>
                            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size="1.5em" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size="1.5em" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size="1.5em" /></a>
                        </div>
                    </div>
                </div>


                <div className="text-center text-gray-400 mt-8">
                    Copyright &copy; 2024 All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
