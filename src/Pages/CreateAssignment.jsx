import axios from 'axios';
import React, { use, useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import Loading from './Loading';

const CreateAssignment = () => {
    const { user } = use(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    // console.log(startDate)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const assignmentData = Object.fromEntries(formData.entries())
        assignmentData.userEmail = user.email;
        assignmentData.photoURL = user.photoURL;
        assignmentData.postedDate = new Date();
        assignmentData.deadline = startDate;
        assignmentData.username = user.displayName
        console.log(assignmentData)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/assign`, assignmentData)
            toast.success('Assignment Posting is Successful')
            navigate('/assignments')
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section className="mb-12">
            <h1 className='text-4xl text-center my-8'>Create An Assignment</h1>
            <div className="max-w-3xl mx-auto px-4">
                <div className="rounded-2xl border border-white/10
                 bg-black/40 backdrop-blur-md p-6 md:p-8 shadow-lg">
                    <div className="mb-8 text-center">
                        <p className=" text-gray-400">
                            Fill in the assignment details below.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                // value={formData.title}
                                // onChange={handleChange}
                                placeholder="Enter assignment title"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                            />
                            {/* {errors.title && (
                                <p className="mt-1 text-sm text-red-400">{errors.title}</p>
                            )} */}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">
                                Description
                            </label>
                            <textarea
                                name="description"
                                // value={formData.description}
                                // onChange={handleChange}
                                rows="5"
                                placeholder="Enter assignment description"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                            />
                            {/* {errors.description && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.description}
                                </p>
                            )} */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Marks
                                </label>
                                <input
                                    type="number"
                                    name="marks"
                                    // value={formData.marks}
                                    // onChange={handleChange}
                                    placeholder="Enter total marks"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                                />
                                {/* {errors.marks && (
                                    <p className="mt-1 text-sm text-red-400">{errors.marks}</p>
                                )} */}
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Difficulty
                                </label>
                                <select
                                    name="difficulty"
                                    // value={formData.difficulty}
                                    // onChange={handleChange}
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                                >
                                    <option value="Easy" className="bg-black">
                                        Easy
                                    </option>
                                    <option value="Medium" className="bg-black">
                                        Medium
                                    </option>
                                    <option value="Hard" className="bg-black">
                                        Hard
                                    </option>
                                </select>
                                {/* {errors.difficulty && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.difficulty}
                                    </p>
                                )} */}
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">
                                Thumbnail Image URL
                            </label>
                            <input
                                type="text"
                                name="thumbnail"
                                // value={formData.thumbnail}
                                // onChange={handleChange}
                                placeholder="Enter image URL"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                            />
                            {/* {errors.thumbnail && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.thumbnail}
                                </p>
                            )} */}
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-[48%] flex flex-col'>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Due Date
                                </label>
                                <DatePicker className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500" selected={startDate} onChange={(date) => setStartDate(date)} />

                            </div>
                            <div className='flex flex-col w-[48%]'>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                                >
                                    <option value="web development" className="bg-black">
                                        Web Development
                                    </option>
                                    <option value="digital marketing" className="bg-black">
                                        Digital Marketing
                                    </option>
                                    <option value="cyber security" className="bg-black">
                                        Cyber Security
                                    </option>
                                </select>
                               
                            </div>
                        </div>

                        <button type='submit' className="flex w-full items-center text-center justify-center rounded-lg px-6 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300  mt-5 ">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateAssignment;