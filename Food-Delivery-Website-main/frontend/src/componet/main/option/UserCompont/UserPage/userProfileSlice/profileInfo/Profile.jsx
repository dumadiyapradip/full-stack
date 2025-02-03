/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavDataProvider } from "../../../../../../../app/feature/navdataSlide/NavDataSlide";
import { localhost } from '../../../../../../../localStores.js'


function Profile() {
    const dispatch = useDispatch()
    const isLoader = useSelector((state) => state.UserPorsonData.isLoader)
    const data = useSelector((state) => state.UserPorsonData.UserDataStore)
    const isErrow = useSelector((state) => state.UserPorsonData.isErrow)
    const navigate = useNavigate()

    const removeCookie = async () => {
        try {
            await axios.post(`${localhost}/eventmenegment/web/User/logoutUser`, { name: "refreshToken", name1: "acceshToken" });
            alert('User logOut');
            navigate('/loginUser')
            dispatch(NavDataProvider());
        } catch (error) {
            console.log('Error removing cookie:', error);
        }
    };

    return (
        <div className="   ">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    User Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    This is some information about the user.
                </p>
            </div>
            <div className="border-t border-gray-200  py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.username}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.email}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            XXXXXXXX12
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Other number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            XXXXXXXX12
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.Address}

                        </dd>
                    </div>

                </dl>
            </div>
            <button
                className=" mx-auto  flex gap-2 items-center text-white px-6 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                onClick={removeCookie}
            >
                Logout
            </button>
        </div>
    )
}

export default Profile
