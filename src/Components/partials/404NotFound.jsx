import { Link } from "react-router-dom";
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import Home from './../Home';

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <div className="flex h-screen items-center justify-center">
                <div className="text-center p-8">
                    <h1 className="text-9xl font-bold text-gray-800">404</h1>
                    <p className="text-2xl font-semibold text-gray-600 mt-4">
                        Oops! Page not found
                    </p>
                    <p className="text-gray-500 mt-2">
                        The page you’re looking for doesn’t exist or has been moved.
                    </p>

                    <Link
                        to="/"
                        className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 
                     rounded-xl shadow-md hover:bg-blue-700 transition-all"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default NotFoundPage;
