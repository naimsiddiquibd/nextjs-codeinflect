import Image from "next/image";
import { CodeIcon } from '@heroicons/react/outline';
import { DeviceMobileIcon } from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/outline';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import { ColorSwatchIcon } from '@heroicons/react/outline';
import WordPress from '../public/wordpress.png';


const Services = () => {
    return (
        <section className="bg-gray-50">
        <div className="content-center text-center pt-12">
            <button className="bg-blue-200 text-sm text-blue-600 px-5 py-2 font-bold rounded-2xl cursor-auto">SERVICES</button>
            <h1 className="text-3xl my-4 text-gray-400 font-bold">Check our <span className="text-blue-600">Services</span></h1>
            <p className="mx-12 text-gray-400 text-sm font-semibold">Check Out The Best Providing Services And Place Your Order Today</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 md:px-24">
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                <CodeIcon className="text-blue-600 h-16 mb-3 bg-blue-100 p-3 rounded-lg shadow-inner" />
                    <div className="font-bold text-lg mb-3 text-gray-900">Web Application</div>
                    <p className="text-gray-500 text-base font-normal">
                    Development With The Latest Technology Such As Mern For Front And Back Both
                    </p>
                    <button className="mt-8 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">GET STARTED</button>
            </div>
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div className="bg-mint text-mint fill-current text-blue-600 h-16 mb-3 bg-blue-100 p-3 rounded-lg shadow-inner">
                        <Image
                            src={WordPress}
                            alt="Picture of the author"
                            width="40"
                            height="40">
                        </Image>
                    </div>
                    <div className="font-bold text-lg mb-3 text-gray-900">WordPress</div>
                    <p className="text-gray-500 text-base font-normal">
                    Quick Website Setup, Theme & Plugin Development And Customization
                    </p>
                    <button className="mt-8 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">GET STARTED</button>
            </div>
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                <DeviceMobileIcon className="text-blue-600 h-16 mb-3 bg-blue-100 p-3 rounded-lg shadow-inner" />
                    <div className="font-bold text-lg mb-3 text-gray-900">Mobile App</div>
                    <p className="text-gray-500 text-base font-normal">
                    Complete Mobile Application Development Package With React Native
                    </p>
                    <button className="mt-8 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">GET STARTED</button>
            </div>
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                <LockClosedIcon className="text-blue-600 h-16 mb-3 bg-blue-100 p-3 rounded-lg shadow-inner" />
                    <div className="font-bold text-lg mb-3 text-gray-900">Cyber Security</div>
                    <p className="text-gray-500 text-base font-normal">
                    Protected And Encrypted Security Solution With The Best Security Methods
                    </p>
                    <button className="mt-8 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">GET STARTED</button>
            </div>
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                <AdjustmentsIcon className="text-blue-600 h-16 mb-3 bg-blue-100 p-3 rounded-lg shadow-inner" />
                    <div className="font-bold text-lg mb-3 text-gray-900">Server Solution</div>
                    <p className="text-gray-500 text-base font-normal">
                    Shared, VPS or Dedicated Hosting Solution and Deployment
                    </p>
                    <button className="mt-8 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">GET STARTED</button>
            </div>
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                <ColorSwatchIcon className="text-blue-600 h-16 mb-3 bg-blue-100 p-3 rounded-lg shadow-inner" />
                    <div className="font-bold text-lg mb-3 text-gray-900">Creative Design</div>
                    <p className="text-gray-500 text-base font-normal">
                    Print & Multimedia Design, Animation, Presentation And More
                    </p>
                    <button className="mt-8 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">GET STARTED</button>
            </div>
        </div>
    </section>
    );
};

export default Services;