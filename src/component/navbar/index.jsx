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
                <li className='hover:text-gray-600 cursor-pointer'>Home</li>
                <li className='hover:text-gray-600 cursor-pointer'>Features</li>
                <li className='hover:text-gray-600 cursor-pointer'>Community</li>
                <li className='hover:text-gray-600 cursor-pointer'>Blog</li>
                <li className='hover:text-gray-600 cursor-pointer'>About us</li>
                <li className='hover:text-gray-600 cursor-pointer'>Contact us</li>
            </div>
            <div className='flex items-center space-x-4'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Login</button>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Signup</button>

                {/*<HiShoppingCart className="text-2xl cursor-pointer hover:text-gray-600"/>*/}
                <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                        onClick={() => setMenuOpen(!menuOpen)}/>
            </div>
            {menuOpen && (
                <ul className='md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-lg'>
                    <li className='hover:text-gray-600 cursor-pointer p-4'>Home</li>
                    <li className='hover:text-gray-600 cursor-pointer p-4'>Features</li>
                    <li className='hover:text-gray-600 cursor-pointer p-4'>Community</li>
                    <li className='hover:text-gray-600 cursor-pointer p-4'>Blog</li>
                    <li className='hover:text-gray-600 cursor-pointer p-4'>About us</li>
                    <li className='hover:text-gray-600 cursor-pointer p-4'>Contact us</li>
                </ul>
            )}
        </div>
    );
}

export default Navbar;