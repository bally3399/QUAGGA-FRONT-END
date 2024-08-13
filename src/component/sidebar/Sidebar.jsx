import React, {useState} from 'react';
import {FaTachometerAlt, FaUsers, FaChartPie, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleDashBoardClick = () => {
        navigate('/dashBoard');
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
    return (
        <div className="bg-white w-64 min-h-screen p-4 shadow-md md:10" >
            {/*<h2 className="text-xl font-bold mb-8">Quagga</h2>*/}

            <div className="flex flex-col items-center mb-8">
                <div
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">
                </div>
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-gray-700">Software Developer</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a href="#"
                       className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                    <a href="#"
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
            </nav>
        </div>
    );
}

export default Sidebar;
