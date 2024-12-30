import React from 'react'
import Train from "../assets/Rail.png";

const Hero = () => {
    return (
        <div className='grid grid-cols-1 p-4 md:p-6 relative overflow-hidden'>
            <img src={Train} alt='Railways' className='rounded-md lg:rounded-xl w-full h-[90%]  bg-no-repeat bg-cover  object-cover' />

            <div className='absolute top-[20px] left-[20px] sm:top-[30px] sm:left-[30px]  lg:top-[50px] lg:left-[50px]'>
                <p className='text-2xl sm:text-4xl lg:text-6xl text-white font-extralight'><b>Indian Railways</b></p>
                <div className='text-white gap-1 text-sm sm:text-[20px] lg:text-[20px] font-extralight flex sm:gap-6 lg:gap-8 mt-4 font-serif'>
                    <div>Safety</div>
                    <div>|</div>
                    <div>Security</div>
                    <div>|</div>
                    <div>Punctuality</div>
                </div>
            </div>
        </div>
    )
}

export default Hero