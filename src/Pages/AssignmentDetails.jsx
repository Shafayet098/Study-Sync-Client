import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router';

const AssignmentDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const navigate = useNavigate();
    const { _id, title, thumbnail, marks, dueDate, userEmail, difficulty, description,username } = data;
    const handleAssignment=async(e)=>{
        e.preventDefault();
        const short_note = e.target.note.value;
        const doc_link = e.target.doc_link.value;
        const user = {short_note, doc_link}
         user.AssignmentID = _id;
         user.userEmail = userEmail;
         user.marks = marks;
         user.AssignmentTitle = title;
         user.ObtainedMarks = null;
         user.AssignmentStatus = "pending"; 
         user.assignmentID = _id;
         user.examinee_name = username;  
         try{
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/user`, user)
            toast.success('Assignment Submission Successful')
            navigate('/mysubmitted')
            console.log(data)
         }catch(err){
            console.log(err)}
    }
    return (
        <div className='container mx-auto px-12 mb-12'>
            <div class=" overflow-hidden rounded-lg shadow-md bg-white/5">
                <img class="object-cover w-full h-80" src={thumbnail} alt="Article" />
                <div class="p-6">
                    <div>
                        <div className="flex justify-between">
                            <p> <span class="text-xs font-medium rounded-2xl bg-secondary p-2 uppercase text-blue-400 ">Marks: {marks}</span></p>
                            <p>Difficulty Level: <span class={`
                            ${difficulty === 'Hard' ? 'text-red-400' : ''}
                            ${difficulty === 'Medium' ? 'text-yellow-400' : ''}
                            ${difficulty === 'Easy' ? 'text-green-400' : ''}
                               text-xs font-medium rounded-xl p-2 uppercase `}> {difficulty} </span></p>
                        </div>
                        <div class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">Assignment Title:  {title}</div>
                        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">Description: {description}</p>
                    </div>

                    <div class="mt-4">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-1">
                                <img class="object-cover h-14 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                <div>
                                    <div class="mx-2 font-semibold text-gray-700 text-lg dark:text-gray-200" tabindex="0" role="link">Jone Doe</div>
                                    <div class="mx-2 text-md text-gray-600 dark:text-gray-300">Posted on: 21 SEP 2015</div>
                                </div>

                            </div>
                            <div className='text-lg mr-2'>DeadLine: {dueDate}</div>

                        </div>
                    </div>
                </div>
                <div className='p-12'>
                    <h1 className='text-center text-4xl font-bold'>Take Assignment</h1>
                    <form onSubmit={handleAssignment}>
                        <div>
                            <label className="block mb-2 text-md font-medium text-white">
                                Quick Short Note
                            </label>
                            <textarea
                                name="note"
                                rows="5"
                                placeholder="Quick Short Note"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                            />

                        </div>
                        <div>
                            <label className="block mb-2 text-md font-medium text-white">
                                Google Docs link
                            </label>
                            <input
                                type="url"
                                name="doc_link"
                                placeholder="Google Docs link"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                            />
                        </div>
                        <div>
                            <button type='submit' className="flex w-full items-center text-center justify-center rounded-lg px-6 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300  mt-5 ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;