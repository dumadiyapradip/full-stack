
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "../../MainSlice/Box";
import { useSelector } from "react-redux";
function Formpage() {
    const navigate = useNavigate()
    const navigateFunaction = () => {
        navigate('/UserClicking/UserInfo/PCinformation');
    };
    const isLoader = useSelector((state) => state.UserPorsonData.isLoader)
    const data = useSelector((state) => state.UserPorsonData.UserDataStore)
    const isErrow = useSelector((state) => state.UserPorsonData.isErrow)
    const images = (data.avatar)
    const CoverImgpass = (data.coverImage)

    return (
        <>
            <form>
                <div className="w-full mt-2  rounded-sm  bg-cover bg-center bg-no-repeat items-center" style={{ backgroundImage: `url(${CoverImgpass})` }}>
                    <div className={`mx-auto  flex   justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full  bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${images})` }}>

                        <div className=" bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4" onClick={navigateFunaction}>
                            <label >
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
                        <div
                            className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                            <label className="inline-flex items-center gap-1 cursor-pointer" onClick={navigateFunaction}>Cover

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
            </form>
            <div className="w-full  flex">
                <div className="h-10 w-10 overflow-hidden rounded-full mt-3 mr-3">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-account-icon-download-in-svg-png-gif-file-formats--circle-user-profile-avatar-action-vol-1-pack-interface-icons-1512648.png?f=webp&w=256" alt="" />
                </div>
                <div className="w-full h-10 mt-4 font-bold">ACCOUNT SETTINGS</div>
            </div>
            <div className="pl-11 font-xl font-medium	">
                <Link to={"/UserClicking/UserInfo/Profile"} >Profile information</Link><br />
                <Link to={"/UserClicking/UserInfo/Addresses"} >PAD Card information</Link><br />
                <Link to={"/UserClicking/UserInfo/PCinformation"} >Manage ACCOUNT</Link><br />
            </div>
            <Box />

        </>
    )
}

export default Formpage
