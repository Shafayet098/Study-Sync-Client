import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";


const Evaluation = () => {
    const loadItem = useLoaderData();
    const item = loadItem[0];
    const navigate = useNavigate()
    const [error, setError] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const ObtainedMarks = form.marks.value;
        const feedback = form.feedback.value;
        const AssignmentStatus = 'completed'
        const itemData = {ObtainedMarks, feedback,AssignmentStatus}
        const fullMarks = parseInt(item.marks);
        const newMarks = parseInt(ObtainedMarks)
        if(fullMarks>=newMarks && newMarks>0){
           return setError(`Marks must be greater than 0 and less then ${fullMarks}`)

        }
        console.log(itemData)
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/user/${item?._id}`, itemData)
            // toast.success('Assignment Posting is Successful')
            // navigate('/assignments')
            console.log(data)
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <section className="mb-12">
            <h1 className='text-2xl md:text-4xl text-center my-8'>Assignment Script Evaluation</h1>
            <div className="max-w-3xl mx-auto px-4">
                <div className="rounded-2xl border border-white/10
                        bg-black/40 backdrop-blur-md p-6 md:p-8 shadow-lg">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">
                                Assignment Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                readOnly
                                value={item?.AssignmentTitle}
                                // onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                            />
                            {/* {errors.title && (
                                       <p className="mt-1 text-sm text-red-400">{errors.title}</p>
                                   )} */}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">
                                Short Note
                            </label>
                            <textarea
                                name="description"
                                readOnly
                                value={item?.short_note}
                                rows="5"
                                placeholder="Enter assignment description"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">
                                Assignment Google-Doc Link
                            </label>
                            <Link to={item?.doc_link} target="_blank" className=" px-4 py-3 text-white   overflow-hidden w-full text-wrap hover:text-blue-400">
                                {item?.doc_link}
                            </Link>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Marks
                                </label>
                                <input
                                    type="number"
                                    name="marks"
                                    required
                                    // value={formData.marks}
                                    // onChange={handleChange}
                                    placeholder="Enter total marks"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                                />

                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Feedback
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="feedback"
                                    placeholder="FeedBack"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                                />
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

export default Evaluation;