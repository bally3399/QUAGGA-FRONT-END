import {HiArrowLeft} from "react-icons/hi";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const AboutPage = () => {
    const navigate = useNavigate();


    return (
        <div className='p-4'>
            <button
                onClick={() => navigate('/')}
                className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
            >

                <HiArrowLeft className="mr-2"/> Back
            </button>
     <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
                    <p className="text-gray-700">
                        Welcome to Quagga, where innovation meets simplicity. <br/>We are a team of passionate
                        individuals
                        committed to bridging the gap between specialist construction service providers and clients.

                       <p><br/> Our mission is to optimize workflow and boost productivity.<br/>As a contractor, you need
                        a reliable tool to manage your projects, coordinate with subcontractors, and deliver
                           outstanding results to your clients.</p>

                        <br/>We envision a world where respectable clients can connect with specialist constructor in
                        respect to whatever services
                        we are providing to ease the stress and pressure of getting a reliable service provider.

                        <br/> At Quagga, we strive to provide a user-friendly platform that helps anyone looking for
                        services in respect to construction.

                        <br/> We believe in constantly evolving and integrating the latest technology to meet our users
                        satisfaction.
                        Our users are at the heart of everything we do. we are focused on creating intuitive and
                        easy-to-use features
                        that helps meet our users' needs.

                        <br/> Founded in 2024, Quagga was born out of a desire to ease the stress of anyone who needs
                        the service of a specialist
                        construction worker, to avoid any form of delay regarding construction and to ensure that they
                        get quality services.

                        <br/>Thank you for being part of our journey. Together, we are shaping a better future with
                        Quagga.
                    </p>
                </div>
        </div>
);
};


export default AboutPage;