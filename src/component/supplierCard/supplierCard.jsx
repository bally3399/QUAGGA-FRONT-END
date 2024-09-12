import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PulseLoader } from "react-spinners";

const axiosInstance = axios.create({
    baseURL: 'https://quagga.onrender.com/api/v1/quagga',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

const SupplierCard = ({ supplierId }) => {
    const [supplier, setSupplier] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchSupplierData = async () => {
            try {
                const response = await axiosInstance.get(`/suppliers/${supplierId}`);
                if (isMounted) {
                    setSupplier(response.data);
                }
            } catch (err) {
                if (isMounted) {
                    setError('Failed to fetch supplier data');
                    toast.error('Failed to fetch supplier data. Please try again later.');
                }
                console.error('Error fetching supplier data:', err);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchSupplierData();

        return () => {
            isMounted = false;
        };
    }, [supplierId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-32">
                <PulseLoader color="#4A90E2" loading={loading} />
            </div>
        );
    }

    if (error) return null;

    if (!supplier) return <div>No supplier data available</div>;

    return (

        <li className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <ToastContainer />
            <div className="flex p-4">
                <a href={supplier.getProfileUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                    <img
                        src={supplier.getImageUrl}
                        alt={supplier.name}
                        className="w-10 h-10 rounded-full border border-gray-300"
                    />
                </a>
                <div className="ml-4 flex-1">
                    <a href={supplier.profileUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-black hover:underline">
                        {supplier.name}
                    </a>
                    <div className="text-sm text-gray-600">{supplier.rating}</div>
                    <div className="text-xs text-gray-500">{supplier.reviews} Reviews</div>
                </div>
                <div className="flex items-center">
                    <label htmlFor={`status-${supplier.id}`} className="mr-2 text-sm font-medium">Status</label>
                    <select
                        id={`status-${supplier.id}`}
                        className="border border-gray-300 rounded-lg p-1 text-sm"
                        defaultValue={supplier.status}
                    >
                        <option value="5">Not Contacted</option>
                        <option value="0">Researching</option>
                        <option value="1">Contacted</option>
                        <option value="2">In Discussion</option>
                        <option value="3">Hired</option>
                        <option value="4">Not Hiring / Hide</option>
                    </select>
                </div>
            </div>
            <div className="relative overflow-hidden">
                <div className="flex space-x-2">
                    {supplier.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Supplier Image ${index + 1}`}
                            className="w-full h-32 object-cover"
                        />
                    ))}
                </div>
                <button className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2">
                    &#8249;
                </button>
                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2">
                    &#8250;
                </button>
            </div>
            <div className="p-4">
                <div className="w-full mt-2 p-2 border border-gray-300 rounded-lg">
                    {supplier.description}
                </div>
            </div>
        </li>
    );
};

export default SupplierCard;
