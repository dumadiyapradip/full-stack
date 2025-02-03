import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../../utils';
import { localhost } from '../../../../../localStores.js'

function Registetion() {

    const usenames = useRef(" ");
    const emails = useRef(" ");
    const passwords = useRef(" ");


    const navigate = useNavigate();
    const handleSignup = async (e) => {

        const username = usenames.current.value
        const email = emails.current.value
        const password = passwords.current.value

        e.preventDefault();
        if (!username || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = `${localhost}/eventmenegment/web/User/ragistareUser`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            alert(result.mes);


        } catch (err) {
            handleError(err);
        }
    }
    return (
        <>
            <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4 mt-14">
                <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
                    <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full   to-gray-700 lg:px-8 px-4 py-4" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }} >
                        <div>
                            <h4 className="text-white text-lg font-semibold  from-orange-700 to-pink-600 ">Create Your Account</h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
                            <p className="text-[13px] text-white te mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
                        </div>
                    </div>
                    <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
                        <div className="mb-6">
                            <h3 className="bg-gradient-to-r f-w font-black  from-orange-700 to-pink-600 bg-clip-text text-transparent text-2xl">Create an account</h3>
                        </div>
                        <div className="space-y-6">
                            <label className="text-gray-800 text-sm mb-2 block">Name</label>
                            <div className=" flex items-center">
                                <input name="text" type="name" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter Name" ref={usenames} />
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                                <div className=" flex items-center">
                                    <input name="email" type="email" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" ref={emails} />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <div className=" flex items-center">
                                    <input name="password" type="password" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" ref={passwords} />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <label className="ml-3 block text-sm text-gray-800">
                                    I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>

                        <div className="!mt-12">
                            <button type="button" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }} onClick={handleSignup}>
                                Create an account
                            </button>
                        </div>
                        <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1"><Link to={'/loginUser'}>Login here</Link></a></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Registetion
