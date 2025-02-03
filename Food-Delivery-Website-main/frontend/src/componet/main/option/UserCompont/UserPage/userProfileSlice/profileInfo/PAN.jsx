/* eslint-disable react-refresh/only-export-components */


function PAN() {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border flex items-center justify-center">
            <div className="antialiased rounded-xl " style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                <div className="w-full  flex justify-center items-center">
                    <div
                        className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden">
                        <div className="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
                            <div className="">
                                <h1 className="TitleDesgin font-bold text-4xl tracking-wide">PAN Card Information</h1>
                                <p className="text-cyan-100 text-sm pt-2 ">description</p>
                            </div>
                            <div className="flex flex-col space-y-6">
                                <div className="inline-flex space-x-2 items-center">
                                    <i className="bi bi-telephone-fill text-teal-300 text-xl"></i>
                                    <span className="select-all">+(123) 456 7890</span>
                                </div>
                                <div className="inline-flex space-x-2 items-center">
                                    <i className="bi bi-envelope-at-fill text-teal-300 text-xl"></i>
                                    <span className="select-all">contact@xyzwebsite.com</span>
                                </div>
                                <div className="inline-flex space-x-2 items-center">
                                    <i className="bi bi-geo-alt-fill text-teal-300 text-xl"></i>
                                    <span className="select-all">11, Street 342, Abcd Fgh</span>
                                </div>
                            </div>
                            <div className="flex space-x-4 text-lg">
                                <a href="#" className="hover:text-teal-300"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="hover:text-teal-300"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="hover:text-teal-300"> <i className="bi bi-linkedin"></i></a>
                                <a href="#" className="hover:text-teal-300"> <i className="bi bi-youtube"></i></a>
                            </div>
                        </div>
                        <div className="">

                            <div className="  w-full md:w-80 h-full bg-white p-7 text-gray-600 rounded-xl shadow-lg"
                                style={{ minHeight: "300px" }}>
                                <form action="" className="flex flex-col space-y-6">
                                    <div>
                                        <label className="text-sm">PAN card Number</label>
                                        <input type="text" placeholder="PAN Number"
                                            className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                                    </div>
                                    <div>
                                        <label className="text-sm">full Name </label>
                                        <input type="text" placeholder="full Name "
                                            className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                                    </div>
                                    <div>
                                        <label className="text-sm">PAN IMG </label>
                                        <input type="file" placeholder=" "
                                            className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                                    </div>
                                    {/* <div>
                                    <label className="text-sm">message here</label>
                                    <textarea placeholder="Type your message here"
                                        className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                                        rows="4"></textarea>
                                </div> */}
                                    <div className="flex items-center justify-between pb-6">
                                        <button type="button" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                                            Upload file
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PAN
