import Link from 'next/link';

const Copyright = () => {
    return (
        <section className="bg-gray-50">
            <div className="text-center py-5 sm:flex sm:justify-between md:px-28">
                <p className="text-sm">© Copyright <strong>Codeinflect</strong>. All Rights Reserved</p>
                <div className="text-sm">
                Designed by <Link href="/">
                        <a className="text-blue-600">Codeinflect Development Team</a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Copyright;