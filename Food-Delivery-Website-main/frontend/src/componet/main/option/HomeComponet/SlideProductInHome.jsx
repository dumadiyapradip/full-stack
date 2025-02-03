import { useState } from 'react'

// this componet the smail text slide use the 
const images = [
    " Some Of The Following Services We OfferWe offer great variety of services & programs.Our clients and our experience proves that the following services can literally change your life!Full Service Event Design & CoordinationPartial Planning & Coordinatio Some Of The Following Services We OfferWe offer great variety of services & programs.Our clients and our experience proves that the following services can literally change your life!Full Service Event Design & CoordinationPartial Planning & Coordinatio Some Of The Following Services We OfferWe offer great variety of services & programs.Our clients and our experience proves that the following services can literally change your life!Full Service Event Design & CoordinationPartial Planning & Coordinatio",
    "Some Of The Following Services We OfferWe offer great variety of services & programs.Our clients and our experience proves that the following services can literally change your life!Full Service Event Design & CoordinationPartial Planning & Coordinatio",
    "Some Of The Following Services We OfferWe offer great variety of services & programs.Our clients and our experience proves that the following services can literally change your life!Full Service Event Design & CoordinationPartial Planning & Coordinatio",
    "Some Of The Following Services We OfferWe offer great variety of services & programs.Our clients and our experience proves that the following services can literally change your life!Full Service Event Design & CoordinationPartial Planning & Coordinatio",
];

function SlideProductInHome() {
    const [current, setCurrent] = useState(0);
    const timeAutoNext = 3000;
    setTimeout(() => {
        nextSlide()
    }, timeAutoNext)

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }
    return (
        <>
            <div className=' w-full border-y-1 '>
                <div className="text-center border-y-2 pt-5 ">
                    <h1 className=" pb-5 bg-gradient-to-r f-w font-black  from-orange-700 to-pink-600 bg-clip-text text-transparent text-3xl">“Some of good event proverb ”</h1>
                </div>
                <div className=' flex justify-center  w-full'>
                    <div className="slider flex justify-evenly items-center">
                        <div className="flex absolute top-1/25  left-12 z-50 items-center justify-center h-52 opacity-0 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition lg:opacity-5" onClick={prevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        {images.map(
                            (image, index) =>
                                current === index && (
                                    <div key={image} className="slide flex justify-center m-12 mx-60 text-left">
                                        <div className='w-[100%] rounded-2xl'><p className='text-left'>{image}</p> </div>
                                    </div>
                                )
                        )}
                        <div className="flex absolute top-1/25  right-12 z-50 items-center justify-center w-10 h-52 opacity-0 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition" onClick={nextSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default SlideProductInHome