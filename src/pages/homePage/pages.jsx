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
        <div className="flex justify-center space-x-8 bg-gray-100 py-12">
            <ServiceCard
                icon={<icon className="fas fa-toolbox"></icon>}
                title="Find help"
                description="Find professionals for your domestic needs quickly, and without hassles."
            />
            <ServiceCard
                icon={<icon className="fas fa-users"></icon>}
                title="Find customers"
                description="Have a skill? Provide services and expand your customer base."
            />
            <ServiceCard
                icon={<icon className="fas fa-calendar-alt"></icon>}
                title="Set your schedule"
                description="Get your essential needs provided immediately or on a scheduled date."
            />
        </div>
    );
};

export default ServicesSection;
