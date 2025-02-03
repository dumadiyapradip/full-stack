/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



//     {
//         id: 1,
//         image: 'data:image/jpeg;base64,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', title: 'Animal', description: 'This is a Moose.'
//     },
//     { id: 2, image: 'https://img.freepik.com/free-photo/wild-deer-nature_23-2151474243.jpg', title: 'Animal', description: 'This is an Elephant.' },
//     { id: 3, image: 'https://media.istockphoto.com/id/1251700853/photo/amur-tiger-walking-in-river-water-danger-animal-tajga-russia-animal-in-green-forest-stream.jpg?s=612x612&w=0&k=20&c=X7c6xkZYU0b5tVx6ipF5viUj4Yp0qqbih2t9U9eo1VI=', title: 'Animal', description: 'This is a Leopard.' },
//     { id: 4, image: 'https://thumbs.dreamstime.com/b/tiger-splash-river-water-action-wildlife-scene-wild-cat-nature-habitat-tiger-running-water-danger-animal-taj-97615888.jpg', title: 'Animal', description: 'This is a Bear.' },
// ];
const carouselData = [
    {
        id: 1,
        title: "Beginning Our Forever.",
        description: "Discover the beauty of Love.",
        image: "https://cdn.pixabay.com/photo/2021/09/06/05/55/love-6600904_960_720.jpg",
    },
    {
        id: 2,
        title: "Graceful Presence.",
        description: "Discover the beauty of cute Presence.",
        image: "https://cdn.pixabay.com/photo/2018/01/05/08/19/beautiful-3062365_1280.jpg",
    },
    {
        id: 3,
        title: "The Family Hearth.",
        description: "a culturally and often legally recognised union between people called spouses.",
        image: "https://cdn.pixabay.com/photo/2016/11/23/17/56/beach-1854076_1280.jpg",
    },
   
];

const CarouselA = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Autoplay the carousel every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    return (
        <div className="relative h-screen bg-gray-900 text-white">
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Image */}
                <img
                    src={carouselData[currentIndex].image}
                    alt={carouselData[currentIndex].title}
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-between px-8">
                {/* Carousel Content */}
                <div className="flex flex-col max-w-lg space-y-4">
                    <h1 className="text-5xl font-bold text-orange-500">
                        {carouselData[currentIndex].title}
                    </h1>
                    <p className="text-xl">
                        {carouselData[currentIndex].description}
                    </p>
                    <div className="flex space-x-4">
                        <Link to={"/services"} className="px-4 py-2 bg-white text-black rounded-lg" > 
                            See More
                        </Link>
                        
                    </div>
                </div>

                {/* Thumbnail Images */}
                <div className="absolute bottom-12 left-8 flex space-x-2">
                    {carouselData.map((slide, index) => (
                        <img
                            key={slide.id}
                            src={slide.image}
                            alt={slide.title}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-20 h-20 object-cover cursor-pointer transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselA;
