import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import Loader from '../../../../../Asside/Loader.jsx'
import Errows from '../../../../../Asside/Errows.jsx'
import Formpage from './userProfileSlice/diffrentdata/Form.jsx'



function UserClicking() {
    const isLoader = useSelector((state) => state.UserPorsonData.UserDataStore)
    const data = useSelector((state) => state.UserPorsonData.UserDataStore)
    const isErrow = useSelector((state) => state.UserPorsonData.UserDataStore)

    return (
        <>
            {
                (isLoader) && (!isErrow) && <Loader />
            }
            {
                (data !== null) &&

                <div className="bg-gray-100 mt-28">
                    <div className="container mx-auto py-8">

                        <div className=" lg:flex flex-wrap -mx-4  gap-4">
                            <div className="  2xl:w-4/12 lg:w-full px-4 mb-8 bg-white shadow rounded-lg p-6 lg:max-h-screen">
                                <Formpage />
                            </div>
                            <div className=" 2xl:w-7/12  mb-8 bg-white shadow rounded-lg  lg:max-h-screen ml-5">
                                <Outlet />
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

export default UserClicking
