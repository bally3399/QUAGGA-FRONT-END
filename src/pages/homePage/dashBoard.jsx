import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import myLogo from "../../asset/MyLogoRefactored.png";
import { HiMenu } from "react-icons/hi";
import Footer from "../../component/footer/Footer";
import { FaUser } from "react-icons/fa";
import Sidebar from "../../component/sidebar/Sidebar";
import {IoIosNotifications} from "react-icons/io";


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
        <div>
        <section className='flex justify-between items-center p-4 shadow-md bg-[#093c5e]'>
            <div className='flex items-center mb-4'>
                <img src={myLogo} alt="Shopper Logo" className='h-8 w-8 mr-2' />
                <p className='text-lg font-bold text-white'>Quagga</p>
            </div>
            <div className='hidden md:flex space-x-6 text-lg'>
                <div>
                    <SearchField
                        variant="outlined"
                        placeholder="Search"
                        size="small"
                    />
                </div>
                <div className='hover:text-gray-600 cursor-pointer text-white'>Specialist</div>
                <div className='hover:text-gray-600 cursor-pointer text-white'>Professional</div>
                <div className='hover:text-gray-600 cursor-pointer text-white'>Client</div>
                <div className='hover:text-gray-600 cursor-pointer text-white'>Supplier</div>

            </div>
            <div className='flex items-center space-x-4'>
                <div>
                    <FaUser/>
                </div>
                <IoIosNotifications/>

                <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                        onClick={() => setMenuOpen(!menuOpen)}/>
            </div>
            {menuOpen && (
                <ul className='md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-lg'>
                    <div className='hover:text-gray-600 cursor-pointer'>Specialist</div>
                    <div className='hover:text-gray-600 cursor-pointer'>Professional</div>
                    <div className='hover:text-gray-600 cursor-pointer'>Client</div>
                    <div className='hover:text-gray-600 cursor-pointer'>Supplier</div>
                </ul>
            )}
        </section>
            <div>
                <Sidebar/>
            </div>
            <Footer/>
        </div>
    )

}
export default DashBoard;