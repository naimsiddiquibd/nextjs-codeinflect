import Image from "next/image";
import AboutPic from "../public/about.jpg";
import { BriefcaseIcon } from '@heroicons/react/outline';
import { InboxInIcon } from '@heroicons/react/outline';

const About = () => {
    return (
        <section className="bg-blue-50 pb-20">
            <div className="content-center text-center pt-12">
                <button className="bg-blue-200 text-sm text-blue-600 px-5 py-2 font-bold rounded-2xl cursor-auto">ABOUT</button>
                <h1 className="text-3xl my-4 text-gray-400 font-bold">Find Out More <span className="text-blue-600">About US</span></h1>
                <p className="mx-12 text-gray-400 text-sm font-semibold">Let's Have A Quick Overview About Codeinflect's Business, Goal, Mission & Vission</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-5 md:px-24 gap-4">
                <div className="mt-3">
                    <Image className="h-auto max-w-full" src={AboutPic} objectFit="cover"/>
                </div>
                <div className="mt-3">
                    <h3 className="text-3xl font-bold text-gray-500">Our Goal Is To Make It So That The Software Ecosystem Is As Healthy As Possible.</h3>
                    <p className="text-base font-semibold text-gray-500 mt-6">We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking.</p>
                    <div className="mt-12 flex items-center">
                        <div>
                            <BriefcaseIcon className="h-14 bg-white p-3 rounded-full shadow-lg text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg text-gray-600 font-semibold">
                                Recruiting The Best & Passionate Programmers
                            </h5>
                            <p className="text-sm font-medium text-gray-500">We are extending the number of staff by hiring the best and most passionate programmers.</p>
                        </div>
                    </div>
                    <div className="mt-6 mb-10 flex items-center">
                        <div>
                            <InboxInIcon className="h-14 bg-white p-3 rounded-full shadow-lg text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg text-gray-600 font-semibold">
                                Recruiting The Best & Passionate Programmers
                            </h5>
                            <p className="text-sm font-medium text-gray-500">We are extending the number of staff by hiring the best and most passionate programmers.</p>
                        </div>
                    </div>
                    <p className="text-base font-semibold text-gray-500 mt-6">End of the day, Codeinflect works to make easy something or find the solution to your problem that could help you a lot in your daily and professional life. A perfect Software with AI & Latest technology can solve your problem and take your business heigh.</p>
                </div>
            </div>
        </section>
    );
};

export default About;