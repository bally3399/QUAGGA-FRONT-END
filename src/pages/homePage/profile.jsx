
import Navbar from "../../component/navbar/Navbar";
import {useLocation, useNavigate} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";
import React, {useState} from "react";
import myLogo from "../../asset/MyLogoRefactored.png";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
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


const Profile =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.user;
    const handleBackClick = () => {
        if (user?.role.toUpperCase() === 'Specialist') {
            navigate('/specialistDashboard');
        } else if(user?.role.toUpperCase() === 'Supplier'){
            navigate('/supplierDashBoard');
        }
        else{
            navigate('/dashboard');
        }
    };

    const handleContactUsClick = () => {
        navigate('/contact')
    }

    const handleSignupClick = () => {
        navigate('/signUp');
    };
    const handleHomeClick = () => {
        navigate('/');
    };
    const handleFeaturesClick = () => {
        navigate('/');
    };
    const handleBlogClick = () => {
        navigate('/');
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <div className='fixed top-0 left-0 right-0 z-50 mb-16 flex p-4 shadow-md bg-[#06324e]'>
                <div className='flex items-center mb-4'>
                    <img src={myLogo} alt="Shopper Logo" className='h-8 w-8 mr-2'/>
                    <p className='text-lg font-bold text-white'>Quagga</p>
                </div>
                <div className='hidden md:flex space-x-6 ml-60 text-lg'>
                    <div onClick={handleHomeClick} className='hover:text-blue-300 cursor-pointer text-white'>Home</div>
                    <div onClick={handleFeaturesClick} className='hover:text-blue-300 cursor-pointer text-white'>Features</div>
                    <div>
                        <SearchField
                            variant="outlined"
                            placeholder="Search"
                            size="small"
                        />
                    </div>
                    <div onClick={handleBlogClick} className='hover:text-blue-300 cursor-pointer text-white'>Blog</div>
                    <div className='hover:text-blue-300 cursor-pointer text-white'>About us</div>
                    <div className='hover:text-blue-300 cursor-pointer text-white'
                         onClick={handleContactUsClick}
                    >Contact us</div>
                </div>
            </div>
                <div className='bg-[#eeffff] pt-16'>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-8">
                        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                            <div className="col-span-4 sm:col-span-3">
                                <div className="bg-white shadow rounded-lg p-6">
                                    <div className="flex flex-col items-center">


                                        <div className="relative hidden overflow-hidden rounded-full lg:block">

                                            <div className="relative mt-6 hidden overflow-hidden rounded-full lg:block">
                                                <img
                                                    className="relative h-40 w-40 rounded-full"
                                                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                                                    alt=""
                                                />
                                                <label
                                                    htmlFor="desktop-user-photo"
                                                    className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                                                >
                                                    <span>Change</span>
                                                    <input
                                                        type="file"
                                                        id="desktop-user-photo"
                                                        name="user-photo"
                                                        className="absolute inset-0 h-full w-full cursor-pointer rounded-full border-gray-300 opacity-0"
                                                    />
                                                </label>
                                            </div>
                                        </div>

                                        <h1 className="text-xl font-bold">{user?.firstName} {user?.lastName}</h1>
                                        <p className="text-gray-700">{user?.role}</p>

                                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                            <a href="#"
                                               className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                            <a href="/profile"
                                               className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Edit
                                                Profile</a>
                                            <button
                                                onClick={handleBackClick}
                                                className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                                            >
                                                <HiArrowLeft className="mr-2"/> Back
                                            </button>

                                        </div>
                                    </div>
                                    <hr className="my-6 border-t border-gray-300"/>
                                    <div className="flex flex-col">
                                        <span
                                            className="text-gray-700 uppercase font-bold tracking-wider mb-2">Catagory</span>
                                    <ul>
                                        <li className="mb-2">Electrical</li>
                                    </ul>
                                    <span
                                        className="text-gray-700 uppercase font-bold tracking-wider mb-2">Sub-Category</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">About Me</h2>
                                <label htmlFor="about"></label>
                                <div className="mt-1">
                                        <textarea id="about" name="about" rows="3"
                                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"></textarea>
                                </div>
                                    <p className="mt-2 text-sm text-gray-500">Tell us about yourself</p>

                                    <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                                    <div className="mb-6">
                                        <label htmlFor="experience"></label>
                                        <div className="mt-1">
                                            <textarea id="about" name="about" rows="3"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"></textarea>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">Tell us about your experience</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;