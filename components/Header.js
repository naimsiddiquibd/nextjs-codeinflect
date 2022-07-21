import Image from "next/image";
import logo from "../public/logo.png";
import { MenuIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';
import { useState } from "react";
import Link from 'next/link';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggleOpen = () => {
        setToggle(true);
    }
    const handleToggleClose = () => {
        setToggle(false);
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5 md:px-28">
            {/* Left part */}
            <div className="relative h-10 flex items-center cursor-pointer my-auto">
                <Image
                    src={logo}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            

            {/* Right part */}
            <div className="flex items-center justify-end">
                <div className="hidden md:inline">
                    <ul className=" flex relative list-none space-x-8 font-medium cursor-pointer">
                    <li>
                        <Link href="/">
                            <a className="block text-gray-800 font-medium text-base hover:text-blue-600 hover:border-blue-600 hover:border-b-2 cursor-pointer">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="block text-gray-800 font-medium text-base hover:text-blue-600 hover:border-blue-600 hover:border-b-2 cursor-pointer">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/works">
                            <a className="block text-gray-800 font-medium text-base hover:text-blue-600 hover:border-blue-600 hover:border-b-2 cursor-pointer">Works</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a className="block text-gray-800 font-medium text-base hover:text-blue-600 hover:border-blue-600 hover:border-b-2 cursor-pointer">Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/success">
                            <a className="block text-gray-800 font-medium text-base hover:text-blue-600 hover:border-blue-600 hover:border-b-2 cursor-pointer">Success</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/support">
                            <a className="block text-gray-800 font-medium text-base hover:text-blue-600 hover:border-blue-600 hover:border-b-2 cursor-pointer">Support</a>
                        </Link>
                    </li>
                    <li><a className="block text-gray-800 font-medium text-base hover:text-blue-600 hover:border-blue-600 hover:border-b-2 cursor-pointer">Learn</a></li>
                    </ul>
                </div>
                {
                    toggle === false ? 
                    <MenuIcon onClick={handleToggleOpen} className="md:hidden h-7 cursor-pointer" />
                    :
                    <XIcon onClick={handleToggleClose} className="md:hidden h-7 cursor-pointer" />
                }
                {/* {
                    toggle === false ? 
                    <MenuIcon onMouseOver={handleToggleOpen} className="md:hidden h-7 cursor-pointer" />
                    :
                    <XIcon onMouseOut={handleToggleClose} className="md:hidden h-7 cursor-pointer" />
                } */}
            </div>
            {toggle && (
                <div className="mt-4">
                <h2 className="mt-2">Home</h2>
                <h2 className="mt-2">Works</h2>
                <h2 className="mt-2">Blog</h2>
                <h2 className="mt-2">Support</h2>
                <h2 className="mt-2">Success</h2>
                <h2 className="mt-2">Learn</h2>
                </div>
            )}
        </header>
    );
};

export default Header;