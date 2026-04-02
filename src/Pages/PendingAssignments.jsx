import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,  useNavigation } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Loading from './Loading';

const PendingAssignments = () => {
    const navigation = useNavigation()
    const [items, setItems] = useState([])
    
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL
            }/user?status=pending`)
        // console.log(data)
        setItems(data)
    }
    useEffect(() => {

        getData()
    }, [])
    // console.log(items)
   if(navigation.state==='loading'){
        return <Loading></Loading>
    }
    return (
        <section className=" px-4 container mx-auto py-12">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total Pending Assignments : </h2>

                <div className="px-3 py-1 text-xs bg-blue-100 rounded-full dark:bg-gray-800 ">{items?.length} </div>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="w-fit overflow-x-auto overflow-y-auto max-h-[500px]  border mx-auto  dark:border-gray-700 md:rounded-lg ">
                            <table className="min-w-[900px] lg:min-w-[1200px]  table-auto border-collapse  divide-y divide-gray-200  dark:divide-gray-700 text-center ">
                                <thead className=" bg-white/5 text-center">
                                    <tr>
                                        <th className='px-2 text-sm font-normal text-gray-500 dark:text-gray-400 '>SL No.</th>

                                        <th className="text-sm font-normal   dark:text-gray-400">
                                            Assignment Title
                                        </th>

                                        <th className="text-sm font-normal   dark:text-gray-400">
                                            Examinee Name
                                        </th>

                                        <th className="text-sm font-normal   dark:text-gray-400">
                                            Assignment Marks
                                        </th>

                                        <th className="text-sm font-normal   dark:text-gray-400">Status</th>

                                        <th className="text-sm font-normal   dark:text-gray-400 p-4">Script Evaluation</th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-black text-center">
                                    {
                                        items.map((item, index) => <tr>
                                            <td>{index + 1}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">
                                                {item?.AssignmentTitle}
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">
                                                {item?.examinee_name || 'name'}
                                            </td>

                                            <td className=" text-sm font-medium text-gray-400 whitespace-nowrap text-center">
                                                <p>{item?.marks}</p>
                                            </td>

                                            <td className="text-sm whitespace-nowrap text-gray-300">

                                                <p className="px-2 py-1 text-xs text-indigo-400 rounded-full dark:bg-gray-800 ">{item?.AssignmentStatus}</p>



                                            </td>
                                            <td>
                                                <Link to={`/evaluation/${item._id}`} className="rounded-lg px-2 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1  text-sm hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300  ">
                                                    Give Marks
                                                </Link>
                                            </td>

                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>


        </section>
    );
};

export default PendingAssignments;