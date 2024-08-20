import React from 'react'
import { FaDownload } from "react-icons/fa6";
import certificate from "../assets/certificate.jpg";
function Certifications() {

  return (
    <div className="w-full h-full flex font-times mt-5">
    <div className="bg-Yellow w-full ml-[10px] mr-[10px] rounded-md p-2 md:pl-[50px] md:pr-[50px] rounded-md max-sm:h-screen">
        <div className='max-sm:h-full'>
            <h1 className='text-lg font-bold'>Certificates</h1>
            <hr className='h-[1px] bg-Darkblue border-1 border-Darkblue rounded-md'/>

            <div className='w-full bg-Darkblue rounded-md p-2 mt-[20px] flex text-white max-sm:flex-col '>

                <img src={certificate} className=' h-[100px] w-[200px] max-sm:w-full max-sm:h-[200px] rounded-md opacity-[0.9]'/>

                <div className='flex items-center justify-between w-full max-sm:flex-col'>
                    <h1 className='text-Yellow text-xl font-bold md:ml-[20px] max-sm:text-center'>Introduction to Digital marketing</h1>
                    <span className='flex items-center'>
                        <h1 className='text-white text-lg font-semibold md:ml-[20px]'>Issued On:</h1>
                        <p className='text-Yellow text-lg font-bold'>10 July 2024</p>
                    </span>
                    <button className="ring-2 ring-Yellow text-Darkblue text-lg font-semibold bg-Yellow rounded-md w-[15%] flex items-center  justify-around max-sm:w-full max-sm:mt-[10px] max-sm:justify-center max-sm:space-x-2">Download<FaDownload /></button>
                </div>


            </div>
        </div>
    
    
    
    
    </div></div>
  )
}

export default Certifications
