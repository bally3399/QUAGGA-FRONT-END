import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import myLogo from "../../asset/MyLogoRefactored.png";
import { HiMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import Sidebar from "../../component/sidebar/Sidebar";
import { IoIosNotifications } from "react-icons/io";
import ProductCard from "../../component/productCard/productCard";
import axios from 'axios';
import DashboardOverview from "../../component/specialistDashboardComponents/DashboardOverview";

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

const SpecialistDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [supplierData, setSupplierData] = useState(null);
    const [supplierId, setSupplierId] = useState(null);
    const [supplierName, setSupplierName] = useState("");

    useEffect(() => {
        const createSupplier = async () => {
            try {
                const response = await axios.post('http://your-java-server-endpoint/api/supplier');
                setSupplierId(response.data.id); // Assuming the response returns the supplier ID
                setSupplierName(response.data.name); // Assuming the response returns the supplier name
            } catch (error) {
                console.error('Error creating supplier', error);
            }
        };

        createSupplier();
    }, []);

    useEffect(() => {
        if (supplierId) {
            const fetchSupplierData = async () => {
                try {
                    const response = await axios.get(`http://your-java-server-endpoint/api/supplier/${supplierId}/jobs`);
                    setSupplierData(response.data);
                } catch (error) {
                    console.error('Error fetching supplier data', error);
                }
            };

            fetchSupplierData();
git        }
    }, [supplierId]);

    return (
        <div className="dark:bg-primary dark:text-white min-h-screen">
            <section className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 shadow-md bg-[#093c5e] dark:bg-[#1a202c]'>
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
                </div>
                {menuOpen && (
                    <ul className='md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-lg dark:bg-[#1a202c] dark:text-white'>
                        <div className='hover:text-gray-600 cursor-pointer'>Specialist</div>
                        <div className='hover:text-gray-600 cursor-pointer'>Professional</div>
                        <div className='hover:text-gray-600 cursor-pointer'>Client</div>
                    </ul>
                )}
            </section>
            <div className='flex pt-16'>
                <div className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-[250px] bg-[#093c5e] dark:bg-[#1a202c] ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
                    <Sidebar />
                </div>
                <div className='flex-1 container mx-auto p-6 ml-[250px]'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DashboardOverview
                            supplierName={supplierName}
                            supplierData={supplierData}
                        />
                    </div>
                    <section className="container mx-auto p-10 md:py-12 md:px-0">
                        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
                            <ProductCard
                                bgColor="bg-purple-50"
                                imgSrc="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
                                title="Soft Plushy Cushion Chair"
                                description="Transform your living space with our Soft Plushy Cushion Chair, where luxury meets comfort."
                                price="₦200,000"
                                buttonColor="bg-purple-500 hover:bg-purple-600"
                            />
                            <ProductCard
                                bgColor="bg-green-50"
                                imgSrc="https://www.dropbox.com/s/8ymeus1n9k9bhpd/y16625.png?dl=1"
                                title="Comfortable Wooden Chair"
                                description="Introducing our Comfortable Wooden Chair, a perfect blend of style and functionality."
                                price="₦150,000"
                                buttonColor="bg-green-500 hover:bg-green-600"
                            />
                            <ProductCard
                                bgColor="bg-orange-50"
                                imgSrc="https://www.dropbox.com/s/ykdro56f2qltxys/hh2774663-87776.png?dl=1"
                                title="Ergonomic Office Chair"
                                description="Experience the ultimate in ergonomic comfort with our Ergonomic Office Chair."
                                price="₦75,000"
                                buttonColor="bg-orange-500 hover:bg-orange-600"
                            />
                            <ProductCard
                                bgColor="bg-blue-50"
                                imgSrc="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1"
                                title="Classic Wooden Rocking Chair"
                                description="Embrace the timeless charm of our Classic Wooden Rocking Chair."
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

export default SpecialistDashboard;
