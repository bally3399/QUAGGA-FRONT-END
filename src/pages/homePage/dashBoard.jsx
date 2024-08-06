import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import myLogo from "../../asset/MyLogoRefactored.png";
import { HiMenu } from "react-icons/hi";


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

const DashBoard = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex justify-between items-center p-4 shadow-md bg-[#01ace3]'>
            <div className='flex items-center mb-4'>
                <img src={myLogo} alt="Shopper Logo" className='h-8 w-8 mr-2' />
                <p className='text-lg font-bold'>Quagga</p>
            </div>
            <div className='hidden md:flex space-x-6 text-lg'>
                <div className='hover:text-gray-600 cursor-pointer'>Home</div>
                <div className='hover:text-gray-600 cursor-pointer'>Features</div>
                <div>
                    <SearchField
                        variant="outlined"
                        placeholder="Search"
                        size="small"
                    />
                </div>
                <div className='hover:text-gray-600 cursor-pointer'>Community</div>
                <div className='hover:text-gray-600 cursor-pointer'>Blog</div>
                <div className='hover:text-gray-600 cursor-pointer'>About us</div>
                <div className='hover:text-gray-600 cursor-pointer'>Contact us</div>
            </div>
            <div className='flex items-center space-x-4'>
                <button
                    className='bg-[#093c5e] text-white px-4 py-2 rounded-3xl hover:bg-[#093c5e]'
                >
                    Logout
                </button>

                <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                    onClick={() => setMenuOpen(!menuOpen)} />
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
    )

}
export default DashBoard;