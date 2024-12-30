import React from 'react'
import { IoMdTrain } from "react-icons/io";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { BsFillBusFrontFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCalendar } from "react-icons/io";
import { PiSeatFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const Ticket = () => {
    return (
        <div className='w-full flex justify-center'>

            <div className='w-[92%] sm:w-[85%] md:w-[80%] bg-white min-h-[200px] shadow-2xl rounded-2xl'>
                <div className='hidden md:flex justify-around p-3 mt-3 border-b-slate-200 w-full'>
                    <div className='cursor-pointer'><IoMdTrain size={30} />Train</div>
                    <div className='cursor-pointer'><PiAirplaneTakeoffLight size={30} />Flight</div>
                    <div className='cursor-pointer'><BsFillBusFrontFill size={30} />Bus</div>
                    <div className='cursor-pointer'> <FaHotel size={30} />Hotels</div>
                    <div className='cursor-pointer'> <GiPalmTree size={30} />Holidays</div>
                    <div className='cursor-pointer'> <MdFastfood size={30} />Meals</div>
                </div>
                <hr className='mx-14 hidden md:block'></hr>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 w-full place-items-center mt-3'>
                    <div>
                        <button disabled className='p-6 m-5 ps-2 w-[300px] sm:w-[250px] md:w-[300px] lg:w-[250px] bg-gray-50 rounded-lg flex'><CiLocationOn size={25} />Rameswaram</button>
                    </div>
                    <div>
                        <button disabled className='p-6 m-5 ps-2 w-[300px] sm:w-[250px] md:w-[300px] lg:w-[250px] bg-gray-50 rounded-lg flex'><CiLocationOn size={25} /> Chennai, Tamilnadu</button>
                    </div>
                    <div>
                        <button disabled className='p-6 m-5 ps-2 w-[300px] sm:w-[250px] md:w-[300px] lg:w-[250px] bg-gray-50 rounded-lg flex'><IoMdCalendar size={25} /> Sun 24, Dec 2024</button>
                    </div>
                    <div>
                        <button disabled className='p-6 m-5 ps-2 w-[300px] sm:w-[250px] md:w-[300px] lg:w-[250px] bg-gray-50 rounded-lg flex'><PiSeatFill size={25} />General</button>
                    </div>
                </div>

                <div className='w-full'>
                    <button className='bg-blue-700 text-white p-3 rounded-lg flex justify-center mx-auto md:mx-auto m-5'> <CiSearch size={25} />Search Trains</button>
                </div>
            </div>


        </div>
    )
}

export default Ticket