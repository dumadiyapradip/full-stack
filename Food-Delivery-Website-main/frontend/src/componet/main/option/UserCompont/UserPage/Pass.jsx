/* eslint-disable react-hooks/exhaustive-deps */
import Profile from "./userProfileSlice/profileInfo/Profile";
import Formpage from "./userProfileSlice/diffrentdata/Form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserDataFatch } from "../../../../../app/feature/UserData/UserPorsonData.jsx";
import Loader from '../../../../../Asside/Loader.jsx'
import Errows from '../../../../../Asside/Errows.jsx'

function UserClickings() {
    const dispatch = useDispatch()
    const isLoader = useSelector((state) => state.UserPorsonData.isLoader)
    const data = useSelector((state) => state.UserPorsonData.UserDataStore)
    const isErrow = useSelector((state) => state.UserPorsonData.isErrow)

    const d = 0
    useEffect(() => { dispatch(UserDataFatch()) }, [d])
    return (
        <>
            {
                (isLoader) && (!isErrow) && <Loader />
            }
            {
                (data !== null) &&
                <div className="bg-gray-100 mt-20">
                    <div className="container mx-auto py-8">
                        <div className=" lg:flex flex-wrap -mx-4 gap-4">
                            <div className="  2xl:w-4/12 lg:w-full px-4 mb-8 bg-white shadow rounded-lg p-6 lg:max-h-screen ">
                                <Formpage />
                            </div>
                            <div className="  2xl:w-7/12  mb-8 bg-white shadow rounded-lg  lg:max-h-screen ">
                                <Profile />
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                (!isLoader) && (isErrow) && <div className="mt-40"> <Errows /></div>
            }
        </>
    )
}

export { UserClickings } 
