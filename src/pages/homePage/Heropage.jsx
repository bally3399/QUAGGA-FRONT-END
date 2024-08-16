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
import KeywordsSection from '../../component/Keywords/KeywordsSection'

const HeroPage = () => {

    return (
        <div className="overflow-x-hidden">
            <Navbar />


            <div className="pt-16">
                <HeroSlider />
                <Carousel />
                <KeywordsSection />

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                            <span className=" justify-center inline-block mb-1 sm:mb-4">
                                Quality you can trust
                            </span>
                            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"/>
                        </h2>
                    </div>
                    <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                        <a href="/" aria-label="View Item">
                            <div
                                className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                <img className="object-cover w-full h-56 md:h-64 xl:h-80"
                                     src={Img1} alt="calender Image"/>
                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                    <p className="text-sm font-medium tracking-wide text-white">
                                        An Outdoor patio area with a modern pergola, featuring a sleek, metallic frame.
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
                                        A lush indoor garden setup, featuring vertical greenery that decorates the walls and hangs from the ceiling.
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
                                        The space is minimalistic, with neutral colors and a focus on open design, allowing light and nature to fill the area.
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
                                        A dining area with a strong emphasis on natural elements.
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
        </div>
    );
};

export default HeroPage;
