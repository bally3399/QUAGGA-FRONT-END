import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import myLogo from "../../asset/MyLogoRefactored.png";
import { HiMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import Sidebar from "../../component/sidebar/Sidebar";
import { IoIosNotifications } from "react-icons/io";
import ThemeToggle from "../../component/toggle/ThemeToggle";
import Charts from "../../component/ChartsAndTables/Charts";
import OrderTable from "../../component/ChartsAndTables/OrderTable";
import InventoryManagement from "../../component/ChartsAndTables/InventoryManagement";
import { Analytics } from "@mui/icons-material";
import ProductCard from "../../component/productCard/productCard";

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
            <section className='fixed top-0 left-0 right-0 z-50 mb-16 flex justify-between items-center p-4 shadow-md bg-[#093c5e]'>
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
                    {/*<HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600 ml-2"*/}
                    {/*        onClick={() => setSidebarOpen(!sidebarOpen)} />*/}
                    <ThemeToggle/>
                 </div>
                {menuOpen && (
                    <ul className='md:hidden absolute top-16 left-0 w-full text-black bg-blue-100 shadow-md text-lg'>
                        <div className='hover:text-gray-600 cursor-pointer'>Specialist</div>
                        <div className='hover:text-gray-600 cursor-pointer'>Professional</div>
                        <div className='hover:text-gray-600 cursor-pointer'>Client</div>
                    </ul>
                )}
            </section>
            <div className='flex pt-16'>

                <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} fixed top-16 left-0 h-[calc(100vh-4rem)] w-[250px] bg-[#093c5e]`}>
                    <Sidebar />
                </div>


                <div className='flex-1 container mx-auto p-6 ml-[250px]'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Charts />
                        <OrderTable />
                        <InventoryManagement />
                        <Analytics />
                    </div>
                    <section className="container mx-auto p-10 md:py-12 md:px-0">
                        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
                            <ProductCard
                                bgColor="bg-purple-50"
                                imgSrc="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
                                title="Soft Plushy Cushion Chair"
                                description="Transform your living space with our Soft Plushy Cushion Chair, where luxury meets comfort. Designed for those who appreciate the finer things in life, this chair features ultra-soft fabric that cradles your body in cloud-like comfort."
                                price="₦200,000"
                                buttonColor="bg-purple-500 hover:bg-purple-600"
                            />
                            <ProductCard
                                bgColor="bg-green-50"
                                imgSrc="https://www.dropbox.com/s/8ymeus1n9k9bhpd/y16625.png?dl=1"
                                title="Comfortable Wooden Chair"
                                description="Introducing our Comfortable Wooden Chair, a perfect blend of style and functionality. Crafted from high-quality wood, this chair offers a sturdy yet elegant seating solution. Its ergonomic design ensures maximum comfort during long hours of use."
                                price="₦150,000"
                                buttonColor="bg-green-500 hover:bg-green-600"
                            />
                            <ProductCard
                                bgColor="bg-orange-50"
                                imgSrc="https://www.dropbox.com/s/ykdro56f2qltxys/hh2774663-87776.png?dl=1"
                                title="Ergonomic Office Chair"
                                description="Experience the ultimate in ergonomic comfort with our Ergonomic Office Chair. This chair is designed to support your posture and reduce strain, making it ideal for long hours of work. Its adjustable features ensure a customized fit."
                                price="₦75,000"
                                buttonColor="bg-orange-500 hover:bg-orange-600"
                            />
                            <ProductCard
                                bgColor="bg-blue-50"
                                imgSrc="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1"
                                title="Classic Wooden Rocking Chair"
                                description="Embrace the timeless charm of our Classic Wooden Rocking Chair. Perfect for relaxing after a long day, this chair features a smooth rocking motion and a sturdy wooden frame. Its traditional design adds a touch of elegance to any room."
                                price="₦100,000"
                                buttonColor="bg-blue-500 hover:bg-blue-600"
                            />

                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SupplierDashBoard;
