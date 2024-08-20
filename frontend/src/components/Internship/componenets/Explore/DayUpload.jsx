import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
function Upload({value}) {
  return (
    <div  className='bg-[#D4CAAA]  font-times'>
        <div className='flex justify-center items-center h-full'>
                 <div className='bg-[#17212E] mb-10 md:w-[600px] rounded-md md:rounded-3xl'>
                    <div className='flex justify-evenly  p-10'>
                    <button className='bg-[#F5CF6B] w-24 h-10 rounded-lg font-bold'>Upload</button>
                    <h1 className='text-[#F5CF6B] mt-2 text-xl'>Submitted</h1>
                    </div>
                    <div className='flex mb-2 justify-between text-white md:px-6 p-3'>
                    {/* <button><FaCirclePlus className='mt-1 mx-1'/>
                    </button><h1 className='text-xl'> Add a file:&nbsp;   &nbsp;</h1> */}
                    <h1 className='text-xl '>Task1-Drive Link</h1>
                        <input type="text" className='md:w-[300px] ml-2 rounded-lg' placeholder='  Enter the Drive Link' />
                    </div>
                   
                 </div>
        </div>
    </div>
  )
}

export default Upload