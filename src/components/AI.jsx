import React from 'react'
import Iphone from "../assets/Iphone.png";
import Ai from "../assets/AI.png";

const AI = () => {
    return (
        <div className='w-full flex justify-center p-3 overflow-hidden'>
            <div style={{ background: "linear-gradient(#000093,#00002D)", width: "100%", minHeight: "509px", borderRadius: "10px" }}>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <h1 className='text-5xl text-white p-8 font-sans'>Get Started With Your <br /> Rail Journey!</h1>
                        <p className='text-white p-8 font-sans'>Book your ticket with IRCTC!</p>
                        <img src={Ai} alt='' className='h-[120px] lg:h-[150px] ms-4' />
                    </div>
                    <div className=''>
                        <img src={Iphone} alt='' className='w-[100%] animate-pulse' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AI