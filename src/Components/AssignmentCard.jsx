import { Link } from "react-router";

const AssignmentCard = ({ item }) => {
    // const [startDate, setStartDate] = useState(new Date());
    const { _id, title, thumbnail, marks, dueDate, userEmail, difficulty, description } = item;
    console.log(dueDate)
    return (
        <Link to={`/assignment/${_id}`}>
            <div class=" overflow-hidden rounded-lg shadow-md bg-white/5 outline-1 outline-slate-800 hover:outline-primary">
                <img class="object-cover w-full h-56" src={thumbnail} alt="Article" />
                <div class="p-6">
                    <div>
                        <div className="flex justify-between">
                            <p> <span class="text-xs font-medium rounded-2xl bg-secondary p-2 uppercase text-blue-400 ">Marks: {marks}</span></p>
                            <p> <span class={`
                            ${difficulty === 'Hard' ? 'text-red-400' : ''}
                            ${difficulty === 'Medium' ? 'text-yellow-400' : ''}
                            ${difficulty === 'Easy' ? 'text-green-400' : ''}
                               text-xs font-medium rounded-xl p-2 uppercase `}> {difficulty} </span></p>
                        </div>
                        <Link to={`/assignment/${_id}`} class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{title}</Link>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                    </div>

                    <div class="mt-4">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-1">
                                <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                <div>
                                    <div class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</div>
                                    <div class="mx-2 text-xs text-gray-600 dark:text-gray-300">Posted: 21 SEP 2015</div>
                                </div>

                            </div>
                            <div>DeadLine: {dueDate}</div>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AssignmentCard;