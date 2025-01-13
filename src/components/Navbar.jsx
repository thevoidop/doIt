import React from "react";
import { FaPersonRunning } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="flex justify-center p-4 bg-teal-300 text-xl pl-12 pr-12">
            <span className="logo text-slate-800 outline p-2 flex items-center text-center text-3xl font-bold">
                doIt <FaPersonRunning />
            </span>
        </nav>
    );
};

export default Navbar;
