import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate, useNavigation} from 'react-router';
import toast from 'react-hot-toast';
import Loading from './Loading';

const MySubmitted = () => {
    const { user } = use(AuthContext)
    const navigate = useNavigate();
    const [items, setItems] = useState([])
    const navigation = useNavigation()
    
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL
            }/userData/${user?.email}`,{
                withCredentials: true
            })
        // console.log(data)
        setItems(data)
    }
    useEffect(() => {
        
        getData()
    }, [])
    console.log(items)
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    const handleEdit = (e,id) => {
        e.preventDefault()
        const value = e.target.value;
        console.log(value, id)
        if (value === 'Edit') {
            return navigate('/')
        }
        if (value === 'Delete') {
            axios.delete(`${import.meta.env.VITE_API_URL
            }/user/${id}`)
            .then((res)=>{
                if(res.data.deletedCount){
                    getData()
                    toast.success('Delete Successful')
                }
            }
                )
            .catch(err=>console.log(err))
        }
    }
    return (
        <section className="container px-4 mx-auto py-12">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total Submitted Assignments : </h2>

                <div className="px-3 py-1 text-xs bg-blue-100 rounded-full dark:bg-gray-800 ">{items?.length} </div>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border  dark:border-gray-700 md:rounded-lg ">
                            <table className="min-w-full divide-y divide-gray-200  dark:divide-gray-700 text-center ">
                                <thead className=" bg-white/5 text-center">
                                    <tr>
                                        <th className='px-2 text-sm font-normal text-gray-500 dark:text-gray-400 '>SL No.</th>
                                        <th className="text-sm font-normal   dark:text-gray-400">
                                            Assignment Title
                                        </th>

                                        <th className="text-sm font-normal   dark:text-gray-400">
                                            Assignment Marks
                                        </th>

                                        <th className="text-sm font-normal   dark:text-gray-400">
                                            Obtained Marks
                                        </th>

                                        <th className="text-sm font-normal   dark:text-gray-400">Status</th>
                                        <th className="text-sm font-normal   dark:text-gray-400 p-4">Edit/Delete</th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-black text-center">
                                    {
                                        items.map((item, index) => <tr>
                                            <td>{index + 1}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">
                                                {item?.AssignmentTitle}
                                            </td>
                                            <td className=" text-sm font-medium text-gray-400 whitespace-nowrap text-center">
                                                <p>{item?.marks}</p>
                                            </td>
                                            <td className="text-sm text-gray-400 whitespace-nowrap">{item?.ObtainedMarks}</td>

                                            <td className="text-sm whitespace-nowrap text-gray-300">
                                                 {
                                                    item?.AssignmentStatus==='pending' && <p className="px-2 py-1 text-xs text-indigo-400 rounded-full dark:bg-gray-800 ">{item?.AssignmentStatus}</p>
                                                 }
                                                 {
                                                    item?.AssignmentStatus==='completed' && <p className="px-2 py-1 text-xs text-green-400 rounded-full dark:bg-gray-800 ">{item?.AssignmentStatus}</p>
                                                 }
                                                 
                                            </td>
                                            <td>
                                                <select disabled={item.AssignmentStatus==='completed'?true:false} onChange={()=>handleEdit(event,item?._id)} defaultValue="Select One" className=" select select-secondary text-gray-300 w-28">
                                                    <option defaultValue={'Select One'} disabled={true}>Select One</option>
                                                    <option>Edit</option>
                                                    <option>Delete</option>

                                                </select>
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

export default MySubmitted;