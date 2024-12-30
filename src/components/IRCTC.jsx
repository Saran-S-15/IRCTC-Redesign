import React from 'react'
import Logo from "../assets/IRCTC-Logo.png";

const IRCTC = () => {
    return (
        <div className='w-full mt-10 mb-10 overflow-hidden'>
            <hr></hr>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-12 mt-10 mb-10'>
                <div>
                    <img src={Logo} alt='' className='w-[73px] h-[90px] pb-4' />
                </div>
                <div className='flex items-center'>
                    <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo eaque repellendus odit provident similique voluptates?</p>
                </div>
            </div>
            <hr></hr>
        </div> 
    )
}

export default IRCTC