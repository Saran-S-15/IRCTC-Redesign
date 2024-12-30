import React from 'react'
import Tirupathi from "../assets/Tirupathi.png";
import Taj from "../assets/Taj.png";
import Aero from "../assets/Aero.png";
import Image from "../assets/image.png";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";


const Packages = () => {

    return (
        <>

            <div className='w-full p-8 overflow-hidden'>
                <h1 className='text-center font-semibold font-serif text-2xl mb-3 sm:text-3xl lg:text-4xl'>Other Packages</h1>
                <p className='text-center sm:pb-4 text-stone-500'>Explore our exclusive travel packages Designed to Enhance your Journey</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 md:px-6'>
                <div className='m-2 relative'>
                    <img src={Tirupathi} alt='' className='cursor-pointer w-[400px] h-[500px] object-cover rounded-lg shadow-2xl' />
                    <BiSolidRightTopArrowCircle size={40} color='white' className='absolute top-0 right-0 m-2 cursor-pointer' />
                    <h1 className='font-semibold text-lg absolute bottom-20 left-0 text-white m-2 '>Tirupathi Temple</h1>
                    <p className='absolute bottom-3 left-0 text-gray-200 m-2 text-sm'>Book your Tirupati Darshan tickets effortlessly and experience divine blessings with convenience.</p>
                </div>
                <div className='m-2 relative'>
                    <img src={Taj} alt='' className='cursor-pointer w-[400px] h-[500px] object-cover rounded-lg shadow-2xl' />
                    <BiSolidRightTopArrowCircle size={40} color='black' className='absolute top-0 right-0 m-2 cursor-pointer' />
                    <h1 className='font-semibold text-lg absolute bottom-20 left-0 text-white m-2 '>Taj Mahal</h1>
                    <p className='absolute bottom-3 left-0 text-gray-200 m-2 text-sm'>Experience a seamless journey to the iconic Taj Mahal with our convenient and affordable train tickets.</p>
                </div>
                <div className='m-2 relative'>
                    <img src={Aero} alt='' className='cursor-pointer w-[400px] h-[500px] object-cover rounded-lg shadow-2xl' />
                    <BiSolidRightTopArrowCircle size={40} color='white' className='absolute top-0 right-0 m-2 cursor-pointer' />
                    <h1 className='font-semibold text-lg absolute bottom-20 left-0 text-white m-2 '>Domestic Flight Tickets</h1>
                    <p className='absolute bottom-3 left-0 text-gray-200 m-2 text-sm'>Book affordable domestic flight tickets for hassle-free travel across India.</p>
                </div>
                <div className='m-2 relative'>
                    <img src={Image} alt='' className='cursor-pointer w-[400px] h-[500px] object-cover rounded-lg shadow-2xl' />
                    <BiSolidRightTopArrowCircle size={40} color='black' className='absolute top-0 right-0 m-2 cursor-pointer' />
                    <h1 className='font-semibold text-lg absolute bottom-20 left-0 text-white m-2 '>Rail Tour Packages</h1>
                    <p className='absolute bottom-3 left-0 text-gray-200 m-2 text-sm'>IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing etc....</p>
                </div>
            </div>



            <div className='w-full flex justify-end pb-10 mt-5'>
                <div className='me-5'>
                    <FaCircleArrowLeft size={35} className='cursor-pointer' color='grey' />
                </div>
                <div className='me-10'>
                    <FaCircleArrowRight size={35} className='cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default Packages;