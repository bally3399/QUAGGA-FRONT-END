import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useEffect, useRef, useState } from "react";
import myLogo from "../../asset/MyLogoRefactored.png";
import {HiArrowLeft, HiMenu} from "react-icons/hi";
import Footer from "../../component/footer/Footer";
import { FaUser } from "react-icons/fa";
import Sidebar from "../../component/sidebar/Sidebar";
import ProductCard from "../../component/productCard/productCard";
import { IoIosNotifications } from "react-icons/io";
import axios from "axios";
import {useNavigate} from "react-router-dom";

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
    const [selectedOption, setSelectedOption] = useState('');
    const [data, setData] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [noDataStatus, setNoDataStatus] = useState({
        Specialist: false,
        Professional: false,
        Supplier: false,
    });
    const noDataTimeoutRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = async (option) => {
        setSelectedOption(option);
        setShowDropdown(false);

        setNoDataStatus((prevState) => ({ ...prevState, [option]: false }));

        let endpoint = '';

        switch (option) {
            case 'Specialist':
                endpoint = 'https://quagga.onrender.com/api/v1/quagga/specialist/findAll';
                break;
            case 'Professional':
                endpoint = 'https://quagga.onrender.com/api/v1/quagga/professional/findAll';
                break;
            case 'Supplier':
                endpoint = 'https://quagga.onrender.com/api/v1/quagga/supplier/findAll';
                break;
            default:
                return;
        }

        try {
            const response = await axios.get(endpoint);
            const data = response.data.userResponse || [];
            setData(data);

            if (data.length === 0) {
                setNoDataStatus((prevState) => ({ ...prevState, [option]: true }));
                if (noDataTimeoutRef.current) {
                    clearTimeout(noDataTimeoutRef.current);
                }
                noDataTimeoutRef.current = setTimeout(() => {
                    setNoDataStatus((prevState) => ({ ...prevState, [option]: false }));
                }, 3000);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
            setNoDataStatus((prevState) => ({ ...prevState, [option]: true }));
            if (noDataTimeoutRef.current) {
                clearTimeout(noDataTimeoutRef.current);
            }
            noDataTimeoutRef.current = setTimeout(() => {
                setNoDataStatus((prevState) => ({ ...prevState, [option]: false }));
            }, 3000);
        } finally {
            setShowDropdown(true);
        }
    };

    useEffect(() => {
        return () => {
            if (noDataTimeoutRef.current) {
                clearTimeout(noDataTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div>
            <section className='fixed top-0 left-0 right-0 z-50 mb-16 flex justify-between items-center p-4 shadow-md bg-[#093c5e]'>
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
                    <div className="hidden md:flex space-x-6 text-lg">
                        {['Specialist', 'Professional', 'Supplier'].map((option) => (
                            <div className='relative' key={option}>
                                <div
                                    className='hover:text-gray-600 cursor-pointer text-white'
                                    onClick={() => handleClick(option)}
                                >
                                    {option}
                                </div>
                                {showDropdown && selectedOption === option && (
                                    <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10'>
                                        {data.length > 0 ? (
                                            <ul>
                                                {data.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className='p-2 hover:bg-gray-100 cursor-pointer'
                                                        onClick={() => navigate('/profile', { state: { user: item.user } })}
                                                    >
                                                        {item.user.firstName} {item.user.lastName}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            noDataStatus[option] && (
                                                <div className='p-2 text-center'>
                                                    <p>No data available</p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <FaUser className="hidden md:block text-white"/>
                    <IoIosNotifications className="hidden md:block text-white"/>
                    <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                            onClick={() => setMenuOpen(!menuOpen)}/>
                    {/*<HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600 ml-2"*/}
                    {/*        onClick={() => setSidebarOpen(!sidebarOpen)}/>*/}

                </div>
                {menuOpen && (
                    <ul className='md:hidden absolute top-16 left-0 w-full text-black bg-blue-100 shadow-md text-lg'>
                        <div>
                            {['Specialist', 'Professional', 'Supplier'].map((option) => (
                                <div
                                    className='hover:text-gray-600 cursor-pointer text-black'
                                    onClick={() => handleClick(option)}
                                    key={option}
                                >
                                    {option}
                                </div>
                            ))}
                            {showDropdown && (
                                <div className='dropdown'>
                                    {data.length > 0 ? (
                                        <ul>
                                            {data.map((item, index) => (
                                                <li key={index}>{item.name}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        noDataStatus[selectedOption] && (
                                            <div className='empty-state'>
                                                <p>No data available</p>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </ul>
                )}
            </section>
            <div className='flex pt-16'>
                <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} fixed top-16 left-0 h-[calc(100vh-4rem)] w-[250px] bg-[#093c5e]`}>
                    <Sidebar/>
                </div>
                <div className="flex-1 flex flex-col container mx-auto p-6 md:ml-[250px]">
                    <section className="flex-1 container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
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
                                description="Optimize your workspace with our Ergonomic Office Chair, designed to provide superior support during long hours at the desk. With adjustable features and breathable fabric, this chair promotes a healthy posture and ensures you stay comfortable and productive."
                                price="₦120,000"
                                buttonColor="bg-orange-500 hover:bg-orange-600"
                            />
                            <ProductCard
                                bgColor="bg-red-50"
                                imgSrc="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1"
                                title="Modern Dining Chair Set"
                                description="Elevate your dining experience with our Modern Dining Chair Set, featuring sleek lines and a contemporary design. Each chair is crafted for comfort and durability, making it an ideal addition to any dining room. Perfect for family meals and gatherings."
                                price="₦180,000"
                                buttonColor="bg-red-500 hover:bg-red-600"
                            />
                        </section>
                    </section>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
