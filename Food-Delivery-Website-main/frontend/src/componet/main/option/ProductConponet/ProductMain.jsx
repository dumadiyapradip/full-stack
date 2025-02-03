
import { useSelector } from "react-redux"
import Loader from "../../../../Asside/Loader"
import { useDispatch } from "react-redux"
// import { ProductFetch } from "../../../../app/feature/productCard/ProductFetchData"
import { ProductFetch } from "../../../../app/feature/productCard/ProductFetchData"
import Errows from "../../../../Asside/Errows"
// import { handleError } from "../utils"
import { AddToCardProdcut } from "../../../../app/feature/productCard/AddToproduct"
// import productFirstPartInMini from './ProductFirstPartInMini'
import ProductFirstPartInMini from './ProductFirstPartInMini'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react"
import { Link } from "react-router-dom"
// import ReducerMethodFortheFatchData from "../UserCompont/UserPage/MainSlice/reducerMethodFortheFatchData"
// ..
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

function Productbar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
    // ReducerMethodFortheFatchData(Fatchdata)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isLoader = useSelector((state) => state.ProductCardSlice.isLoader)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useSelector((state) => state.ProductCardSlice.ProductData)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isErrow = useSelector((state) => state.ProductCardSlice.isErrow)
    const Condition = useSelector((state) => state.NavProvider.NavData)



    // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
    useEffect(() => { dispatch(ProductFetch()) }, [dispatch])

    //     const data= [
    //         {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/about.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaJzR5fXcVEZPO65js_YBEimrrb1KrKL4Bw&s",
    //                 },
    //                 {

    //                     SubImg: "https://sukanyaevents.com/files/resized/674123/500;540;24efd3c070e166cc6c92dedd2dd9cd0455a64b46.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAiUqyOvKF9gtfrq6W1EzEqXLAi3KhW88JQ&s",
    //                 },
    //                 {

    //                     SubImg: "https://sukanyaevents.com/files/resized/674123/500;540;24efd3c070e166cc6c92dedd2dd9cd0455a64b46.jpg",
    //                 },
    // {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaJzR5fXcVEZPO65js_YBEimrrb1KrKL4Bw&s",
    //                 },
    //             ],
    //             Title: "WEDDINGS",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Every bride dreams of having the perfect wedding, but planning that can be quite a task. Throw in all of the cultural nuances associated with ethnic weddings and the task can become overwhelming. We work directly with you and your families to handle all of aspects of your wedding. The result is an extraordinary event that is just as you envisioned.'
    //         },
    //         {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/2.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-decorations-cultural-program-wedding-260nw-1450052012.jpg",
    //                 },
    //                 {

    //                     SubImg: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481485.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/interior-wedding-tent-decoration-ready-260nw-239378692.jpg",
    //                 }
    //             ],
    //             Title: "DESTINATION WEDDINGS",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Thailand, Bali, Dubai, Udaipur, Malaysiaare just a few of the locations around the world where we have planned Destination Weddings and Events. We work directly with you to discover the perfect location and to ensure that all the details are in place for your big day. Our offices are located in the Thailand &Portland but our planning takes us all over the world.'
    //         }
    //         ,
    //         {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/homepage-image.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://www.eternalweddingz.in/storage/venue_images/OltTeSq7bCVBrvANI3ZWpnDRRwTzZYhPhm4m6l8Z.webp",
    //                 },
    //                 {

    //                     SubImg: "https://cdn0.weddingwire.in/vendor/8478/3_2/1280/jpg/20431568-253982295094083-881946816706663417-n_15_118478.jpeg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://cdn0.weddingwire.in/vendor/9462/3_2/960/jpg/kohinoor-atc2.jpeg",
    //                 }
    //             ],
    //             Title: "CORPORATE EVENTS",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'We are at your service to execute your Corporate event, from simple luncheons to large black-tie galas. We bring sharpness and flair to any corporate event to wow your clients and colleagues with an unforgettable event.'
    //         }
    //         ,
    //         {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Beach-wedding-decor-Homepage-IMAGE-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
    //                 },
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5kNXRK7zmwrqY3ZGD8rn0bi63boMFY9eNA&s",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9PlkcDfZn6u9Gv-fyW7i54KUNVW883Dc2w&s",
    //                 }
    //             ],
    //             Title: "SOCIAL EVENTS",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'We are a full-service event planning company for any occasion – a Lavish Baby Shower, Birthday Party, Anniversary Party, or Sweet 16. Let us take care of the planning so that you and your guests can relax and enjoy your event stress-free. From location selection to invitation design to the perfect signature drink, we welcome the opportunity to assist you.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }]


    // const handleLogin = async (id) => {


    //     if (!id) {
    //         return handleError('email and password are required')
    //     }
    //     try {
    //         const url = `http://localhost:500/eventmenegment/web/User/loginUser/${email}/${password}`;
    //         const response = await fetch(url, {
    //             method: "GET",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         });
    //         const result = await response.json();
    //         const { success, message, jwtToken, name, error } = result;
    //         if (success) {
    //             handleSuccess(message);
    //             const data = (result.data.user)
    //             console.log(data)
    //             localStorage.setItem('token', jwtToken);
    //             localStorage.setItem('loggedInUser', name);

    //         } else if (error) {
    //             const details = error?.details[0].message;
    //             handleError(details);
    //         } else if (!success) {
    //             console.log(!success)
    //         }

    //     } catch (err) {
    //         handleError(err);
    //     }
    // }
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
                                        <ProductFirstPartInMini product={item} />
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
                                                onClick={() => dispatch(AddToCardProdcut(item))}
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
                                                onClick={() => dispatch(AddToCardProdcut(item))}
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
                                        <ProductFirstPartInMini product={item} />
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

export default Productbar
