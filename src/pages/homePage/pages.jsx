import React from 'react';
import { FaHandsHelping, FaUserTie, FaCalendarCheck } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
            <div className="text-5xl mb-6 text-blue-950">{icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

const ServicesSection = () => {
    return (
        <div className="bg-[#eeffff] flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-8 sm:space-y-0 py-16 px-4">
            <ServiceCard
                icon={<FaHandsHelping />}
                title="Find Help"
                description="Quickly find professionals for your domestic needs, without any hassles."
            />
            <ServiceCard
                icon={<FaUserTie />}
                title="Find Customers"
                description="Have a skill? Provide services and expand your customer base."
            />
            <ServiceCard
                icon={<FaCalendarCheck />}
                title="Set Your Schedule"
                description="Get your essential needs met immediately or on a scheduled date."
            />
        </div>
    );
};

export default ServicesSection;
