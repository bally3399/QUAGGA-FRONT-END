import React, { useState } from 'react';
// import { HiShoppingCart } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import myLogo from"../../asset/MyLogoRefactored.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex justify-between items-center p-4 shadow-md'>
            <div className='flex items-center'>
                <img src={myLogo} alt="Shopper Logo" className='h-8 w-8 mr-2'/>
                <p className='text-lg font-semibold'>Quagga</p>
            </div>
            <div className='hidden md:flex space-x-6 text-lg'>
                <div className='hover:text-gray-600 cursor-pointer'>Home</div>
                <div className='hover:text-gray-600 cursor-pointer'>Features</div>
                <div className='hover:text-gray-600 cursor-pointer'>Community</div>
                <div className='hover:text-gray-600 cursor-pointer'>Blog</div>
                <div className='hover:text-gray-600 cursor-pointer'>About us</div>
                <div className='hover:text-gray-600 cursor-pointer'>Contact us</div>
            </div>
            <div className='flex items-center space-x-4'>
                <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600'>Login</button>
                <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600'>Signup</button>

                <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                        onClick={() => setMenuOpen(!menuOpen)}/>
            </div>
            {menuOpen && (
                <ul className='md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-lg'>
                    <div className='hover:text-gray-600 cursor-pointer p-4'>Home</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4'>Features</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4'>Community</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4'>Blog</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4'>About us</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4'>Contact us</div>
                </ul>
            )}
        </div>
    );
}

export default Navbar;