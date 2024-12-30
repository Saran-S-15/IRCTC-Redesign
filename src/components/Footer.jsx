import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full ps-10 sm:ps-10 md:ps-10 lg:ps-0 lg:place-items-center overflow-hidden'>
                <div className='mb-6'>
                    <h1 className='font-semibold mb-6'>Product</h1>
                    <ul>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Features</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Prices</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Case Studies</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Reviews</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Updates</li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h1 className='font-semibold mb-6'>Company</h1>
                    <ul>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>About</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Contact Us</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Careers</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Culture</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Blog</li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h1 className='font-semibold mb-6'>Support</h1>
                    <ul>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Getting Started</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Help Centre</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Server Status</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Report a Bug</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Chat Support</li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h1 className='font-semibold mb-6'>Downloads</h1>
                    <ul>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>iOS</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Andriod</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Mac</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Windows</li>
                        <li className='text-gray-500 mb-4 cursor-pointer hover:text-blue-700'>Chrome</li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h1 className='font-semibold mb-6 mt-2'>Subscribe to our Newsletter</h1>
                    <p className='mb-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                    <input type='text' placeholder='Enter your Email' className='p-4 border rounded-full shadow-2xl w-fit' />
                    <button className='bg-blue-700 p-4 rounded-full mt-3 text-white flex'>Subscribe <FaArrowRightLong className='mt-1 ms-2' /></button>
                </div>
            </div>
        </>
    )
}

export default Footer