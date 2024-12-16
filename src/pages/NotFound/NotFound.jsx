import { Link } from "react-router-dom";


const NotFound = () => {


    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center">
            <div className="container w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="w-full md:w-1/2">
                    <div className="text-[120px] font-extrabold text-blue-600 leading-none">404</div>
                    <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                        Oops! We couldn&apos;t find this page.
                    </p>
                    <p className="text-md md:text-lg text-gray-600 mt-2">
                        Don&apos;t worry, you can return to the homepage or explore other pages.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/"
                            className="px-6 py-3 text-lg font-medium text-white bg-primary rounded-lg shadow-md hover:bg-primary/70 focus:ring-4 focus:outline-none transition-transform transform hover:scale-105"
                        >
                            Back to Homepage
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <img src="/assets/not_found.svg" alt="not_found" className="w-auto" />
                </div>

            </div>
        </div>
    );
};

export default NotFound;
