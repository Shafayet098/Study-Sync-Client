import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from "motion/react"
import Drawer from './Drawer';
import { MdMenuOpen } from 'react-icons/md';
import { RiMenuUnfold3Line } from 'react-icons/ri';
import Button from './Button';
import { AuthContext } from '../Contexts/AuthContext';
import DrawerNew from './DrawerNew';
import './Nav.css'

const Nav = () => {
    const { user } = use(AuthContext)
    const [show, setShow] = useState(false)
    const links = <>

        <NavLink to={'/'} className={` mx-2 mt-2 text-md transition-colors duration-300 transform rounded-md lg:mt-0 text-accent hover:text-primary`}>Home
        </NavLink>
        <NavLink to={'/assignments'} className="mx-2 mt-2 text-md transition-colors duration-300 transform rounded-md lg:mt-0 text-accent hover:text-primary ">All Assignments
        </NavLink>
        <NavLink to={'/createAssignment'} className="mx-2 mt-2 text-md transition-colors duration-300 transform rounded-md lg:mt-0 text-accent hover:text-primary ">Create Assignment
        </NavLink>
        <NavLink to={'/mysubmitted'} className="mx-2 mt-2 text-md transition-colors duration-300 transform rounded-md lg:mt-0 text-accent hover:text-primary ">My Submitted
        </NavLink>
        <NavLink to={'/pending-assignments'} className="mx-2 mt-2 text-md transition-colors duration-300 transform rounded-md lg:mt-0 text-accent hover:text-primary ">All Pending
        </NavLink>

    </>
    return (
        <nav className="  shadow">
            <div className="container px-2 lg:px-4 py-2 mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <Link to={'/'} className="pl-4 md:pl-2 flex items-center justify-between">
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
                    </div>


                    <div className="px-2 lg:px-6 py-2 lg:py-4  duration-300   bg-transparent w-auto opacity-100  flex items-center">
                        <div className="hidden lg:flex lg:flex-row items-center mx-8">
                            {
                                links
                            }
                        </div>
                        <>
                            {
                                !user &&
                                <div className='flex items-center gap-2 md:gap-4'>
                                    <Link to={'/login'} className=" flex items-center justify-center gap-4 w-full rounded-lg px-4 py-2 overflow-hidden group bg-secondary hover:bg-gradient-to-l from-slate-950 to-fuchsia-600   text-accent ring-1 hover:ring-0 hover:ring-offset-0 ring-offset-1 ring-fuchsia-600 transition-all ease-out duration-300">
                                        LogIn
                                    </Link>
                                    <Link to={'/register'} className="  flex items-center justify-center gap-4 w-full rounded-lg px-4 py-2 overflow-hidden group bg-secondary hover:bg-gradient-to-l from-slate-950 to-fuchsia-600   text-accent ring-1 hover:ring-0 hover:ring-offset-0 ring-offset-1 ring-fuchsia-600 transition-all ease-out duration-300">
                                        Register
                                    </Link>
                                </div>
                            }
                        </>

                        <div className="relative flex items-center mt-4 lg:mt-0">
                            <div className=''>
                                {
                                    user &&
                                    <button onClick={() => setShow(!show)} className={`${show ? 'hidden items-center md:flex focus:outline-none' : 'items-center hidden md:flex focus:outline-none'} cursor-pointer`} aria-label="toggle profile dropdown">
                                        <div className=" md:w-12 md:h-12  overflow-hidden border-4 border-gray-400 rounded-full">
                                            <img src={user?.photoURL} alt="avatar" />
                                        </div>
                                    </button>
                                }

                                {
                                    user && <button onClick={() => setShow(!show)} className={`${show ? 'hidden ' : 'flex'} md:hidden`}>
                                        <MdMenuOpen className='hover:text-primary' size={30}></MdMenuOpen>
                                    </button>
                                }
                                <div className={`${show ? 'flex ' : 'hidden'} py-4 z-[9999] fixed w-72 bg-black -right-2 -top-2 lg:-top-3   duration-5000`}>
                                    <div className=''>
                                        <button onClick={() => setShow(!show)}>
                                            <RiMenuUnfold3Line className='hover:text-primary absolute top-10 left-4' size={25}></RiMenuUnfold3Line >
                                        </button>
                                        <Drawer className=""></Drawer>

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