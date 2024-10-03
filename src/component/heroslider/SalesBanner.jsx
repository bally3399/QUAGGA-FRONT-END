import React from 'react';

const SalesChannels = () => {
    return (
        <div className="bg-gray-800 text-white min-h-[500px] py-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-12 items-center">


                    <div className="md:col-span-6 col-span-12">
                        <div className="text-left text-gray-700 mb-8">
                            <p className="text-lg uppercase font-bold leading-none pb-2 text-white">
                                SALES CHANNELS
                            </p>
                            <h2 className="text-5xl text-white font-bold mt-5">
                                Connect Your Construction Materials with the Right Buyers
                            </h2>
                        </div>
                    </div>


                    <div className="md:col-span-4 col-span-12 md:col-start-9">
                        <p className="tracking-tight text-white mb-8 md:mb-16">
                            Expand your reach by selling construction materials, services, and products to clients across various channels. With integrated marketing tools, social media integrations, and specialized sales platforms, you can ensure that your products reach the right customers, whether you’re a specialist, supplier, or built environment professional.
                        </p>
                        <a
                            href="/sell"
                            className="text-lg overflow-hidden border-b pb-4 font-medium group flex border-white w-4/5"
                        >

                            <svg
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="h-6 w-6 origin-left -translate-x-full self-center opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-0 group-hover:opacity-100"
                            >
                                <path
                                    d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                    fill="currentColor"
                                ></path>
                            </svg>


                            <span className="transition-transform duration-500 will-change-transform group-hover:translate-x-2">
                                Start selling
                            </span>


                            <svg
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="ml-auto h-6 w-6 origin-left translate-x-0 self-center justify-self-end opacity-100 transition-all duration-500 will-change-transform group-hover:translate-x-full group-hover:opacity-0"
                            >
                                <path
                                    d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesChannels;
