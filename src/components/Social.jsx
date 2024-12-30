import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Social = () => {
  return (
    <div className='w-full mt-5 p-10 overflow-hidden '>
      <hr />
      <div className='flex text-center lg:text-start items-center mt-10'>
        <div>
          <p>Web By <span className='font-bold text-blue-700'>Saran S @2024</span></p>
        </div>
        <div className='hidden lg:flex ms-auto gap-4'>
          <FaFacebookF size={25} className='cursor-pointer'/>
          <FaTwitter size={25} className='cursor-pointer'/>
          <RiInstagramFill size={25} className='cursor-pointer'/>
          <FaLinkedin size={25} className='cursor-pointer'/>
          <FaYoutube size={25} className='cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Social