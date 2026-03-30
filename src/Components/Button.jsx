import React from 'react';
import { Link } from 'react-router';

const Button = () => {
    return (
        <Link className="rounded px-4 py-2 overflow-hidden group bg-secondary relative bg-gradient-to-r from-fuchsia-900 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 hover:ring-fuchsia-600 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">LogIn</span>
        </Link>
    );
};

export default Button;