import React, { useState } from "react";
import Logo from "../assets/IRCTC-Logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white">
            <div className="flex items-center justify-between px-8 py-3">

                <div>
                    <img src={Logo} alt="IRCTC" className="w-[33px] h-[41px] cursor-pointer" />
                </div>

                <ul className="hidden xl:flex gap-7 text-lg font-medium text-slate-600 ms-10 font-serif">
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">Explore</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">Contact Us</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">PNR Status</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">Promotions</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">Exclusive</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">IRCTC E-Wallet</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">More</li>
                </ul>

                <div className="hidden xl:flex gap-4 ms-auto font-serif">
                    <button className="rounded-lg px-5 py-2 cursor-pointer">
                        Sign In
                    </button>
                    <button className="rounded-lg px-5 py-2 text-white bg-blue-700 hover:bg-blue-800 transition duration-300">
                        Sign Up
                    </button>
                </div>

                <div className="xl:hidden flex items-center ms-auto cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiCloseFill size={30} className="text-gray-700" /> : <FaBarsStaggered size={30} color="black" className="text-gray-700" />}
                </div>
            </div>

            <div
                className={`xl:hidden fixed top-0 w-[80%] left-0 h-full bg-slate-50 shadow-md transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <ul className="flex flex-col gap-3 text-start py-10 text-gray-700 w-[80%] mx-auto">
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer text-lg">Home</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer text-lg">Explore</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer text-lg">Contact Us</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer text-lg">PNR Status</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer text-lg">Promotions</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer text-lg">Exclusive</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer text-lg">IRCTC E-Wallet</li>
                    <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer text-lg">More</li>
                    <div className="flex flex-col gap-3 mt-10">
                        <button className="rounded-lg px-5 py-2 text-blue-700 border border-blue-700 hover:bg-blue-100 transition duration-300">
                            Sign In
                        </button>
                        <button className="rounded-lg px-5 py-2 text-white bg-blue-700 hover:bg-blue-800 transition duration-300">
                            Sign Up
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;