/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Loader from '../../../../../../../../Asside/Loader.jsx'
import Errows from '../../../../../../../../Asside/Errows.jsx'
import { UserDataFatch } from "../../../../../../../../app/feature/UserData/UserPorsonData.jsx";



function UserInformation() {
    const dispatch = useDispatch()
    const isLoader = useSelector((state) => state.UserPorsonData.isLoader)
    const data = useSelector((state) => state.UserPorsonData.UserDataStore)
    const isErrow = useSelector((state) => state.UserPorsonData.isErrow)
    const [reloadTrigger, setReloadTrigger] = useState(false); // Local state for re-fetching data

    useEffect(() => {
        dispatch(UserDataFatch());

    }, [dispatch]);

    const [userData, setUserData] = useState({
        username: data.username ,
        PhoneNumber: data.PhoneNumber,
        OtherNumber: data.OtherNumber,
        Address: data.Address,
    });



    const [image, setImage] = useState({
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbuwL-jS6oZbDp8BdqF3hvMIAUSBNuU-wQiyoKvuqVj-qr6XJC3hSe0UzHZ316wVYpdlqzFtZyqOLzz2_CJFHd7XiylmFk_cYzIsnWyk",
        name: "image",
        data: null
    });
    const [CoverImg, NextCoverImg] = useState({
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbuwL-jS6oZbDp8BdqF3hvMIAUSBNuU-wQiyoKvuqVj-qr6XJC3hSe0UzHZ316wVYpdlqzFtZyqOLzz2_CJFHd7XiylmFk_cYzIsnWyk",
        name: "CoverImg",
        data: null
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };
    const handleImageChange = (event) => {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file) {


            if (fileInput.id === "upload_profile") {
                setImage((prevUserData) => ({
                    ...prevUserData,
                    data: file,
                }));
            } else if (fileInput.id === "upload_cover") {
                NextCoverImg((prevUserData) => ({
                    ...prevUserData,
                    data: file,
                }));
            } else {
                console.error("Unrecognized input field");
                return;
            }
        }
    }


    const handleUpload = async (event) => {
        event.preventDefault();


        try {
            const response = await axios.post('http://localhost:500/eventmenegment/web/User/update', userData);
            const formData = new FormData();
            const CoverImgPass = new FormData();

            formData.append('image', image.data);
            CoverImgPass.append('CoverImg', CoverImg.data);


            if ((image.data) !== null) {

                axios.patch('http://localhost:500/eventmenegment/web/User/avatar', formData)
                    .then((response) => {
                        console.log(response.data);
                        dispatch(UserDataFatch());
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                setReloadTrigger((prev) => !prev);

            }
            if ((CoverImg.data) !== null) {

                axios.patch('http://localhost:500/eventmenegment/web/User/CaverImg', CoverImgPass)
                    .then((response) => {
                        console.log(response.data);
                        dispatch(UserDataFatch());
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                setReloadTrigger((prev) => !prev);

            }

        } catch (error) {
            console.error('Error submitting user data:', error);
        }

    };

    const images = (data.avatar)
    const CoverImgpass = (data.coverImage)



    return (
        <>
            {
                (isLoader) && (!isErrow) && <Loader />
            }
            {
                (data !== null) &&
                <>
                    <div className="xl:m-10">
                        <div className="w-full  rounded-sm  bg-cover bg-center bg-no-repeat items-center " style={{ backgroundImage: `url(${CoverImgpass})` }}>
                            <div className={`mx-auto  flex   justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${images})` }}>
                                <input type="file" name="profile" id="upload_profile" onChange={handleImageChange} hidden required />

                                <div className=" bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                                    <label htmlFor="upload_profile">
                                        <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none"
                                            strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <input type="file" name="profile" id="upload_cover" onChange={handleImageChange} hidden required />
                                <div
                                    className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                                    <label htmlFor="upload_cover" className="inline-flex items-center gap-1 cursor-pointer">Cover

                                        <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none" strokeWidth="1.5"
                                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-hidden ">
                            <div className="px-4 py-3 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    User Profile
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    This is some information about the user.
                                </p>
                            </div>
                            <div className=" px-4 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Full name
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {/* {data.username} */}
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                value={userData.username}
                                                onChange={handleChange}
                                            />
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
                                    {/* <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Phone number
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <input
                                                type="tel"
                                                id="PhoneNumber"
                                                name="PhoneNumber"
                                                maxLength={10}
                                                minLength={10}
                                                value={userData.PhoneNumber}
                                                onChange={handleChange}
                                            />
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Other number
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

                                            <input
                                                type="tel"
                                                id="OtherNumber"
                                                name="OtherNumber"
                                                maxLength={10}
                                                minLength={10}
                                                value={userData.OtherNumber}
                                                onChange={handleChange}
                                            />
                                        </dd>
                                    </div> */}
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Address
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <textarea
                                                type="text"
                                                id="Address"
                                                name="Address"
                                                value={userData.Address}
                                                rows="4"
                                                placeholder="Type your message here"
                                                onChange={handleChange}

                                            />
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className=" pb-1 pt-1 text-center">
                                <button
                                    className="mb-3 inline-block  rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong w-32"
                                    // type="submit"
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                    style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                                    onClick={handleUpload}
                                >
                                    Submit

                                </button>

                            </div>
                        </div >
                    </div>

                </>

            },
            {
                (!isLoader) && (isErrow) && <div className="mt-40"> <Errows /></div>
            }
        </>
    )
}

export default UserInformation
