import React, { useState, useEffect } from 'react';
import Img1 from '../../asset/curology-ycEKahEaO5U-unsplash.jpg';
import Img2 from '../../asset/kam-idris-_HqHX3LBN18-unsplash.jpg';
import Img3 from '../../asset/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg';
import { useNavigate } from "react-router-dom";

const slides = [
    {
        image: Img1,
        text: 'Quality You Can Trust, Excellence You Can See',
    },
    {
        image: Img2,
        text: 'Where Expertise Meets Cutting-Edge Technology',
    },
    {
        image: Img3,
        text: 'Premium Materials, Exceptional Results',
    },
];

const HeroSlider = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleGetStarted = () => {
        navigate('/signUp');
    };

    return (
        <section className="w-full h-screen relative overflow-hidden">

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