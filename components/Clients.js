import Image from "next/image";
import Client1 from '../public/clients/client-1.png';
import Client2 from '../public/clients/client-2.png';
import Client3 from '../public/clients/client-3.png';
import Client4 from '../public/clients/client-4.png';
import Client5 from '../public/clients/client-5.png';
import Client6 from '../public/clients/client-6.png';


const Clients = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-5 md:px-24">
                <div className="px-8 py-16 my-8 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div className="bg-mint text-mint fill-current h-16">
                        <Image
                            src={Client1}
                            alt="Picture of the author"
                            width="400"
                            height="173">
                        </Image>
                    </div>
                </div>
                <div className="px-8 py-16 my-8 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div className="bg-mint text-mint fill-current h-16">
                        <Image
                            src={Client2}
                            alt="Picture of the author"
                            width="400"
                            height="140">
                        </Image>
                    </div>
                </div>
                <div className="px-8 py-16 my-8 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div className="bg-mint text-mint fill-current h-16">
                        <Image
                            src={Client3}
                            alt="Picture of the author"
                            width="400"
                            height="142">
                        </Image>
                    </div>
                </div>
                <div className="px-8 py-16 my-8 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div className="bg-mint text-mint fill-current h-16">
                        <Image
                            src={Client4}
                            alt="Picture of the author"
                            width="400"
                            height="219">
                        </Image>
                    </div>
                </div>
                <div className="px-8 py-16 my-8 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div className="bg-mint text-mint fill-current h-16">
                        <Image
                            src={Client5}
                            alt="Picture of the author"
                            width="400"
                            height="142">
                        </Image>
                    </div>
                </div>
                <div className="px-8 py-16 my-8 rounded shadow-md sm:ml-6 text-center grid justify-items-center hover:bg-blue-100">
                    <div className="bg-mint text-mint fill-current h-16">
                        <Image
                            src={Client6}
                            alt="Picture of the author"
                            width="400"
                            height="125">
                        </Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;