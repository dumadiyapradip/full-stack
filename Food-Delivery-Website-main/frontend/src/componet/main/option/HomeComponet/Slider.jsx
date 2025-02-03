import { useState } from 'react'

const images = [
    "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "http://res.cloudinary.com/dguqlw9yp/image/upload/v1727610450/wf0foh3cirpuclu5rvdp.png",
    "http://res.cloudinary.com/dguqlw9yp/image/upload/v1727665451/uxs44ata9em0shz0chu2.jpg",
    "http://res.cloudinary.com/dguqlw9yp/image/upload/v1727665845/h89pgb92e4zxuu8tjio3.jpg",
    "http://res.cloudinary.com/dguqlw9yp/image/upload/v1727665920/w9ihnyjr6z6xndfxacsq.jpg",
    "https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

function Carousel() {
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }


    // setTimeout(() => {
    //     nextSlide()
    // }, 5000);

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }
    return (
        <div>
            <div className="slider flex justify-evenly items-center  w-full">
                <div className="flex absolute top-1/25  left-12 z-40 items-center justify-center w-10 h-10
                 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition invisible" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                {images.map(
                    (image, index) =>
                        current === index && (
                            <div key={image} className="slide flex justify-center h-full w-[1800px] ">
                                
                                <img className='lg:w-full' src="https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                        )
                )}
                <div className="flex absolute top-1/25  right-12 z-40 items-center
                 justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition invisible" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

            </div>
        </div>

    )
}

export default Carousel