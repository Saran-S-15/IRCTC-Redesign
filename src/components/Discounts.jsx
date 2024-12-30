import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Girl from "../assets/Girl.png"
import Boy from "../assets/Boy.png"
import "./Discounts.css";

const Discounts = () => {
    return (
        <>
            <div className='w-full flex p-10 overflow-hidden'>
                <h1 className='text-2xl sm:text-3xl text-center'>Get Discount Offers</h1>
                <div className='hidden sm:flex ms-auto mt-1 me-3'>
                    <p className='pe-4'>See All</p>
                    <FaArrowRightLong size={25} />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mx-1'>
                <div className='m-2 relative'>
                    <img src={Girl} alt='' className='image shadow-xl' />
                    <div className='absolute bottom-2 left-2 sm:top-[50%] sm:left-[20px]'>
                        <p className='text-xl text-slate-300'>Get extra discount at<br /> New Taj Hotel</p>
                        <p className='text-6xl text-slate-300 font-extralight'>50%</p>
                    </div>
                </div>
                <div className='m-2 relative'>
                    <img src={Boy} alt='' className='image2 shadow-xl' />
                    <div className='absolute bottom-2 left-2 sm:top-[50%] sm:left-[20px]'>
                        <p className='text-xl text-slate-200'>Exclusive Deals <br />Just For You!</p>
                        <p className='text-6xl text-slate-200 font-extralight'>75%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discounts