import { Link } from "react-router-dom"
import Service from "./Service"
import { useState, useEffect } from "react"
import ServiceNot from "../userProfileSlice/profileInfo/NotData/ServiceNot"
import Product from "./productMiniAndMainSlide/Product"
import { useSelector, useDispatch } from "react-redux"
import { GateDataFetch } from "../../../../../../app/feature/addToCardStore/AddToCard";
import { ProductFetchData } from '../../../../../../app/feature/productCard/AddToproduct'

function Box() {
    const dispatch = useDispatch();

    const [pre, next] = useState("Service")
    const ServiceData = useSelector((state) => state.AddToCard.Data)
    const ProductData = useSelector((state) => state.AddToProdcut.Data)

    useEffect(() => {
        dispatch(GateDataFetch());
        dispatch(ProductFetchData());
    }, [dispatch]);


    function call() {
        {
            if (pre === "Service") {
                if ((ServiceData.length) === 0) {

                    return <ServiceNot navigate={"services"}></ServiceNot>
                }
                else {
                    return <Service></Service>
                }
            }
            if (pre === "Product") {
                if ((ProductData.length) === 0) {
                    return <ServiceNot navigate={"Product"}></ServiceNot>
                }
                else {
                    return <Product></Product>
                }

            }
        }
    }
    return (
        <>
            <div className=" mt-3 flex justify-evenly">
                <div onClick={() => next("Service")}>
                    <Link to={"/UserClicking/OtherOption/Service"} className="pl-9" >Service</Link>
                </div>
                <div onClick={() => next("Product")}>
                    <Link to={"/UserClicking/OtherOption/Product"} >Product</Link>
                </div>
            </div>
            <div className=" w-full h-56 overflow-y-scroll mt-4 ">
                {call()}
            </div>
        </>
    )
}

export default Box
