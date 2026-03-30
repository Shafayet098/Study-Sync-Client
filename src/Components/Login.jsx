import React from 'react';
import login from './../assets/Login.json'
import Lottie from 'react-lottie';
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: login,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl items-center">
            <div className="hidden bg-cover lg:block lg:w-1/2">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400} />
            </div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">


                <p className="mt-3 text-xl text-center text-gray-200 py-2">
                    Welcome back!
                </p>
                <Link className="flex items-center justify-center gap-4 w-full rounded-lg px-4 py-2 overflow-hidden group bg-secondary relative bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 hover:ring-fuchsia-600 transition-all ease-out duration-300">
                    <div>
                        <FcGoogle size={28}></FcGoogle>
                    </div>
                    <div>
                        <span className="relative text-md">Sign in with Google</span>
                    </div>
                </Link>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                        with email</a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <form >
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                        <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                        </div>

                        <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700  border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                    </div>

                    <div className="mt-6">
                        <Link className=" flex items-center justify-center gap-4 w-full rounded-lg px-4 py-2 overflow-hidden group bg-secondary relative bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 hover:ring-fuchsia-600 transition-all ease-out duration-300">
                            Sign In
                        </Link>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;