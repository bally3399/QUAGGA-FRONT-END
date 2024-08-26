import React, { useState, useEffect } from 'react';

const images = [
    '//zinga-demo.myshopify.com/cdn/shop/files/c4_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c5_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c6_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c1_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c2_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c3_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c4_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c5_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c6_250x250.png?v=1613765754',
    '//zinga-demo.myshopify.com/cdn/shop/files/c1_250x250.png?v=1613765754',
];

const ClientCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === Math.ceil(images.length / 5) - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Slide change interval (3 seconds)

        return () => clearInterval(interval);
    }, []);

    const visibleImages = images.slice(
        currentIndex * 5,
        currentIndex * 5 + 5
    );

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500">
                    {visibleImages.map((src, index) => (
                        <div
                            key={index}
                            className="min-w-[20%] flex justify-center border border-gray-200 p-2 mx-2"
                        >
                            <a href="#">
                                <img
                                    src={src}
                                    alt={`Slide ${index}`}
                                    className="w-full h-auto object-cover"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
                {Array(2)
                    .fill()
                    .map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                        ></button>
                    ))}
            </div>
        </div>
    );
};

export default ClientCarousel;
