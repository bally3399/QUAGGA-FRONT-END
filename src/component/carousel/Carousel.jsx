import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
    {
        image: {
            large: '//zinga-demo.myshopify.com/cdn/shop/files/slider-bg1_2000x.jpg?v=1613765728',
            small: '//zinga-demo.myshopify.com/cdn/shop/files/slider-bg1-small_767x.jpg?v=1613765751',
        },
        heading: 'Stylish & Affordable',
        text: 'Making a trend in Design',
        buttonLink: '#',
    },
    {
        image: {
            large: '//zinga-demo.myshopify.com/cdn/shop/files/slider-bg2_2000x.jpg?v=1613765728',
            small: '//zinga-demo.myshopify.com/cdn/shop/files/slider-bg2-small_767x.jpg?v=1613765751',
        },
        heading: 'Furniture & Beyond',
        text: 'Live in Nature’s Love',
        buttonLink: '#',
    },
    {
        image: {
            large: '//zinga-demo.myshopify.com/cdn/shop/files/slider-bg3_2000x.jpg?v=1613765728',
            small: '//zinga-demo.myshopify.com/cdn/shop/files/slider-bg3-small_767x.jpg?v=1613765751',
        },
        heading: 'Comfy Fluffy Sofas',
        text: '@ affordable Price',
        buttonLink: '#',
    },
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const [animationDirection, setAnimationDirection] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationDirection((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <Slider {...settings} className="home-slideshow">
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <img
                            src={slide.image.large}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto hidden md:block"
                        />
                        <img
                            src={slide.image.small}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto md:hidden"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black bg-opacity-50">
                            <h2
                                className={`text-4xl md:text-5xl text-white mb-4 transition-all duration-700 transform ${
                                    animationDirection === index ? 'translate-x-0' : (animationDirection === (index - 1 + slides.length) % slides.length ? '-translate-x-100' : 'translate-x-100')
                                }`}
                            >
                                {slide.heading}
                            </h2>
                            <h5
                                className={`text-2xl md:text-3xl text-white mb-4 transition-all duration-700 transform ${
                                    animationDirection === index ? 'translate-x-0' : (animationDirection === (index - 1 + slides.length) % slides.length ? '-translate-x-100' : 'translate-x-100')
                                }`}
                            >
                                {slide.text}
                            </h5>
                            <a
                                href={slide.buttonLink}
                                className="bg-[#4d5763] text-white py-2 px-6 rounded hover:bg-[#60b1ab] transition-colors duration-300"
                            >
                                View Collection
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;