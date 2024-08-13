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
                <p className="text-3xl">
                    Quagga was developed to serve as a middlemen between specialist construction service providers and
                    clients basically in Nigeria. <br/>We are a team of passionate
                    individuals
                    committed to bridging the gap between specialist construction service providers and clients.
                    <br/> There might be some situation where you need a service of a specialist constructor, of
                        which they are not readily accessible and even if you happen to come across one, there is a big
                        chance that they might not be capable, qualified and reliable at the point of need. Moreso,
                        there is no assurance of quality materials and a job well done to your satisfaction
                        What if you could have competent and certified specialists around with just a click? What if you
                        could discover the right service at the exact time you need it.
                        Quagga is here to help you solve that problem and make it easy for you to find the right service
                        at the right time.

                    <br/> Our mission is to optimize workflow and boost productivity.<br/>As a contractor, you need
                        a reliable tool to manage your projects, coordinate with subcontractors, and deliver
                        outstanding results to your clients.

                    <br/>We envision a world where respectable clients can connect with specialist constructor
                        in respect to whatever services we are providing to ease the stress
                        and pressure of getting a reliable service provider.
                </p>

                    <div className="mb-20 text-3xl">
                    <br/> At Quagga, we strive to provide a user-friendly platform that helps anyone looking for
                    services in respect to construction.
                    <img className="flex justify-center items-center ml-80" src={image} alt=""/>
                    </div>


                    <div className="flex justify-center">

                        <p className="mt-20 mb-10 text-3xl"> We believe in constantly evolving and integrating the latest
                            technology to meet our
                            users satisfaction.
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
                    <div className="mt-40 mb-60">
                    <img className="w-1/3" src={shake}
                         alt=""/>
                    <p className="text-3xl mb-10 mt-10">Thank you for being part of our journey.
                       <br/> Together, we are shaping a better service in respect to construction with Quagga.
                           </p>
                    </div>
            </div>
                <ReachUsPage/>
                <Footer/>
            </div>
        // </div>
    );
};


export default AboutPage;