import {HiArrowLeft} from "react-icons/hi";
import React from "react";
import {useNavigate} from "react-router-dom";
import Footer from "../../component/footer/Footer";
import image from "../../asset/download.png"
import image2 from "../../asset/img.png"
import shake from "../../asset/handshake.png"
import ReachUsPage from "./ReachUsPage";



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
                <p className="text-2xl">
                    Quagga was created to connect clients with specialized construction service providers across Nigeria.
                    <br/>Our dedicated team is committed to bridging the gap between clients and experts in the construction industry.
                    <br/>  Finding the right specialist can be challenging, and even if you manage to find one, they might not always be qualified or reliable.
                    Additionally, ensuring quality materials and satisfactory workmanship can be uncertain.

                    Imagine having access to certified and competent specialists with just a click.
                    Quagga makes this possible by helping you discover the right service exactly when you need it.
                </p>
                       <div className="mb-20 text-2xl">
                    <br/>Our mission is to streamline workflows and enhance productivity. As a contractor, you need a dependable tool to manage projects, coordinate with subcontractors, and deliver exceptional results.

                   <br/> We envision a future where clients can effortlessly connect with reputable specialists for any construction service, reducing the stress of finding reliable providers.
                           <br/>At Quagga, we aim to offer a user-friendly platform that simplifies the process of finding construction services for everyone.
                    <img className="flex justify-center items-center ml-80" src={image} alt=""/>
                    </div>


                    <div className="flex justify-center">

                        <p className="mt-20 mb-30 text-2xl">Quagga was developed to alleviate the stress of finding specialized construction services, minimize delays, and guarantee high-quality results.
                            <br/>Our users are at the heart of everything we do. we are focused on creating intuitive
                            and
                            easy-to-use features that helps meet our users' needs.
                            <br/>Quagga was born out of a desire to ease the stress of anyone who needs
                            the service of a specialist construction worker,
                            to avoid any form of delay regarding construction and to ensure that they get quality
                            services.
                        </p>
                        <img className="flex justify-center mr-20" src={image2} alt=""/>
                    </div>
                    <div className="mt-40 mb-30">
                    <img className="w-1/3" src={shake}
                         alt=""/>
                    <p className="text-2xl mb-10 mt-10">Thank you for joining us on this journey. <br/>
                        Together, we are transforming construction services with Quagga to create a better experience
                           </p>
                    </div>
            </div>
                <ReachUsPage/>
                <Footer/>
            </div>
    );
};


export default AboutPage;