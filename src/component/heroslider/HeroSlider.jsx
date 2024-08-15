import React, { useState, useEffect } from 'react';
import Img1 from '../../asset/curology-ycEKahEaO5U-unsplash.jpg';
import Img2 from '../../asset/kam-idris-_HqHX3LBN18-unsplash.jpg';
import Img3 from '../../asset/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg';
import { useNavigate } from "react-router-dom";

const slides = [
    {
        image: Img1,
        text: 'Explore the Beauty of Nature',
    },
    {
        image: Img2,
        text: 'Innovate with Cutting-Edge Technology',
    },
    {
        image: Img3,
        text: 'Stay Trendy with the Latest Fashion',
    },
];

const HeroSlider = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/signUp');
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full h-screen relative overflow-hidden">
            {/* Background Image Section */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        opacity: index === currentSlide ? 1 : 0,
                    }}
                />
            ))}

            {/* Text Overlay Section */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white p-8">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        {slides[currentSlide].text}
                    </h1>
                    <button
                        onClick={handleGetStarted}
                        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
