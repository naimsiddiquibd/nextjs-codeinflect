import Image from "next/image";
import banner from "../public/banner.jpg";
import { PlayIcon } from '@heroicons/react/outline';

const Banner = () => {
    return (
        <div className="relative h-[580px] sm:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px]">
            <Image src={banner} layout="fill" objectFit="cover"
            />
            <div className="absolute top-1/4 w-full text-left p-5 md:px-28">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl sm:font-bold sm:text-gray-900">Welcome to  <span className="text-blue-600">Codeinflect</span></h1>

                <h5 className="text-xl pt-2 text-gray-600 sm:text-2xl">We are team of talanted Engineeers, Developers & Designers</h5>

                <div className="flex items-center">
                    <button className="mt-8 text-white bg-blue-600 px-8 py-2 shadow-md rounded font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">GET STARTED</button>
                    
                    <a className="flex items-center font-semibold mt-5 ml-4"><PlayIcon className="h-10 pr-1 text-blue-600" />Watch Video</a>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;