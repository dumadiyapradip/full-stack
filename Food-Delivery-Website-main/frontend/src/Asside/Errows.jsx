import { Link } from "react-router-dom"

function Errows() {
    return (
        <div className='flex items-center justify-center w-full min-h-[70vh] text-gray-900 my-12 px-4'>
            <div className='flex flex-col items-center w-full gap-8'>
                <h1 className='text-9xl md:text-16xl w-full select-none text-center font-black ' >
                    404
                </h1>
                <p className='text-3xl font-semibold text-center'>You have discovered a secret place</p>
                <p className='text-2xl md:px-12 text-center'>
                    Unfortunately, this is only a 404 page. You may have
                    mistyped the address, or the page has been moved to another URL Or You are not Login
                </p>
                <div className='flex flex-row justify-between gap-8'>
                    <Link to="/"
                        className='flex justiy-center items-center px-5 py-2 text-xl rounded-md  border  text-white' style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                    >
                        Home
                    </Link>
                    <Link to="/loginUser"
                        className='flex justiy-center items-center px-5 py-2 text-xl rounded-md text-white' style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Errows
