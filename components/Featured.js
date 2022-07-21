import { PuzzleIcon } from '@heroicons/react/outline';
import { TerminalIcon } from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/outline';
import { SpeakerphoneIcon } from '@heroicons/react/outline';

const Featured = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 md:px-24">
            <div className="px-8 py-8 my-4 rounded shadow-lg sm:ml-6 text-blue-600 hover:bg-blue-600 hover:text-white ease-in duration-300">
                    <PuzzleIcon className="h-16 mb-3" />
                    <h2 className="font-bold text-lg mb-3">Software Development</h2>
                    <p className="text-base font-normal text-gray-400">
                    Web, Mobile & Desktop Application Development With The Latest Ideas & Technologies
                    </p>
            </div>
            <div className="px-8 py-8 my-4 rounded shadow-lg sm:ml-6 text-blue-600 hover:bg-blue-600 hover:text-white ease-in duration-300">
                    <TerminalIcon className="h-16 mb-3" />
                    <h2 className="font-bold text-lg mb-3">Quick Website</h2>
                    <p className="text-base font-normal text-gray-400">
                    Urgent Website Or Web Shop Development With WordPress, Joomla & Shopify
                    </p>
            </div>
            <div className="px-8 py-8 my-4 rounded shadow-lg sm:ml-6 text-blue-600 hover:bg-blue-600 hover:text-white ease-in duration-300">
                    <LockClosedIcon className="h-16 mb-3" />
                    <h2 className="font-bold text-lg mb-3">Cyber Security</h2>
                    <p className="text-base font-normal text-gray-400">
                    Highly Secure, Protected, And Encrypted Security Solution With The Best Security Methods
                    </p>
            </div>
            <div className="px-8 py-8 my-4 rounded shadow-lg sm:ml-6 text-blue-600 hover:bg-blue-600 hover:text-white ease-in duration-300">
                    <SpeakerphoneIcon className="h-16 mb-3" />
                    <h2 className="font-bold text-lg mb-3">Digital Marketing</h2>
                    <p className="text-base font-normal text-gray-400">
                    Social Media Marketing, Paid Promotion, On-Page & Off-Page SEO With Perfect Market Research
                    </p>
            </div>
        </div>
    );
};

export default Featured;