import Image from "next/image";
import Blog1 from "../public/blog/blog-1.png";
import Blog2 from "../public/blog/blog-2.png";
import Blog3 from "../public/blog/blog-3.png";
import Blog4 from "../public/blog/blog-4.png";
import Blog5 from "../public/blog/blog-5.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const blog = () => {
    return (
        <>
        <Header />
        <section className="bg-gray-50 pb-20 pt-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 px-5 md:px-24 gap-4">
                <div className="mt-3 lg:col-span-2 p-8 shadow-lg hover:bg-blue-100">
                    <Image className="h-auto max-w-full" src={Blog1} objectFit="cover"/>
                </div>
                <div className="mt-3 lg:col-span-1 p-8 shadow-lg hover:bg-blue-100">
                    <p className="text-sm font-semibold text-gray-500 mb-4">Date: July 16, 2022</p>
                    <h3 className="text-3xl font-bold text-gray-500">Our Goal Is To Make It So That The Software Ecosystem Is As Healthy As Possible.</h3>
                    <p className="text-base font-semibold text-gray-500 mt-6">We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. </p>
                    <button className="mt-4 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">Read More...</button>
                    <p className="mt-6 text-sm font-bold text-gray-500">Naim Siddiqui</p>
                    <p className="text-sm font-semibold text-gray-500 mb-4">Chief Technical Officer</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 px-5 md:px-24 gap-8 mt-4">
                <div className="p-8 shadow-lg hover:bg-blue-100">
                    <div className="mt-3">
                        <Image className="h-auto max-w-full" src={Blog2} objectFit="cover"/>
                    </div>
                    <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-500 mb-4">Date: July 16, 2022</p>
                        <h3 className="text-3xl font-bold text-gray-500">Our Goal Is To Make It So That The Software Ecosystem Is As Healthy As Possible.</h3>
                        <p className="text-base font-semibold text-gray-500 mt-6">We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. </p>
                        <button className="mt-4 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">Read More...</button>
                        <p className="mt-6 text-sm font-bold text-gray-500">Naim Siddiqui</p>
                        <p className="text-sm font-semibold text-gray-500 mb-4">Chief Technical Officer</p>
                    </div>
                </div>
                <div className="p-8 shadow-lg hover:bg-blue-100">
                    <div className="mt-3">
                        <Image className="h-auto max-w-full" src={Blog3} objectFit="cover"/>
                    </div>
                    <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-500 mb-4">Date: July 16, 2022</p>
                        <h3 className="text-3xl font-bold text-gray-500">Our Goal Is To Make It So That The Software Ecosystem Is As Healthy As Possible.</h3>
                        <p className="text-base font-semibold text-gray-500 mt-6">We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. </p>
                        <button className="mt-4 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">Read More...</button>
                        <p className="mt-6 text-sm font-bold text-gray-500">Naim Siddiqui</p>
                        <p className="text-sm font-semibold text-gray-500 mb-4">Chief Technical Officer</p>
                    </div>
                </div>
                <div className="p-8 shadow-lg hover:bg-blue-100">
                    <div className="mt-3">
                        <Image className="h-auto max-w-full" src={Blog4} objectFit="cover"/>
                    </div>
                    <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-500 mb-4">Date: July 16, 2022</p>
                        <h3 className="text-3xl font-bold text-gray-500">Our Goal Is To Make It So That The Software Ecosystem Is As Healthy As Possible.</h3>
                        <p className="text-base font-semibold text-gray-500 mt-6">We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. </p>
                        <button className="mt-4 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">Read More...</button>
                        <p className="mt-6 text-sm font-bold text-gray-500">Naim Siddiqui</p>
                        <p className="text-sm font-semibold text-gray-500 mb-4">Chief Technical Officer</p>
                    </div>
                </div>
                <div className="p-8 shadow-lg hover:bg-blue-100">
                    <div className="mt-3">
                        <Image className="h-auto max-w-full" src={Blog5} objectFit="cover"/>
                    </div>
                    <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-500 mb-4">Date: July 16, 2022</p>
                        <h3 className="text-3xl font-bold text-gray-500">Our Goal Is To Make It So That The Software Ecosystem Is As Healthy As Possible.</h3>
                        <p className="text-base font-semibold text-gray-500 mt-6">We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. We Are The Rising Software Company Based In Dhaka Although We Are Connected All Over The World Through Our Strong Communication And Networking. </p>
                        <button className="mt-4 text-white bg-blue-600 px-5 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">Read More...</button>
                        <p className="mt-6 text-sm font-bold text-gray-500">Naim Siddiqui</p>
                        <p className="text-sm font-semibold text-gray-500 mb-4">Chief Technical Officer</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <Copyright />
        </>
    );
};

export default blog;