import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux';
import { NavDataProvider } from '../../app/feature/navdataSlide/NavDataSlide';


const NavbarA = () => {
    const dispatch = useDispatch()

    const location = useLocation();

    // Define different background colors for each route
    const getNavbarColor = () => {

        switch (location.pathname) {
            case '/':
                return true;

            default:
                return { boolent: true, color: '#fffff0' };  // About
        }
    };

    const isLoader = useSelector((state) => state.NavProvider.isLoader)
    const Condition = useSelector((state) => state.NavProvider.NavData)
    const isErrow = useSelector((state) => state.NavProvider.isErrow)

    useEffect(() => {
        dispatch(NavDataProvider());
    }, [dispatch]);
    const [isScrolled, setIsScrolled] = useState(false);

    let Links = [

        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "SERVICE", link: "/services" },
        { name: "PRICING", link: "/pricing" },
        { name: "PRODUCT", link: "/Product" }

    ];
    let [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 6000);
    }, [setOpen])

    const functions = getNavbarColor()
    const color = functions.color
    const boolent = functions.boolent

    return (
        <nav
            className={`fixed top-0 left-0 w-full transition-opacity duration-500 ease-in-out   p-3 z-50 md:flex items-center justify-between  md:px-10  zd:max-w-[]
                 ${getNavbarColor() && isScrolled ? 'bg-white' : 0} ${getNavbarColor() && isScrolled ? 'shadow-md' : 0} ${boolent ? 'shadow-md' : 0} 
                 ${open && getNavbarColor() ? 'bg-white' : 0}
                 `}

        >
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  text-gray-800' >
                <Link to="/" className="flex items-center  text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                    <img className="mx-auto w-24" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                    <span className="mx-auto text-xl font-black leading-none text-red-500 select-none w-auto">Lotue event<span className="text-indigo-600">.</span></span>
                </Link>
            </div>
            {/* Menu icon */}
            <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 mt-3'>
                {
                    open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul
                //  style={{ background: "#D1D1E0" }}
                className={`${open && getNavbarColor() ? 'bg-white' : 0}  opacity-75 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-24' : 'top-[-555px]'}`}>
                {
                    Links.map((link) => (
                        <li className={`md:ml-8 md:my-0 my-7 font-semibold  `} key={link.name}  >
                            <Link to={link.link} className=' hover:text-blue-400 duration-500 font-bold' >{link.name}</Link>
                        </li>))
                }
                {!Condition ?
                    <Link to="/loginUser" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }} className={` text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 opacity-100`}>
                        LOGIN </Link> : <Link to="/UserClicking/UserInfo" className={` duration-500 `}>
                        <div className="flex items-center ml-9">
                            <div className="relative opacity-1">
                                <img className="h-9 w-9 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/87.jpg " alt="Avatar" />
                                <div className="absolute inset-0 rounded-full shadow-inner"></div>
                            </div>
                        </div>
                    </Link>
                }
            </ul>
            {/* button */}

        </nav>
    );
};

export default NavbarA;