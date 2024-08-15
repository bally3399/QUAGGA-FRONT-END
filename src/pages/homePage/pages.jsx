import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

const ServicesSection = () => {
    return (
        <div className="bg-[#eeffff] flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-6 sm:space-y-0 py-12">
            <ServiceCard
                icon={<i className="fas fa-toolbox"></i>}
                title="Find help"
                description="Find professionals for your domestic needs quickly, and without hassles."
            />
            <ServiceCard
                icon={<i className="fas fa-users"></i>}
                title="Find customers"
                description="Have a skill? Provide services and expand your customer base."
            />
            <ServiceCard
                icon={<i className="fas fa-calendar-alt"></i>}
                title="Set your schedule"
                description="Get your essential needs provided immediately or on a scheduled date."
            />
        </div>
    );
};

export default ServicesSection;
