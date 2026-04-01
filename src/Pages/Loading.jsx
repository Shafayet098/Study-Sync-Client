import React from 'react';
import { BeatLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className='text-white flex items-center justify-center text-2xl'>
            <BeatLoader color='#FFFFFFFF' size={25} />
        </div>
    );
};

export default Loading;