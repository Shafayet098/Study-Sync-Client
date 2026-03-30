import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from "motion/react"
import Drawer from './Drawer';
import { MdMenuOpen } from 'react-icons/md';
import { RiMenuUnfold3Line } from 'react-icons/ri';
import Button from './Button';

const Nav = () => {
    const [show, setShow] = useState(false)
    const links = <>
        <Link className="mx-2 mt-2 text-lg transition-colors duration-300 transform rounded-md lg:mt-0 text-accent hover:text-primary ">Home</Link>

    </>
    return (
        <nav className="relative  shadow">
            <div className="container px-2 lg:px-6 py-2 lg:py-4 mx-auto">
                <div className="flex items-center justify-between">
                    <Link to={'/'} className="flex items-center justify-between">
                        <motion.div
                            animate={
                                { color: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"] }
                            }
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                            }}
                            className='text-3xl font-bold  md:text-4xl'>StudySync</motion.div>

                        {/* Modal */}
                    </Link>


                    <div className=" inset-x-0 px-2 lg:px-6 py-2 lg:py-4 transition-all duration-300  mt-0  top-0 relative bg-transparent w-auto opacity-100 lg:translate-x-0 flex items-center">
                        <div className="hidden md:flex lg:flex-row items-center mx-8">
                            {
                                links
                            }
                        </div>
                        <div className='flex items-center gap-2 md:gap-4'>
                            <Link to={'/login'} className=" flex items-center justify-center gap-4 w-full rounded-lg px-4 py-2 overflow-hidden group bg-secondary relative hover:bg-gradient-to-l from-slate-950 to-fuchsia-600   text-accent ring-1 hover:ring-0 hover:ring-offset-0 ring-offset-1 ring-fuchsia-600 transition-all ease-out duration-300">
                                LogIn
                            </Link>
                            <Link to={'/register'} className="  flex items-center justify-center gap-4 w-full rounded-lg px-4 py-2 overflow-hidden group bg-secondary relative hover:bg-gradient-to-l from-slate-950 to-fuchsia-600   text-accent ring-1 hover:ring-0 hover:ring-offset-0 ring-offset-1 ring-fuchsia-600 transition-all ease-out duration-300">
                                Register
                            </Link>
                        </div>

                        <div className="relative flex items-center mt-4 lg:mt-0">
                            <div className=''>
                                <button onClick={() => setShow(!show)} className={`${show ? 'hidden items-center md:flex focus:outline-none' : 'items-center hidden md:flex focus:outline-none'} `} aria-label="toggle profile dropdown">
                                    <div className=" md:w-12 md:h-12  overflow-hidden border-4 border-gray-400 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                                    </div>
                                </button>

                                <button onClick={() => setShow(!show)} className={`${show ? 'hidden ' : 'flex'} md:hidden`}>
                                    <MdMenuOpen className='hover:text-primary' size={30}></MdMenuOpen>
                                </button>
                                <div className={`${show ? 'flex ' : 'hidden'}  absolute z-100 right-0  -top-8  duration-5000`}>
                                    <div className='relative'>
                                        <button onClick={() => setShow(!show)}>
                                            <RiMenuUnfold3Line className='hover:text-primary absolute top-10 left-4' size={25}></RiMenuUnfold3Line >
                                        </button>
                                        <Drawer ></Drawer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;