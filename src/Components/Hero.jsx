import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router';

const Hero = ({ study, heading, title }) => {
    console.log(heading)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: study,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <header class=" z-0">
            <div class="container px-6 py-16 mx-auto ">
                <div class="items-center lg:flex z-0">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg flex flex-col gap-2">
                            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{heading}</h1>

                            <p class="mt-3 text-gray-600 dark:text-gray-400">{title}</p>

                            <Link className="w-fit rounded-lg px-6 py-4   group bg-secondary bg-gradient-to-l from-slate-950 to-fuchsia-600 hover:bg-none  text-accent hover:ring-1 hover:ring-offset-2 ring-1  ring-fuchsia-700 hover:ring-fuchsia-600 duration-300">
                                Explore Now
                            </Link>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <Lottie options={defaultOptions}
                            height={400}
                            width={400} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;