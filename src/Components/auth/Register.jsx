import { ToastContainer } from "react-toastify";
import Header from "../inc/Header";
import Footer from "../inc/Footer";

const Register = ({ }) => {
    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                    {/* Logo / Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
                        <p className="text-gray-500">Please fill all the fields to create account</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>

                        {/* Remember Me + Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2 text-gray-600">
                                <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-indigo-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
                        >
                           Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-gray-400 text-sm">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Logins */}
                    <div className="flex space-x-4">
                        <button className="flex-1 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="w-5 h-5" />
                            <span>Google</span>
                        </button>
                        <button className="flex-1 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="GitHub" className="w-5 h-5" />
                            <span>GitHub</span>
                        </button>
                    </div>

                    {/* Signup link */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <a href="/auth/login" className="text-indigo-600 font-medium hover:underline">
                           Sign in
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Register;