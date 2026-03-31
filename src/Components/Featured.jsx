import React from 'react';

const Featured = () => {
    return (
        <section className=" ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Study Smarter with Powerful Features
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Everything students need to create assignments, collaborate with friends,
                        submit work, and track progress in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:outline-1 hover:outline-primary">
                        <h3 className="text-xl font-semibold mb-3">Create Assignments Easily</h3>
                        <p className="text-gray-400">
                            Create new assignments with title, description, marks, difficulty level,
                            thumbnail, and due date in a simple form.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:outline-1 hover:outline-primary">
                        <h3 className="text-xl font-semibold mb-3">Group Study Collaboration</h3>
                        <p className="text-gray-400">
                            Work together with friends in a shared learning environment where everyone
                            can participate, practice, and improve.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:outline-1 hover:outline-primary">
                        <h3 className="text-xl font-semibold mb-3">Assignment Submission System</h3>
                        <p className="text-gray-400">
                            Submit assignments with a Google Docs link and quick notes so your work
                            stays organized and easy to review.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:outline-1 hover:outline-primary">
                        <h3 className="text-xl font-semibold mb-3">Pending Assignment Review</h3>
                        <p className="text-gray-400">
                            See all pending submissions in one place and review classmates’ work
                            with marks and feedback.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:outline-1 hover:outline-primary">
                        <h3 className="text-xl font-semibold mb-3">Track Attempted Assignments</h3>
                        <p className="text-gray-400">
                            Monitor your submitted assignments, current status, total marks,
                            obtained marks, and feedback anytime.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:outline-1 hover:outline-primary">
                        <h3 className="text-xl font-semibold mb-3">Search and Filter with Ease</h3>
                        <p className="text-gray-400">
                            Quickly find assignments by difficulty level and search by title to save
                            time and stay focused.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;