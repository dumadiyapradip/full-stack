/* eslint-disable react/prop-types */
import Errows from "../../../../../../Asside/Errows";
import Loader from "../../../../../../Asside/Loader";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { current } from "../../../../../../app/feature/addToCardStore/AddToCard";
import { GateDataFetch } from "../../../../../../app/feature/addToCardStore/AddToCard";
import ServiceNot from "../userProfileSlice/profileInfo/NotData/ServiceNot"
import { useEffect } from "react";

// eslint-disable-next-line no-unused-vars
function Service() {

  const dispatch = useDispatch()
  const isLoader = useSelector((state) => state.AddToCard.isLoader)
  const data = useSelector((state) => state.AddToCard.Data)
  const isErrow = useSelector((state) => state.AddToCard.isErrow)

  useEffect(() => {
    dispatch(GateDataFetch());
  }, [dispatch]);
  return (
    <>
      {
        (isLoader) && (!isErrow) && <Loader />
      }
      {
        (data !== null || (data.length !== 0)) &&
        data.map((data) => (
          <div key={data._id} onClick={() => { dispatch(current(data._id)) }}>
            <Link to={"/UserClicking/OtherOption/Service"} className="pl-9">
              <div className="mx-45">
                <div
                  className="px-4 py-4 flex bg-white rounded-lg  w-full   border-gray-200 border items-center">
                  <img className="aspect-square h-20 md:h-40 object-cover rounded-lg"
                    src={`${data.MianImg}`} alt="product image" />
                  <div className="p-2 md:p-6 h-full flex flex-col md:justify-between">
                    <h3 className="text-sm md:text-md font-bold md:mb-2 uppercase text-gray-700 leading-4">
                      Nike Air MX Super 2500 - Red
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div >))
      }
      {
        ((data === null) || (data === undefined) || (data.length === 0)) && <ServiceNot navigate={"services"}/>
      }
      {
        (!isLoader) && (isErrow) && <div className="mt-40"> <Errows /></div>
      }
    </>
  )
}

export default Service
