import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import myLogo from "../../asset/MyLogoRefactored.png";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const SearchField = styled(TextField)({
    backgroundColor: 'white',
    borderRadius: '50px',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#B3B3B3',
            borderRadius: '50px',
        },
        '&:hover fieldset': {
            borderColor: '#B3B3B3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#B3B3B3',
        },
    },
});

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleContactUsClick = () => {
        navigate('/contact')
    }

    const handleSignupClick = () => {
        navigate('/signUp');
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-50 mb-16 flex justify-between items-center p-4 shadow-md bg-[#06324e]'>
            <div className='flex items-center mb-4'>
                <img src={myLogo} alt="Shopper Logo" className='h-8 w-8 mr-2'/>
                <p className='text-lg font-bold text-white'>Quagga</p>
            </div>
            <div className='hidden md:flex space-x-6 text-lg'>
                <div className='hover:text-gray-600 cursor-pointer text-white'>Home</div>
                <div className='hover:text-gray-600 cursor-pointer text-white'>Features</div>
                <div>
                    <SearchField
                        variant="outlined"
                        placeholder="Search"
                        size="small"
                    />
                </div>
                <div className='hover:text-gray-600 cursor-pointer text-white'>Community</div>
                <div className='hover:text-gray-600 cursor-pointer text-white'>Blog</div>
                <div className='hover:text-gray-600 cursor-pointer text-white'>About us</div>
                <div className='hover:text-gray-600 cursor-pointer text-white'
                     onClick={handleContactUsClick}
                >Contact us</div>
            </div>
            <div className='flex items-center space-x-4'>
                <button
                    className='bg-[#00ade2] text-white px-4 py-2 rounded-3xl hover:bg-[#0fffe6]'
                    onClick={handleLoginClick}
                >
                    Login
                </button>
                <button
                    className='bg-[#00ade2] text-white px-4 py-2 rounded-3xl hover:bg-[#0fffe6]'
                    onClick={handleSignupClick}
                >
                    Signup
                </button>
                <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                        onClick={() => setMenuOpen(!menuOpen)}/>
            </div>
            {menuOpen && (
                <ul className='md:hidden absolute z-10 top-16 left-0 w-full bg-white shadow-md text-lg'>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Home</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Features</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Community</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Blog</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>About us</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Contact us</div>
                </ul>
            )}
        </div>
    );
}

export default Navbar;
