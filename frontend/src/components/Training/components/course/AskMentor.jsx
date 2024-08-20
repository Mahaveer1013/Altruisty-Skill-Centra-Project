import React from 'react'

function AskMentor() {
  return (
        
    <div className='flex justify-center h-full md:h-[540px] font-times'>
    <div className="bg-white p-6  rounded-lg shadow-md w-[96%] md:w-[95%] ">
      <h1 className='text-3xl font-semibold font-times flex justify-center'>Ask Your Doubt</h1>
      <h1 className='text-2xl my-5 '>Email</h1>
      <input type="text" placeholder='Enter your email id' className='bg-[#F1F1F1]  p-2 w-[98%] h-12 rounded-lg' />
      <h1 className='text-2xl my-5 font-times '>Your Query</h1>
      <textarea placeholder='Your Query ' rows={10} className='bg-[#F1F1F1] p-2 w-[98%]  rounded-lg'></textarea>
      
    </div>
    </div>
  )
}

export default AskMentor