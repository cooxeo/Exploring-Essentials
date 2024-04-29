import React,{useRef, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import {FaBars ,FaXmark} from 'react-icons/fa6'


export default function Header() {

    const [nav, setNav] = useState(false)
    const handleNav = ()=> setNav(!nav)
    const handleClose = ()=> setNav(!nav)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
        <header className=" sticky z-50 top-0 ">
            <nav className=" backdrop-blur-md bg-black/50  items-center text-center px-4 lg:px-36 py-6 absolute top-0 left-0 right-0 z-10">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1240px]">
                    <Link to="/home" onClick={scrollToTop} className="flex items-center">
                        <h1 className='mr-3 text-white font-bold text-2xl md:text-3xl lg:text-4xl'>Exploring <span className='text-orange-600'>Essentials.</span></h1>
                    </Link>

                        <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:text-[14px] uppercase text-center text-white"
                        id="mobile-menu-2">
                            
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/home"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }smooth={true} duration={500}
                                >
                                    <span onClick={scrollToTop}>Home</span>
                                </NavLink>
                                
                            </li>
                            
                            <li>
                                <NavLink
                                onClick={scrollToTop} to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink
                                onClick={scrollToTop} to="/safety"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Safety Travel Tips
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink
                                onClick={scrollToTop}to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About 
                                </NavLink>
                                
                            </li>
                                
                        </ul>

                    </div>
                
                    <div >
                    <ul className={!nav ? 'hidden' : 'absolute w-full mt-10 font-light p-4 py-10 left-0  text-white bg-black text-2xl '}>
                    <li>
                                <NavLink onClick={handleClose}
                                to="/home"
                                    className={({isActive}) =>
                                        `block py-6 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-grey-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <span onClick={scrollToTop}>Home</span>
                                </NavLink>
                                
                            </li>
                            
                            <li>
                                <NavLink onClick={handleClose}
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-6 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-grey-700"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <span onClick={scrollToTop}>Contact Us</span>
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink onClick={handleClose}
                                to="/safety"
                                    className={({isActive}) =>
                                        `block py-6 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-grey-700"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <span onClick={scrollToTop}>Safety Travel Tips</span>
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink onClick={handleClose}
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-6 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-grey-700"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   <span onClick={scrollToTop}>About</span>
                                </NavLink>
                                
                                
                            </li>
                        </ul>
                    </div>
        <div className='lg:hidden mr-2 text-white' onClick={handleNav}>
                        {!nav ? <FaBars className='w-5' size={30}/> : <FaXmark className='w-5'size={30}/>}
                    </div>
            </div>
            </nav>
        </header>

        </>
    );
}