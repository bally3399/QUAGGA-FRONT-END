import React, {useState} from 'react';
import {FaTachometerAlt, FaUsers, FaChartPie, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleDashBoardClick = () => {
        navigate('/dashBoard');
    };

    const handleProfileFormClick = () => {
        navigate('/profile-form');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };
    const handleReviewsClick = () => {
        navigate('/profile');
    };
    const handleLogoutClick = () => {
        navigate('/');
    };
    const handleBackClick = () => {
        navigate('/login')
    }
    return (
        <div className=" pt-16 bg-white w-64 min-h-screen p-4 shadow-md md:10" >
            {/*<h2 className="text-xl font-bold mb-8">Quagga</h2>*/}

            <div className="flex flex-col items-center mb-8">
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
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-gray-700">Software Developer</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a onClick={handleProfileFormClick}
                       className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                    <a onClick={handleProfileFormClick}
                       className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Edit Profile</a>
                </div>
            </div>


            <nav className="flex flex-col space-y-4">
                <a onClick={handleDashBoardClick}
                   className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaTachometerAlt/> <span>Dashboard</span>
                </a>
                <a onClick={handleProfileClick}
                   className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaUser/> <span>Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaUsers/> <span>Users</span>
                </a>
                <a onClick={handleReviewsClick}
                   className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaChartPie/> <span>Reviews</span>
                </a>
                <a onClick={handleLogoutClick} className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaSignOutAlt/> <span>Logout</span>
                </a>
                    <a onClick={handleBackClick} className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                        <HiArrowLeft/> <span>Back</span>
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;