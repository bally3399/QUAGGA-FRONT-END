import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


const LogoutPage = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('userSession');

        toast.success("You've been logged out successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            navigate("/hero-page");
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
                <h1 className="text-2xl font-semibold mb-6">You have been logged out</h1>
                <p className="text-gray-600 mb-8">Thank you for using our service. We hope to see you again soon!</p>
                <button
                    onClick={handleLogout}
                    className="bg-blue-500 text-white px-8 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                >
                     Home
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogoutPage;
