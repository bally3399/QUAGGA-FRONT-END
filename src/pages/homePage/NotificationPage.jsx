import React, { useState } from 'react';
import {HiArrowLeft} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

const NotificationPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-6">NOTIFICATIONS</h2>
                <p>Cancellation of service <br/>
                    <span className="text-gray-600">Unfortunately, the service cannot be performed on September 15 at 15:00 ->
                        2 days ago</span></p>
                <button
                    onClick={() => navigate('/profile-form')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e] ml-auto"
                >
                    <HiArrowLeft className="mr-2"/> Back

                </button>

            </div >
        </div>
    );
            };

export default NotificationPage;