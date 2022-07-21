import Image from "next/image";
import logo from "../public/logo.png";
import WordPress from '../public/wordpress.png';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <section className="bg-gray-100 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 md:px-24">
            <div className="my-4 rounded sm:ml-6">
                <div>
                    <div className="relative h-10 flex items-center cursor-pointer my-auto">
                        <Image
                            src={logo}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="left"
                        />
                    </div>
                    <p className="text-gray-500 text-sm font-normal mt-4">
                    Road-2, Sector-6
                    Uttara, Dhaka
                    Bangladesh
                    </p>
                    <p className="text-gray-500 text-sm font-normal mt-4"><strong>Phone: </strong>+8801313354303</p>
                    <p className="text-gray-500 text-sm font-normal mt-1"><strong>Email: </strong>support@codeinflect.com</p>
                </div>
            </div>
            <div className="my-4 rounded sm:ml-6">
                <div>
                    <div className="font-bold text-lg mt-2 text-gray-700">Useful Links</div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Home</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Works</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Blog</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Support</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Success</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Learn</p>
                    </div>
                </div>
            </div>
            <div className="my-4 rounded sm:ml-6">
            <div>
                    <div className="font-bold text-lg mt-2 text-gray-700">Our Services</div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Web Application</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Mobile App</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Wordpress</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Cyber Security</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Design & Marketing</p>
                    </div>
                    <div className="flex items-center mt-2">
                    <ChevronRightIcon className="h-4 pr-1 text-blue-600" /><p className="text-gray-500 text-base font-normal">Ecommerce</p>
                    </div>
                </div>
            </div>
            <div className="my-4 rounded sm:ml-6">
                <div>
                    <div className="font-bold text-lg mt-2 text-gray-700">Our Social Networks</div>
                    <div className="flex items-center mt-3">
                    <p className="text-gray-500 text-base font-normal">Follow Us And Get Notified When We Share Something Special For You</p>
                    </div>
                    <div className="mt-4">
                        <SocialIcon style={{ height: 40, width: 40, borderRadius: 12 }} url="https://twitter.com/CodeInflect" />
                       
                        <SocialIcon className="ml-2" style={{ height: 40, width: 40, borderRadius: 12 }} url="https://www.facebook.com/codeinflect/" />
                        <SocialIcon className="ml-2" style={{ height: 40, width: 40, borderRadius: 12 }} url="https://www.instagram.com/codeinflect/" />
                        <SocialIcon className="ml-2" style={{ height: 40, width: 40, borderRadius: 12 }} url="https://www.youtube.com/channel/UCEpx7nbAZmuS7VTxztLcz2A/videos" />
                        <SocialIcon className="ml-2" style={{ height: 40, width: 40, borderRadius: 12 }} url="https://www.linkedin.com/company/code-inflect" />
                    </div>
                </div>
            </div>
        </div>
        
        </section>
    );
};

export default Footer;