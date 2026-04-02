import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Drawer = () => {
    const { logOut, user } = use(AuthContext)

    return (
        <aside className="bg-black flex flex-col w-64 md:w-72  overflow-scroll overflow-x-auto max-h-[100vh] pt-4 pb-20">

            {
                user && <div className='flex flex-col items-center justify-center '>
                    <div className="flex flex-col items-center -mx-2 ">
                        <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar" />
                        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</h4>
                        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user?.email}</p>
                    </div>
                    <Link onClick={() => logOut()} className="rounded-lg px-6 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300  mt-5 ">
                        LogOut
                    </Link>
                </div>
            }


            <div className="flex flex-col justify-between flex-1 mt-6 overflow-y-scroll overflow-x-scroll">
                <nav>
                    <Link to={'/'} className="flex items-center px-4 py-2   rounded-lg hover:bg-secondary hover:text-gray-200" >
                        <div><span className="mx-4 font-medium">Home</span></div>
                    </Link>

                    <Link to={'/assignments'} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary dark:hover:text-gray-200 hover:text-gray-700" >
                        <div>
                            <span className="mx-4 font-medium">All Assignments</span>
                        </div>
                    </Link>
                    {
                        user && <>
                            <Link to={'/createAssignment'} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary dark:hover:text-gray-200 hover:text-gray-700" >
                                <div>
                                    <span className="mx-4 font-medium">Create Assignment</span>
                                </div>
                            </Link>
                            <Link to={'/mysubmitted'} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary dark:hover:text-gray-200 hover:text-gray-700" >
                                <div>
                                    <span className="mx-4 font-medium">My Submitted</span>
                                </div>
                            </Link>
                            <Link to={'/pending-assignments'} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary dark:hover:text-gray-200 hover:text-gray-700" >
                                <div>
                                    <span className="mx-4 font-medium">All Pending</span>
                                </div>
                            </Link>
                           
                        </>
                    }



                </nav>
            </div>
        </aside>
    );
};

export default Drawer;