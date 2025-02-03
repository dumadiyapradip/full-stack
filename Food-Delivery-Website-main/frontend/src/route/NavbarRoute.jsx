/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../componet/main/option/HomeComponet/mainHomeProviderComponet/Home.jsx";
import About from "../componet/main/option/AboutAsMi/About";
import Servicebar from "../componet/main/option/ServiceComponet/Servicebar.jsx";
import Pricing from "../componet/main/option/Pricing/Pricing.jsx";
import LoginUser from "../componet/main/option/UserCompont/UserLoginAndRigistetion/LoginUser.jsx";
import Registetion from "../componet/main/option/UserCompont/UserLoginAndRigistetion/Registetion.jsx";
import UserClicking from "../componet/main/option/UserCompont/UserPage/UserClicking.jsx";
import ServiseMainSlice from "../componet/main/option/UserCompont/UserPage/MainSlice/ServiseMainSlice.jsx";
import Profile from '../componet/main/option/UserCompont/UserPage/userProfileSlice/profileInfo/Profile.jsx'
import { UserClickings } from "../componet/main/option/UserCompont/UserPage/Pass.jsx";
import PAN from "../componet/main/option/UserCompont/UserPage/userProfileSlice/profileInfo/PAN.jsx";
import UserInformation from "../componet/main/option/UserCompont/UserPage/userProfileSlice/profileInfo/updateFile/UserInformation.jsx";
import Productbar from "../componet/main/option/ProductConponet/ProductMain.jsx";
import ProductMainSlice from '../componet/main/option/UserCompont/UserPage/MainSlice/productMiniAndMainSlide/ProductMainSlice.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: < About />
            },
            {
                path: "/services",
                element: <Servicebar />,
            }
            ,
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/Product",
                element: <Productbar />
            },

            {
                path: "/loginUser",
                element: <LoginUser />
            },

            {
                path: "/signUp",
                element: <Registetion />
            },

            {
                path: "/UserClicking/UserInfo",
                element: <UserClickings />,
            },
            {
                path: "/UserClicking",
                element: < UserClicking />,
                children: [
                    {
                        path: "/UserClicking/UserInfo",
                        children: [
                            {
                                path: "/UserClicking/UserInfo/Profile",
                                element: <Profile />
                            },
                            {
                                path: "/UserClicking/UserInfo/Addresses",
                                element: <PAN />
                            },
                            {
                                path: "/UserClicking/UserInfo/PCinformation",
                                element: <UserInformation />
                            }

                        ]
                    },
                    {
                        path: "/UserClicking/OtherOption",
                        children: [
                            {
                                path: "/UserClicking/OtherOption/Service",
                                element: <ServiseMainSlice />
                            },
                            {
                                path: "/UserClicking/OtherOption/Product",
                                element: <ProductMainSlice />
                            },
                        ]

                    },
                ]
            }
        ]
    }
])

export { router }