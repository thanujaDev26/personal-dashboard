import React from "react";
import { UserCircleIcon, LogoutIcon } from '@heroicons/react/solid';
import {NavLink} from "react-router-dom"; // Importing the UserCircleIcon and LogoutIcon from Heroicons

export default function Dashboard(props) {

    const balances = {
        leco: 5000,
        nwsdb: 3000,
        slt: 7000,
    };


    const totalBalance = Object.values(balances).reduce((acc, curr) => acc + curr, 0);


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <UserCircleIcon className="h-8 w-8 mr-2 text-gray-800" />
                    <p className="text-lg font-semibold text-gray-800">Welcome, Thanuja</p>
                </div>
                <NavLink to='/'>
                    <button className="text-gray-500 hover:text-gray-800">
                        <LogoutIcon className="h-6 w-6"/>
                    </button>
                </NavLink>
            </div>
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            <div className="grid grid-cols-2 gap-4">

                <div className="p-4 border rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">LECO Balance</h2>
                    <p className="text-xl text-gray-800">LKR {props.lecoBalance}</p>
                </div>

                <div className="p-4 border rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">NWSDB Balance</h2>
                    <p className="text-xl text-gray-800">LKR {balances.nwsdb}</p>
                </div>

                <div className="p-4 border rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">SLT Balance</h2>
                    <p className="text-xl text-gray-800">LKR {balances.slt}</p>
                </div>

                <div className="p-4 border rounded-lg col-span-2">
                    <h2 className="text-lg font-semibold mb-2">Total Balance</h2>
                    <p className="text-xl text-gray-800">LKR {totalBalance}</p>
                </div>
            </div>

            <div className="mt-8">
                <button className="bg-black text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-800"
                        onClick={() => alert("This function is under operation.")}>
                    View Details
                </button>
            </div>
        </div>
    );
}
