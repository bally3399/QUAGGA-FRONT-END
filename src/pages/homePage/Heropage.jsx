import React, { useState } from "react";
// import { ArrowRightIcon } from '@heroicons/react/outline';

import logo from "../../asset/searching-talent@1x.png";
import Navbar from "../../component/navbar/Navbar";

const HeroPage = () => {

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <section className="bg-white mb-4 flex flex-col items-center md:flex-row md:items-center min-h-screen">
                <div className="flex flex-col w-full md:w-1/2 p-8 md:p-20 order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 font-serif">How work <br/> should work</h1>
                    <p className="px-5 pb-6 text-lg leading-7 text-[#777777]">
                        Forget the old rules. You can have the best people.
                        Right now. Right here.
                    </p>
                    <div className=''>
                        <button
                            className="rounded-3xl bg-[#108a00] text-[white] font-bold py-2 px-4 flex items-center"
                            aria-label="Get started"
                            title="Get Started"

                        >
                            Get Started
                            {/*<ArrowRightIcon className="w-5 h-5 ml-2" />*/}
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 h-auto md:h-full">
                    <div className="w-[55%] h-[55%]">
                        <img className= "m" src={logo} alt="logo"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroPage;
