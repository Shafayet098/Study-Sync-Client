import React, { useState } from 'react';
const faqs = [
    {
        question: "How do I create an assignment?",
        answer:
            "After logging in, go to the 'Create Assignment' page, fill in the required details like title, marks, difficulty level, and due date, then submit the form.",
    },
    {
        question: "Can I submit assignments multiple times?",
        answer:
            "No, each assignment can be submitted once. However, you can update your submission before it is graded if your system allows it.",
    },
    {
        question: "Who can grade my assignment?",
        answer:
            "Any logged-in user except yourself can review and grade your submitted assignment.",
    },
    {
        question: "How can I see my assignment progress?",
        answer:
            "You can track all your submitted assignments from the 'My Attempted Assignments' page including status, marks, and feedback.",
    },
    {
        question: "Can I delete or update assignments?",
        answer:
            "You can delete or update assignments only if you are the creator of that assignment.",
    },
    {
        question: "What happens after I submit an assignment?",
        answer:
            "Your assignment will be marked as pending. Another user will review it and provide marks and feedback.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className=" bg-black text-white">
            <div className="max-w-4xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Everything you need to know about assignments and group study.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 ">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-xl overflow-hidden w-full hover:outline-primary hover:outline-1"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className="font-medium">{faq.question}</span>
                                <span className="text-fuchsia-400">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>

                            <div
                                className={`px-5 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-400">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;