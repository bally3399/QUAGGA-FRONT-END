import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import myLogo from "../../asset/MyLogoRefactored.png";
import { HiMenu } from "react-icons/hi";
import Footer from "../../component/footer/Footer";
import { FaUser } from "react-icons/fa";
import Sidebar from "../../component/sidebar/Sidebar";
import { IoIosNotifications } from "react-icons/io";


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
    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <div>
            <section className=' fixed top-0 left-0 right-0 z-50 mb-16 flex justify-between items-center p-4 shadow-md bg-[#093c5e]'>
                <div className='flex items-center mb-4'>
                    <img src={myLogo} alt="Shopper Logo" className='h-8 w-8 mr-2' />
                    <p className='text-lg font-bold text-white'>Quagga</p>
                </div>
                <div className='hidden md:flex space-x-6 text-lg'>
                    <div>
                        <SearchField
                            variant="outlined"
                            placeholder="Search"
                            size="medium"
                        />
                    </div>
                    <div className='hover:text-gray-600 cursor-pointer text-white'>Specialist</div>
                    <div className='hover:text-gray-600 cursor-pointer text-white'>Professional</div>
                    <div className='hover:text-gray-600 cursor-pointer text-white'>Client</div>
                    <div className='hover:text-gray-600 cursor-pointer text-white'>Supplier</div>

                </div>
                <div className="flex items-center space-x-4">
                    <FaUser className="hidden md:block text-white" />
                    <IoIosNotifications className="hidden md:block text-white" />
                    <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                        onClick={() => setMenuOpen(!menuOpen)} />
                    <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600 ml-2"
                        onClick={() => setSidebarOpen(!sidebarOpen)} />
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
            <div className='flex pt-16'>
                <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} md:w-auto w-full`}>
                    <Sidebar />
                </div>
                <div className='flex-1 p-4'>
                    <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0 ">
                        <section
                            className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
                            <section
                                className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <img src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" alt="" />
                                <div className="space-x-1 flex justify-center mt-10">
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                </div>
                                <h1 className="text-3xl my-5">Soft Plushy Cushion Chair</h1>
                                <p className="mb-5">Transform your living space with our Soft Plushy Cushion Chair, where luxury meets comfort. Designed for those who appreciate the finer things in life, this chair features ultra-soft fabric that cradles your body in cloud-like comfort.!</p>
                                <h2 className="font-semibold mb-5">₦200,000</h2>
                                <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add
                                    To Cart
                                </button>
                            </section>

                            <section
                                className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <img src="https://www.dropbox.com/s/8ymeus1n9k9bhpd/y16625.png?dl=1" alt="" />
                                <div className="space-x-1 flex justify-center mt-10">
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                </div>
                                <h1 className="text-3xl my-5">Comfortable Wooden Chair</h1>
                                <p className="mb-5">Enhance your space with the timeless charm of our Comfortable Wooden Chair. Combining sturdy craftsmanship with ergonomic design, this chair offers both style and support. Perfect for dining rooms, offices, or cozy reading nooks, it provides comfort without compromising on elegance.</p>
                                <h2 className="font-semibold mb-5">₦100,000</h2>
                                <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">Add
                                    To Cart
                                </button>
                            </section>

                            <section
                                className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <img src="https://www.dropbox.com/s/ykdro56f2qltxys/hh2774663-87776.png?dl=1" alt="" />
                                <div className="space-x-1 flex justify-center mt-10">
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                </div>
                                <h1 className="text-3xl my-5">Multipurpose Wooden Trolly</h1>
                                <p className="mb-5">Maximize your storage and organization with our Multipurpose Wooden Trolley.
                                    Designed for versatility, this stylish trolley features multiple shelves and smooth-rolling wheels,
                                    making it ideal for kitchens, offices, or living spaces. Crafted from durable wood, it combines practicality with a touch of rustic charm.!</p>
                                <h2 className="font-semibold mb-5">₦155,000</h2>
                                <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">Add To
                                    Cart
                                </button>
                            </section>

                            <section
                                className="p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <img src="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1" alt="" />
                                <div className="space-x-1 flex justify-center mt-10">
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14">
                                        <path
                                            d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                        </path>
                                    </svg>
                                </div>
                                <h1 className="text-3xl my-5">Multipurpose Wooden Tool</h1>
                                <p className="mb-5">Experience the versatility of our Multipurpose Wooden Tool, expertly crafted for durability and ease of use. This essential tool is perfect for various tasks, from DIY projects to everyday household needs. Its ergonomic design ensures a comfortable grip,
                                    while the natural wood finish adds a touch of elegance to your toolkit.!</p>
                                <h2 className="font-semibold mb-5">₦155,000</h2>
                                <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add To
                                    Cart
                                </button>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
            <Footer />

        </div>
    )

}
export default DashBoard;
