import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import myLogo from "../../asset/MyLogoRefactored.png";
import { HiMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import Sidebar from "../../component/sidebar/Sidebar";
import { IoIosNotifications } from "react-icons/io";
import ThemeToggle from "../../component/toggle/ThemeToggle";
import Charts from "../../component/Charts/Charts";
import OrderTable from "../../component/Charts/OrderTable";
import InventoryManagement from "../../component/Charts/InventoryManagement";
import {Analytics} from "@mui/icons-material";

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

const SupplierDashBoard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <section className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 shadow-md bg-[#093c5e]'>
                <div className='flex items-center'>
                    <img src={myLogo} alt="Shopper Logo" className='h-8 w-8 mr-2' />
                    <p className='text-lg font-bold text-white'>Quagga</p>
                </div>
                <div className='hidden md:flex space-x-6 text-lg'>
                    <SearchField variant="outlined" placeholder="Search" size="medium" />
                    <div className='hover:text-gray-600 cursor-pointer text-white'>Specialist</div>
                    <div className='hover:text-gray-600 cursor-pointer text-white'>Professional</div>

                </div>
                <div className="flex items-center space-x-4">
                    <FaUser className="hidden md:block text-white" />
                    <IoIosNotifications className="hidden md:block text-white" />
                    <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                            onClick={() => setMenuOpen(!menuOpen)} />
                    <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600 ml-2"
                            onClick={() => setSidebarOpen(!sidebarOpen)} />
                    <ThemeToggle/>
                </div>
                {menuOpen && (
                    <ul className='md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-lg'>
                        <div className='hover:text-gray-600 cursor-pointer'>Specialist</div>
                        <div className='hover:text-gray-600 cursor-pointer'>Professional</div>
                        <div className='hover:text-gray-600 cursor-pointer'>Client</div>
                    </ul>
                )}
            </section>
            <div className='flex pt-16'>
                <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} md:w-auto w-full`}>
                    <Sidebar />
                </div>



                <div className='flex-1 container mx-auto p-6'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Charts/>
                    <OrderTable/>
                    <InventoryManagement />
                    <Analytics />
                    {/*<DataTable/>*/}
                    </div>
                    <section className="container mx-auto p-10 md:py-12 md:px-0">
                        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
                            <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <img src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" alt="" />
                                <div className="space-x-1 flex justify-center mt-10">
                                </div>
                                <h1 className="text-3xl my-5">Soft Plushy Cushion Chair</h1>
                                <p className="mb-5">Transform your living space with our Soft Plushy Cushion Chair...</p>
                                <h2 className="font-semibold mb-5">₦200,000</h2>
                                <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
                            </section>

                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SupplierDashBoard;
