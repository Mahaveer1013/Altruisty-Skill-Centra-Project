import React from 'react'
import Image from "../../assets/images/Good marketing rises income.png"
import { FaFacebook } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className='bg-[#D4CAAA]'>
        
      <div className='bg-[#17212E]'>
          <h1 className='text-4xl text-[#F5CF6B] text-center p-3 md:p-5'>What do you gonna learn</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 p-5'>
            <div className='flex justify-center'>
                <img src={Image} alt="" />
            </div>
            <div className='text-white flex justify-center items-center'>
                <ol className='text-2xl text-white'>
                    <li className=' mb-5'>1. Bake UX into your workflow by following a proven, user centred design framework.</li>
                      <li className=' mb-5'>2. Moderate a usability test and prioritise the observations.</li>
                      <li className=' mb-5'>3. Design and conduct online and offline card sorting sessions.
                      </li>
                      <li className=' mb-5'>4. Plan field visits and user interviews to uncover user needs.
                      </li>
                      <li className=' mb-5'>5. Create personas, user stories, red routes and user journey maps.</li>
                      
                </ol>
            </div>
          </div>
      </div>
         <div className='p-3 md:p-5 pb-0 bg-[#D4CAAA]'>
            <hr className='mb-5 bg-black border-1 border-black mt-5'/>
            <div className='flex justify-between'>
                <div className='flex md:px-10'>

                <h1>Privacy policy</h1>
                <h1 >Terms & Conditions</h1>
                </div>
                <div className='flex items-center md:px-10 space-x-2 md:space-x-10'>
                <FaFacebook className='size-7 rounded-full '/>
                <FaSquareXTwitter className='size-7 rounded-full '/>
                <FaSquareInstagram className='size-7 rounded-full '/> 
                <GrLinkedin className='size-7 rounded-full '/>
                </div>
            </div>
            <hr className='mt-5 bg-black border-1 border-black' />

         </div>
         <h1 className='text-center p-5'>© Copyright 2024. All rights reserved.  </h1>
    </div>
  )
}

export default Footer