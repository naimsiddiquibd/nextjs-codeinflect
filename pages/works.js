import Image from "next/image";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Work1 from '../public/portfolio/portfolio-1.jpg';
import Work2 from '../public/portfolio/portfolio-2.jpg';
import Work3 from '../public/portfolio/portfolio-3.jpg';
import Work4 from '../public/portfolio/portfolio-4.jpg';
import Work5 from '../public/portfolio/portfolio-5.jpg';
import Work6 from '../public/portfolio/portfolio-6.jpg';
import Work7 from '../public/portfolio/portfolio-7.jpg';
import Work8 from '../public/portfolio/portfolio-8.jpg';
import Work9 from '../public/portfolio/portfolio-9.jpg';
import Work10 from '../public/portfolio/portfolio-9.jpg';
import Work11 from '../public/portfolio/portfolio-11.jpg';
import Work12 from '../public/portfolio/portfolio-12.jpg';
import Work13 from '../public/portfolio/portfolio-13.jpg';
import Work14 from '../public/portfolio/portfolio-14.jpg';
import Work15 from '../public/portfolio/portfolio-15.jpg';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const works = () => {
    return (
        <>
        <Header />
        <section className="bg-white pb-20">
        <div className="p-5 md:px-24">
            <h2 className="p-5 md:px-24 md:pl-5 text-base font-semibold flex text-center">Full-Stack Web Application<ArrowNarrowRightIcon className="h-6 ml-3 mt-0.5 text-blue-600" /> </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="my-4 rounded shadow-lg sm:ml-6">
                        <Image className="h-auto max-w-full" src={Work15} objectFit="cover"/>
                        <div className="">
                            <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Appointment System</div>
                            <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                            React, Material UI, Firebase, Node.js, Express.js, MongoDB
                            </p>
                        </div>
                    </div>
                    <div className="my-4 rounded shadow-lg sm:ml-6">
                        <Image className="h-auto max-w-full" src={Work14} objectFit="cover"/>
                        <div className="">
                            <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Property Management</div>
                            <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                            React, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB
                            </p>
                        </div>
                    </div>
                    <div className="my-4 rounded shadow-lg sm:ml-6">
                        <Image className="h-auto max-w-full" src={Work13} objectFit="cover"/>
                        <div className="">
                            <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Multiuser Blog</div>
                            <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                            React, Bootsrap, Firebase, Node.js, Express.js, MongoDB
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 md:px-24">
            <h2 className="p-5 md:px-24 md:pl-5 text-base font-semibold flex text-center">React Website<ArrowNarrowRightIcon className="h-6 ml-3 mt-0.5 text-blue-600" /> </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work1} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Shafayet Siddiquee</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    CEO & Founder
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work2} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Naim Siddiqui</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Chief Technical Officer
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work3} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Int. Marketing Consultant
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work4} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Int. Marketing Consultant
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work5} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Int. Marketing Consultant
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work6} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Int. Marketing Consultant
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work7} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Int. Marketing Consultant
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work8} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Int. Marketing Consultant
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Work9} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Int. Marketing Consultant
                    </p>
                </div>
            </div>
            
        </div>
            </div>

            <div className="p-5 md:px-24">
            <h2 className="p-5 md:px-24 md:pl-5 text-base font-semibold flex text-center">Using CMS<ArrowNarrowRightIcon className="h-6 ml-3 mt-0.5 text-blue-600" /> </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="my-4 rounded shadow-lg sm:ml-6">
                        <Image className="h-auto max-w-full" src={Work10} objectFit="cover"/>
                        <div className="">
                            <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                            <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                            Int. Marketing Consultant
                            </p>
                        </div>
                    </div>
                    <div className="my-4 rounded shadow-lg sm:ml-6">
                        <Image className="h-auto max-w-full" src={Work11} objectFit="cover"/>
                        <div className="">
                            <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                            <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                            Int. Marketing Consultant
                            </p>
                        </div>
                    </div>
                    <div className="my-4 rounded shadow-lg sm:ml-6">
                        <Image className="h-auto max-w-full" src={Work12} objectFit="cover"/>
                        <div className="">
                            <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                            <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                            Int. Marketing Consultant
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <Footer />
        <Copyright />
        </>
    );
};

export default works;