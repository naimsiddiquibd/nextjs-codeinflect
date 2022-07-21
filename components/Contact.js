import { LocationMarkerIcon } from '@heroicons/react/outline';
import { InboxIcon } from '@heroicons/react/outline';
import { PhoneIcon } from '@heroicons/react/outline';

const Contact = () => {
    return (
        <section className="bg-blue-10">
        <div className="content-center text-center pt-12">
            <button className="bg-blue-200 text-sm text-blue-600 px-5 py-2 font-bold rounded-2xl cursor-auto">CONTACT</button>
            <h1 className="text-3xl my-4 text-gray-400 font-bold"><span className="text-blue-600">Contact Us</span></h1>
            <p className="mx-12 text-gray-400 text-sm font-semibold">You Are Welcome If You Want To Visit Our Office Although We Are Always Active By Email And Call</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5 md:px-24">
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 md:col-span-2 text-center grid justify-items-center hover:bg-blue-100">
                    <div><LocationMarkerIcon className="h-14 bg-white p-3 rounded-full shadow-lg text-blue-600" /></div>
                    <div className="font-bold text-lg mb-3 text-gray-900">Our Address</div>
                    <p className="text-gray-500 text-base font-normal">
                    Road-2, Sector-6, Uttara, Dhaka
                    </p>
            </div>
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div><InboxIcon className="h-14 bg-white p-3 rounded-full shadow-lg text-blue-600" /></div>
                    <div className="font-bold text-lg mb-3 text-gray-900">Email Us</div>
                    <p className="text-gray-500 text-base font-normal">
                    support@codeinflect.com
                    </p>
            </div>
            <div className="px-8 py-16 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div><PhoneIcon className="h-14 bg-white p-3 rounded-full shadow-lg text-blue-600" /></div>
                    <div className="font-bold text-lg mb-3 text-gray-900">Call Us</div>
                    <p className="text-gray-500 text-base font-normal">
                    +8801313354303
                    </p>
            </div>
            <div className="my-4 rounded shadow-md sm:ml-6 md:col-span-2 text-center grid justify-items-center">
            <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" allowFullScreen></iframe>              
            </div>
            <div className="px-2 py-8 my-4 rounded shadow-md sm:ml-6 md:col-span-2 text-center grid justify-items-center">
                <form className="w-full max-w-sm">
                    <div className="flex space-x-4">
                        <div className="flex items-center border-b text-gray-700 py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your Name" aria-label="Your Name" />
                        </div>
                        <div className="flex items-center border-b text-gray-700 py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your Email" aria-label="Your Email" />
                        </div>
                    </div>
                    <div className="flex items-center border-b text-gray-700 py-2 mt-5">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Subject" aria-label="Subject" />
                    </div>
                    <div className="flex items-center border-b text-gray-700 py-2 mt-5">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none mt-16" type="text" placeholder="Message" aria-label="Message" />
                    </div>
                    <button className="mt-8 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;