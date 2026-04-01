import { format } from "date-fns";
import { Link } from "react-router";

const AssignmentCard = ({ item }) => {
    // const [startDate, setStartDate] = useState(new Date());
    const { _id, title,deadline,photoURL, postedDate, username, thumbnail, marks,  difficulty, description } = item;
    const formated_deadline = format(deadline,"dd-MM-yyy")
    const formated_PostedDate = format(postedDate,"dd-MM-yyy")

    return (
        <Link to={`/assignment/${_id}`}>
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
            </div>
        </Link>
    );
};

export default AssignmentCard;