import React from 'react';
import { FaHandsHelping, FaUserTie, FaCalendarCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ link, icon, title, description, validateUser }) => {
    return (
        <div
            onClick={() => validateUser(link)}
            className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 cursor-pointer"
        >
            <div className="text-5xl mb-6 text-blue-950">{icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

const ServicesSection = () => {
    const navigate = useNavigate();

    const validateUser = (link) => {
        const isAuthenticated = Boolean(localStorage.getItem('token'));

        if (isAuthenticated) {
            navigate(link);
        } else {
            navigate('/registerClient', { state: { from: link } });
        }
    };

    return (
        <div className="bg-[#eeffff] flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-8 sm:space-y-0 py-16 px-4">
            <ServiceCard
                link="/find-help"
                icon={<FaHandsHelping />}
                title="Find Help"
                description="Quickly find professionals for your domestic needs, without any hassles."
                validateUser={validateUser}
            />
            <ServiceCard
                link="/find-customers"
                icon={<FaUserTie />}
                title="Find Customers"
                description="Have a skill? Provide services and expand your customer base."
                validateUser={validateUser}
            />
            <ServiceCard
                link="/set-schedule"
                icon={<FaCalendarCheck />}
                title="Set Your Schedule"
                description="Get your essential needs met immediately or on a scheduled date."
                validateUser={validateUser}
            />
        </div>
    );
};

export default ServicesSection;
