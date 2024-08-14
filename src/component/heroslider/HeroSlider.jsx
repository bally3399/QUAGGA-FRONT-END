import React, { useState, useEffect } from 'react';
import Img1 from '../../asset/curology-ycEKahEaO5U-unsplash.jpg';
import Img2 from '../../asset/sarah-dorweiler-7tFlUFGa7Dk-unsplash.jpg';
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
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-min mb-16 flex items-center justify-center bg-gray-100 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 flex items-center">
                    <div className="text-center slide-in-one-third p-4 md:p-0">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            {slides[currentSlide].text}
                        </h1>
                        <a href="#shop-now" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
                           onClick={handleGetStarted}>
                            Shop Now
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-2/3 relative hidden md:block">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.image}
                            alt={slide.text}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
