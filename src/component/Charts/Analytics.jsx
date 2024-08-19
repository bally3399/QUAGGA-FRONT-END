import React from 'react';

const Analytics = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4">Sales Analytics</h2>
            <div className="flex justify-between items-center">
                <div className="text-center">
                    <h3 className="text-lg">Total Sales</h3>
                    <p className="text-xl font-bold">$20,000</p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg">Orders</h3>
                    <p className="text-xl font-bold">150</p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg">Revenue</h3>
                    <p className="text-xl font-bold">$15,000</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
