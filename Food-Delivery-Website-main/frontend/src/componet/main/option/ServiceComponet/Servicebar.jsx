
import { useSelector } from "react-redux"
import Loader from "../../../../Asside/Loader"
import { useDispatch } from "react-redux"
import { Fatchdata } from "../../../../app/feature/CardData/serviceCardFeature"
import Errows from "../../../../Asside/Errows"
import { AddToCardProvider } from "../../../../app/feature/addToCardStore/AddToCard"
import ServiceFirstPartInMini from "./ServiceFirstPartInMini"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react"
import { Link } from "react-router-dom"


AOS.init(
    {
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    }

);

function Servicebar() {
    const dispatch = useDispatch()

    // ReducerMethodFortheFatchData(Fatchdata)

    const isLoader = useSelector((state) => state.ServiceCardSlice.isLoader)
    const data = useSelector((state) => state.ServiceCardSlice.data)
    const isErrow = useSelector((state) => state.ServiceCardSlice.isErrow)
    const Condition = useSelector((state) => state.NavProvider.NavData)
    const d = 0

    useEffect(() => { dispatch(Fatchdata()) }, [d])

    return (
        <>
            {
                (isLoader) && (!isErrow) && <Loader />
            }
            {
                (data !== null) &&
                < div className="mt-32">
                    <div className="text-center p-2">
                        <h1 className="bg-gradient-to-r f-w font-black  from-orange-400 to-pink-800 bg-clip-text text-transparent mb-4 text-4xl">“Some Of The Following Services ” – </h1>
                        <h1 className=" bg-gradient-to-r f-w font-black  from-orange-400 to-pink-800 bg-clip-text text-transparent mb-4 text-3xl">We Offer</h1>
                    </div>
                    {data.map((item, index) =>
                        <div className="container mx-auto px-4 py-8" key={item._id} data-aos="fade-right">
                            <div className="flex flex-wrap -mx-4">
                                {index % 2 == 0 && <>
                                    <div className="w-full md:w-1/2 px-4 mb-8">
                                        <ServiceFirstPartInMini product={item} />
                                    </div>
                                    <div className="w-full md:w-1/2 px-4">
                                        <h2 className="text-3xl font-bold mb-2">{item.Title}</h2>
                                        <div className="mb-4">
                                            <span className="text-2xl font-bold mr-2">31349.99</span>
                                            <span className="text-gray-500 line-through">31399.99</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                                        </div>
                                        <p className="text-gray-700 mb-6">{item.Contern}</p>
                                        <div className="flex space-x-4 mb-6">
                                            {Condition ? <button
                                                className=" flex gap-2 items-center text-white px-6 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
                                                style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                                                onClick={() => dispatch(AddToCardProvider(item))}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                                Add to Cart
                                            </button> :
                                                <Link
                                                    to={"/loginUser"}
                                                    className=" flex gap-2 items-center text-white px-6 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
                                                    style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                    </svg>
                                                    Add to Cart
                                                </Link>
                                            }
                                          
                                        </div>
                                    </div>
                                </>
                                }
                                {index % 2 != 0 && <>

                                    <div className="w-full md:w-1/2 px-4">
                                        <h2 className="text-3xl font-bold mb-2">{item.Title}</h2>
                                        <div className="mb-4">
                                            <span className="text-2xl font-bold mr-2">31349.99</span>
                                            <span className="text-gray-500 line-through">31399.99</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6 text-yellow-500">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                                        </div>
                                        <p className="text-gray-700 mb-6">{item.Contern}</p>
                                        <div className="flex space-x-4 mb-6">
                                            {Condition ? <button
                                                className=" flex gap-2 items-center text-white px-6 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
                                                style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                                                onClick={() => dispatch(AddToCardProvider(item))}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                                Add to Cart
                                            </button> :
                                                <Link
                                                    to={"/loginUser"}
                                                    className=" flex gap-2 items-center text-white px-6 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
                                                    style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                    </svg>
                                                    Add to Cart
                                                </Link>
                                            }
                                          
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 px-4 mb-8">
                                        <ServiceFirstPartInMini product={item} />
                                    </div>
                                </>
                                }

                            </div>
                        </div>)
                    }
                </div>
            }
            {
                (!isLoader) && (isErrow) && <div className="mt-40"> <Errows /></div>
            }
        </>
    )
}

export default Servicebar
