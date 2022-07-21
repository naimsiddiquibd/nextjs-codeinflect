import Image from "next/image";
import Team1 from '../public/team/team-1.jpg';
import Team2 from '../public/team/team-2.jpg';
import Team3 from '../public/team/team-3.jpg';
import Team4 from '../public/team/team-4.jpg';


const Team = () => {
    return (
        <section className="bg-white pb-20">
            <div className="content-center text-center pt-12">
                <button className="bg-blue-200 text-sm text-blue-600 px-5 py-2 font-bold rounded-2xl cursor-auto">TEAM</button>
                <h1 className="text-3xl my-4 text-gray-400 font-bold">Our Hardworking <span className="text-blue-600">Team</span></h1>
                <p className="mx-12 text-gray-400 text-sm font-semibold">Let's meet our honorable directors and officers who are working very hard to ensure client's satisfaction</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 md:px-24">
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Team1} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Shafayet Siddiquee</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    CEO & Founder
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Team2} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Naim Siddiqui</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Chief Technical Officer
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Team3} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Sardar Ali</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Int. Marketing Consultant
                    </p>
                </div>
            </div>
            <div className="my-4 rounded shadow-lg sm:ml-6">
                <Image className="h-auto max-w-full" src={Team4} objectFit="cover"/>
                <div className="">
                    <div className="font-bold text-lg mx-4 mt-2 text-gray-900">Yasin Arafath</div>
                    <p className="text-gray-500 text-base font-normal mx-4 mb-4">
                    Senior Developer
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Team;