import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Link, useNavigation } from 'react-router';
import AssignmentCard from '../Components/AssignmentCard';
import Loading from './Loading';
import { AuthContext } from '../Contexts/AuthContext';
import UserAssignmentCard from '../Components/UserAssignmentCard';
import { setDate } from 'date-fns';

const MyPosted = () => {
    const { user } = use(AuthContext)
    // console.log(user)
    const [items, setItems] = useState([])
    const navigation = useNavigation()
    const [count, setCount] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('')
    const [searchText, setSearchText] = useState('')
    const [filter, setFilter] = useState('')
    const email = user?.email;
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL
                }/mycards?email=${user.email}&page=${currentPage}&size=${itemsPerPage}&sort=${sort}&search=${searchText}&filter=${filter}`)
            // console.log(data)
            setItems(data)
        }
        getData()
    }, [currentPage, itemsPerPage, sort, searchText, filter, user.email])

    useEffect(() => {
        const totalData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL
                }/cards-count?email=${email}&filter=${filter}&search=${searchText}`)
            // console.log(data)
            setCount(data)
        }
        totalData()
    }, [filter, searchText,email])
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    const reloadData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL
            }/mycards?email=${email}&page=${currentPage}&size=${itemsPerPage}&sort=${sort}&search=${searchText}&filter=${filter}`)
        setItems(data)
    }
    const reloadCount = async() => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL
                }/cards-count?email=${email}&filter=${filter}&search=${searchText}`)
            setCount(data)
    }

    const handlePaginationButton = (btnNum) => {
        setCurrentPage(btnNum)
    }
    const handleReset = () => {
        setCurrentPage(1)
        setSort('')
        setSearchText('')
        setFilter('')
    }
    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearchText(text)
    }
    // console.log(filter)
    return (
        <div className='container px-6 py-10 mx-auto  flex flex-col justify-between'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                            onChange={(e) => {
                                setFilter(e.target.value)
                                setCurrentPage(1)
                            }}
                            value={filter}
                            name='category'
                            id='category'
                            className='border bg-black text-accent p-3 rounded-lg hover:border-primary'
                        >
                            <option value=''>Filter By Category</option>
                            <option value='web development'>Web Development</option>
                            <option value='cyber security'>Cyber Security</option>
                            <option value='digital marketing'>Digital Marketing</option>
                        </select>
                    </div>


                    <form
                        onSubmit={handleSearch}
                    >
                        <div className='flex items-center py-1.5 px-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-primary focus-within:ring-primary hover:border-primary '>
                            <input
                                className='px-6 py-2 placeholder-accent outline-none focus:placeholder-transparent'
                                // onChange={(e) => setSearchText(e.target.value)}
                                // value={searchText}
                                type='text'
                                name='search'
                                placeholder='Enter Assignment Title'
                                aria-label='Enter Assignment Title'
                            />

                            <button type='submit' className="rounded-lg px-6 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300 ">
                                Search
                            </button>
                        </div>
                    </form>

                    <div>
                        <select
                            onChange={(e) => {
                                setSort(e.target.value)
                                setCurrentPage(1)
                            }}
                            value={sort}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md  hover:border-primary bg-black'
                        >
                            <option value=''>Sort By Deadline</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                    <Link onClick={handleReset} className="rounded-lg px-6 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300 ">
                        Reset
                    </Link>
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2'>
                    {items.map(item => (
                        <UserAssignmentCard key={item._id}
                            item={item}
                            reloadData={reloadData}
                            reloadCount={reloadCount} />
                    ))}
                </div>
            </div>

            <div className='flex justify-center mt-12'>
                <button
                    onClick={() => handlePaginationButton(currentPage - 1)} disabled={currentPage === 1}
                    className='rounded-lg px-4 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300   mx-1  disabled:text-gray-500 capitalize disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500  '>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePaginationButton(btnNum)}
                        key={btnNum}
                        className={`${currentPage === btnNum ? 'ring-fuchsia-600 ring-offset-2 ring-1 bg-none rounded-lg' : 'rounded-lg'} px-3 py-2 mx-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600   text-accent  ring-1  ring-fuchsia-700  duration-300`}
                    >
                        {btnNum}
                    </button>
                ))}

                <button
                    onClick={() => handlePaginationButton(currentPage + 1)} disabled={numberOfPages === currentPage}
                    className='rounded-lg px-4 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300   mx-1  disabled:text-gray-500 capitalize disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 '>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default MyPosted;