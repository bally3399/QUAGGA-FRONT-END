import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../asset/quagga.jpg";
import pics from "../../asset/download.jpg"
import Navbar from "../../component/navbar/Navbar";

const HeroPage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/signUp');
    };

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <section className="mb-4 flex flex-col items-center md:flex-row md:items-center min-h-screen">
                <div className="flex flex-col w-full md:w-1/2 p-8 mb-48 md:p-20 order-2 md:order-1 mr-40">
                    <h1 className="text-4xl md:text-5xl font-bold mb-9 text-gray-800 font-serif ml-16">Welcome !!!</h1>
                    <p className="ml-10 px-5 pb-6 text-lg leading-7 text-[#777777]">
                        Forget the old rules. You can have the best people.
                        Right now. Right here.
                    </p>
                    <div className=''>
                        <button
                            className="ml-16 rounded-3xl bg-[#093c5e] text-[white] font-bold py-2 px-8 flex items-center"
                            aria-label="Get started"
                            title="Get Started"
                            onClick={handleGetStarted}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 h-auto md:h-full">
                    <div className= "ml-5 mb-48">
                        <img className= "w-11/12 h-80" src={logo} alt="logo"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroPage;
