import Image from "next/image";
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { FolderIcon } from '@heroicons/react/outline';
import { SupportIcon } from '@heroicons/react/outline';
import { UserGroupIcon } from '@heroicons/react/outline';
import WordPress from '../public/wordpress.png';

const Counts = () => {
    return (
        <section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5 md:px-24 mt-5">
            <div className="px-2 py-4 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100 relative">
                    <EmojiHappyIcon className="text-white h-12 bg-blue-600 p-3 rounded-full shadow-inner absolute -top-7 left-1/2 -translate-x-1/2" />
                    <div className="text-4xl font-semibold text-blue-900 my-2">232</div>
                    <p className="text-gray-500 text-base font-medium">Happy Clients</p>
            </div>
            <div className="px-2 py-4 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100 relative">
                    <FolderIcon className="text-white h-12 bg-blue-600 p-3 rounded-full shadow-inner absolute -top-7 left-1/2 -translate-x-1/2" />
                    <div className="text-4xl font-semibold text-blue-900 my-2">521</div>
                    <p className="text-gray-500 text-base font-medium">Projects</p>
            </div>
            <div className="px-2 py-4 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100 relative">
                    <SupportIcon className="text-white h-12 bg-blue-600 p-3 rounded-full shadow-inner absolute -top-7 left-1/2 -translate-x-1/2" />
                    <div className="text-4xl font-semibold text-blue-900 my-2">1,463</div>
                    <p className="text-gray-500 text-base font-medium">Hours Of Support</p>
            </div>
            <div className="px-2 py-4 my-4 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100 relative">
                    <UserGroupIcon className="text-white h-12 bg-blue-600 p-3 rounded-full shadow-inner absolute -top-7 left-1/2 -translate-x-1/2" />
                    <div className="text-4xl font-semibold text-blue-900 my-2">15</div>
                    <p className="text-gray-500 text-base font-medium">Hard Workers</p>
            </div>
        </div>
    </section>
    );
};

export default Counts;