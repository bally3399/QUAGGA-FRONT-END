import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', orders: 400 },
    { name: 'Feb', orders: 300 },
    { name: 'Mar', orders: 500 },
    { name: 'Apr', orders: 400 },
    { name: 'May', orders: 600 },
    { name: 'Jun', orders: 700 },
    { name: 'Jul', orders: 800 },
    { name: 'Aug', orders: 300 },
    { name: 'Sep', orders: 200 },
    { name: 'Oct', orders: 400 },
    { name: 'Nov', orders: 500 },
    { name: 'Dec', orders: 600 },
];

const Charts = () => {
    return (
        <div className="pt-20 p-4 bg-white rounded-lg shadow-sm">
            <h2 className="font-bold text-xl mb-4">Order Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={2} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;
