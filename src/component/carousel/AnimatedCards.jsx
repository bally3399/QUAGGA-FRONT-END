import React from 'react';

const AnimatedCards = () => {
    const cards = [
        {
            id: 1,
            imageUrl: 'https://www.yankodesign.com/images/design_news/2019/07/desk-setups-that-maximize-productivity-part-2/Desk-Setup_12.jpg',
            description: 'Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one.',
        },
        {
            id: 2,
            imageUrl: 'https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg',
            description: 'Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two.',
        },
        {
            id: 3,
            imageUrl: 'https://i.pinimg.com/564x/33/d6/54/33d654e8058fdf69e160dcbd2235cdac.jpg',
            description: 'Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three.',
        },
        {
            id: 4,
            imageUrl: 'https://i.pinimg.com/564x/39/b8/01/39b801afe355e623bcb3928b1c1b046d.jpg',
            description: 'Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four.',
        },
        {
            id: 5,
            imageUrl: 'https://i.pinimg.com/564x/2b/b5/48/2bb548dbf4a4c57381a7b7f736b4930b.jpg',
            description: 'Join us in embracing sustainability, where design and functionality meet eco-conscious decisions. Description five.',
        },
    ];

    return (
        <section className="flex flex-col lg:h-svh justify-center items-center overflow-scroll">

            <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6 border-t pt-12">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0"
                    >
                        <article
                            className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative transform duration-500 group"
                            style={{ backgroundImage: `url(${card.imageUrl})` }}
                        >
                            <div className="relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] transform duration-500">
                                <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default AnimatedCards;
