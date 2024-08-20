import React from 'react'

function Mentor() {
  return (
    <div className="bg-[#17212E] font-times"> <div>
        <div className=''>
            <br />
        <h1 className='text-center text-white text-3xl font-bold ' >Our Mentors</h1>
        </div>
    <div className='flex justify-evenly flex-wrap mt-5  '>
         <div className='w-[96%] md:w-[400px] h-44 rounded-3xl mb-10 bg-[#F5CF6B]' >
              <div className='flex  my-10 mx-5 '>
                 <div className='w-24 h-24  rounded-full bg-[#17212E]'/>
                 <div className='text-md md:text-xl m-5'>
                 <h1>Mentor Name</h1>
                 <p className='text-sm font-normal'>Position,Company</p>
             
                 </div>
              </div>
              
         </div>

         <div className='w-[96%] md:w-[400px] h-44 rounded-3xl  mb-10 md:-mt-0  bg-[#F5CF6B]'>
              <div className='flex my-10 mx-5 '>
                 <div className='w-24 h-24  rounded-full bg-[#17212E]'/>
                 <div className='text-xl m-5'>
                 <h1>Mentor Name</h1>
                 <p className='text-sm font-normal'>Position,Company</p>
             
                 </div>
              </div>
              
         </div>
         
   </div>
 </div></div>
  )
}

export default Mentor