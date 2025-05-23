import { LockOpenIcon } from '@heroicons/react/solid';
import {NavLink} from "react-router-dom";

export default function Sigin() {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">

                <div className="flex flex-col justify-center px-6 py-12 lg:px-8">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'}}>
                            <LockOpenIcon className="h-6 w-6 text-gray-500"/>
                        </div>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-x-6">
                                <NavLink to='/'>
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                        Back
                                    </button>
                                </NavLink>
                                <button
                                    type="submit"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm
                        hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600">
                                    Go!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
