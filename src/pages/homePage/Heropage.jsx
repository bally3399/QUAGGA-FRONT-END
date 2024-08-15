import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import ServicesSection from "./pages";
import HeroSlider from "../../component/heroslider/HeroSlider";
import Carousel from "../../component/carousel/Carousel";
import Img1 from '../../asset/Downloader-La-383338.jpg';
import Img2 from '../../asset/Downloader-La-720311.jpg';
import Img3 from '../../asset/Downloader-La-816134.jpg';
import Img4 from '../../asset/Downloader-La-731933.jpg';
const HeroPage = () => {

    return (
        <div className="overflow-x-hidden">
            <Navbar/>

            {/* The following section is commented out and can be re-enabled if needed */}
            {/*<section className="bg-[#eeffff] mb-4 flex flex-col items-center md:flex-row md:items-center min-h-screen">*/}
            {/*    <div className="flex flex-col w-full md:w-1/2 p-8 mb-48 md:p-20 order-2 md:order-1 mr-40">*/}
            {/*        <h1 className="text-4xl md:text-5xl font-bold mb-9 text-gray-800 font-serif ml-16">Welcome !!!</h1>*/}
            {/*        <p className="ml-10 px-5 pb-6 text-lg leading-7 text-[#777777]">*/}
            {/*            Forget the old rules. You can have the best people.*/}
            {/*            Right now. Right here.*/}
            {/*        </p>*/}
            {/*        <div className=''>*/}
            {/*            <button*/}
            {/*                className="ml-16 rounded-3xl bg-[#007e82] text-[black] font-bold py-2 px-8 flex items-center"*/}
            {/*                aria-label="Get started"*/}
            {/*                title="Get Started"*/}
            {/*                onClick={handleGetStarted}*/}
            {/*            >*/}
            {/*                Get Started*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="w-full md:w-1/2 order-1 md:order-2 h-auto md:h-full">*/}
            {/*        <div className="ml-5 mb-48">*/}
            {/*            <img className="w-11/12 h-80" src={logo} alt="logo"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <HeroSlider />
            <Carousel/>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                            Quality you can trust
                            <br className="hidden md:block"/>
                           ...at your finger tips
                        </span>
                        <div
                            className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"/>
                    </h2>
                    <p className="text-gray-700 lg:text-sm lg:max-w-md">
                        "Affordable convenience and peace of mind"
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    <a href="/" aria-label="View Item">
                        <div
                            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img className="object-cover w-full h-56 md:h-64 xl:h-80"
                             src={Img1} alt="calender Image"/>
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    Sed ut perspiciatis unde omnis iste natus error
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="/" aria-label="View Item">
                        <div
                            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img className="object-cover w-full h-56 md:h-64 xl:h-80"
                                 src={Img2} alt="calender Image"/>
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    Leverage agile frameworks to provide a robust synopsis
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="/" aria-label="View Item">
                        <div
                            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img className="object-cover w-full h-56 md:h-64 xl:h-80"
                                 src={Img3} alt="calender Image"/>
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="/" aria-label="View Item">
                        <div
                            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img className="object-cover w-full h-56 md:h-64 xl:h-80"
                                 src={Img4} alt="calender Image"/>
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    Rough pomfret lemon shark plownose chimaera
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="text-center">
                    <a href="/" aria-label=""
                       className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        See more
                        <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                            <path
                                d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <ServicesSection/>
            <Footer/>
        </div>
    );
};

export default HeroPage;
