import React, { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';
import axios from 'axios';
import { Link } from 'react-router';

const Assignment = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL
                }/assign`)
            // console.log(data)
            setItems(data)
        }
        getData()
    }, [])
    // console.log(items)

    return (
        <div className='mt-16'>
            <h1 className='text-2xl md:4xl text-center font-bold text-accent'>Collaborative Assignments</h1>
            <p className='text-center px-4 md:px-8 text-md text-slate-400 mt-2'>Work together, share ideas, and complete assignments with your friends.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-between px-6 lg:px-10 mt-16'>
                {
                    items.slice(0,4).map(item => <AssignmentCard
                        item={item}
                        key={item._id}>
                    </AssignmentCard>)
                }
            </div>
            <div className='mt-4 flex justify-center'>
                <Link to={'/assignments'} className="rounded-lg px-6 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300  mt-5 ">
                    See All Assignments
                </Link>
            </div>
        </div>
    );
};

export default Assignment;