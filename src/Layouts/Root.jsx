import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <>
            <div className='fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-md'>
                {/* Navigation */}
                <Nav></Nav>
            </div>
            <div className='mt-28'>
                {/* Main */}
                <Outlet></Outlet>
            </div>
            <div className=''>
                {/* Footer */}
                <hr className='text-slate-600' />
                <Footer></Footer>
            </div>
        </>
    );
};

export default Root;