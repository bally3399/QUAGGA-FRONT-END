import React from 'react';
import Img1 from '../../asset/construction1.jpg';
import Img2 from '../../asset/construction2.jpg';
import Img3 from '../../asset/construction3.jpg';
import Img4 from '../../asset/construction4.jpg';

const Features = () => {
    const features = [
        {
            id: '1',
            imgSrc: Img1,
            title: 'Seamless Connections in Construction',
            description:
                'Our platform bridges the gap between specialist construction experts, material suppliers, and built environment professionals. From sourcing premium materials to connecting with skilled professionals, we provide a seamless solution for all your construction needs, ensuring projects are completed with efficiency and excellence.',
        },
        {
            id: '2',
            imgSrc: Img2,
            title: 'Building the Future with Expert Collaboration',
            description:
                'We create opportunities for collaboration between construction specialists and suppliers. Our marketplace ensures that clients get access to the best talent and materials, fostering innovation and enhancing project outcomes.',
        },
        {
            id: '3',
            imgSrc: Img3,
            title: 'Your Trusted Hub for Construction Excellence',
            description:
                'From materials to expert professionals, our platform is your one-stop hub for all construction resources. We connect you with trusted specialists and suppliers who deliver quality and precision, ensuring your projects are built to last.',
        },
        {
            id: '4',
            imgSrc: Img4,
            title: 'Innovative Solutions for Every Project',
            description:
                'Whether you need expert advice, high-quality materials, or state-of-the-art products, our platform brings together the best in the industry. Empowering construction professionals to deliver exceptional results on every project.',
        },
    ];

    return (
        <div className="e-con-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 px-6 lg:px-12">
            {features.map((feature) => (
                <div
                    key={feature.id}
                    className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                    <div className="feature_img w-3/4 h-auto flex justify-center items-center">
                        <img
                            src={feature.imgSrc}
                            alt={feature.title}
                            className="object-contain max-w-full max-h-64"
                        />
                    </div>
                    <h5 className="font-bold text-[26px] text-center pt-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {feature.title}
                    </h5>
                    <p className="text-gray-800 text-[16px] text-center pt-2 mx-4 mb-5">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Features;
