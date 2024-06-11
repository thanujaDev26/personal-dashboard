import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="space-x-4">
                <Link to="/dashboard">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Sign In
                    </button>
                </Link>
                <Link to="/signup">
                    <button type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm
                            hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                            focus-visible:outline-indigo-600">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
