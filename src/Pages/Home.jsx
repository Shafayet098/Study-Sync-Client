import React from 'react';
import Carousel from '../Components/Carousel';
import Featured from '../Components/Featured';
import Assignment from '../Components/Assignment';
import FAQ from '../Components/FAQ';
import { useNavigation } from 'react-router';

const Home = () => {
    const navigation = useNavigation();
    if(navigation.state==='loading'){
        return <span>Loading...</span>
    }
    
    return (
        <div>
            <div className='relative z-0'>
                <Carousel></Carousel>
            </div>
           
            <div className='container mx-auto mt-28'>
                <Assignment></Assignment>
            </div>
            <div className='mt-28'>
                <Featured></Featured>
            </div>
            <div className='container mx-auto my-28'>
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;