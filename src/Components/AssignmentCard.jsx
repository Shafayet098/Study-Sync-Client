import { format } from "date-fns";
import { Link } from "react-router";

const AssignmentCard = ({ item }) => {
    // const [startDate, setStartDate] = useState(new Date());
    const { _id, title, deadline, photoURL, postedDate, username, thumbnail, marks, difficulty, description } = item;
    const formated_deadline = format(deadline, "dd-MM-yyy")
    const formated_PostedDate = format(postedDate, "dd-MM-yyy")

    return (
        <div >
            <div className=" overflow-hidden rounded-lg shadow-md bg-white/5 outline-1 outline-slate-800 hover:outline-primary">
                <img className="object-cover w-full h-56" src={thumbnail} alt="Article" />
                <div className="p-6">
                    <div>
                        <div className="flex justify-between">
                            <p> <span className="text-xs font-medium rounded-2xl bg-secondary p-2 uppercase text-blue-400 ">Marks: {marks}</span></p>
                            <p> <span className=
                                {`${difficulty === 'Hard' ? 'text-red-400' : ''}
                            ${difficulty === 'Medium' ? 'text-yellow-400' : ''}
                            ${difficulty === 'Easy' ? 'text-green-400' : ''}
                               text-xs font-medium rounded-xl p-2 uppercase `}> {difficulty} </span></p>
                        </div>
                        <button className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</button>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1">
                                <img className="object-cover h-10 rounded-full" src={photoURL} alt="Avatar" />
                                <div>
                                    <div className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{username}</div>
                                    <div className="mx-2 text-xs text-gray-600 dark:text-gray-300">Posted: {formated_PostedDate}</div>
                                </div>

                            </div>
                            <div>DeadLine: {formated_deadline}</div>

                        </div>
                    </div>
                </div>
                <div className="px-2 mb-2">
                    <Link to={`/assignment/${_id}`}
                         className="flex w-full items-center text-center justify-center rounded-lg px-6 py-2 group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1 disabled:cursor-not-allowed  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300  mt-5 ">
                        Take Assignment
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;