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
    return (
        <div className="bg-white w-64 min-h-screen p-4 shadow-md">
            <h2 className="text-xl font-bold mb-8">Quagga</h2>
            <nav className="flex flex-col space-y-4">
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaTachometerAlt /> <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaUser /> <span>Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaUsers /> <span>Users</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaChartPie /> <span>Reviews</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaSignOutAlt /> <span>Logout</span>
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;
