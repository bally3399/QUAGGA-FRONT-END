import React from 'react';

const DashboardOverview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pt-12">
            <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Total Orders</h2>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1,200</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Pending Deliveries</h2>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">45</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Supplier Rating</h2>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">4.8/5</p>
            </div>
        </div>
    );
};

export default DashboardOverview;
