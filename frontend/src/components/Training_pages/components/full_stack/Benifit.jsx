import React, { useEffect } from 'react'
import videoStream from "../../assets/images/video_stream.png"
import pencil from "../../assets/images/pencil.png"
import chat from "../../assets/images/chat_with_question.png"
import Aos from "aos";
import 'aos/dist/aos.css'

function Benifit() {
   
  useEffect(()=> {
    Aos.init({duration:2000});
  },[])
  return (
  <div>
     
    <div className='m-3 md:-m-0 mt-36 mb-10 md:mt-32 flex justify-center font-times font-times' data-aos="fade-right">
        <div className='bg-[#17212E] text-center rounded-3xl text-white h-72 w-[450px] md:w-[750px]'>
           <h1 className='text-3xl m-5 text-[#F5CF6B]'>Benefits of Training Classes</h1>
         <div className='ml-4'>
           
          <div className='mb-7 '>
            <img className='ml-12 md:ml-64' width={30} height={30} src={videoStream} alt="" />
            <h1 className='-mt-6 ml-4'>Live Recorded Videos</h1>
           </div>
           <div className='mb-7'>
            <img className='ml-2 md:ml-52' width={30} height={30} src={pencil} alt="" />
            <h1 className='-mt-7 ml-4'>Experience about industry Projects</h1>
            </div>
           <div className='mb-7'>
            <img className='ml-20 md:ml-[270px]' width={30} height={30} src={chat} alt="" />
            <h1 className='-mt-7 ml-4'>Chat for Doubts</h1>
            </div>
         </div>
        </div>
    </div>

     {/* Mentor Section */}

      <div>
         <h1 className='text-center text-3xl font-bold mt-5' >Our Mentors</h1>
         <div className='flex justify-evenly flex-wrap  m-10 '>
              <div className='w-[400px] h-44 rounded-3xl mb-10 bg-[#F5CF6B]' >
                   <div className='flex  my-10 mx-5 '>
                      <div className='w-24 h-24  rounded-full bg-[#17212E]'/>
                      <div className='text-md md:text-xl m-5'>
                      <h1>Mentor Name</h1>
                      <p className='text-sm font-normal'>Position,Company</p>
                  
                      </div>
                   </div>
                   
              </div>

              <div className='w-[400px] h-44 rounded-3xl  mb-10 md:-mt-0  bg-[#F5CF6B]'>
                   <div className='flex my-10 mx-5 '>
                      <div className='w-24 h-24  rounded-full bg-[#17212E]'/>
                      <div className='text-xl m-5'>
                      <h1>Mentor Name</h1>
                      <p className='text-sm font-normal'>Position,Company</p>
                  
                      </div>
                   </div>
                   
              </div>
              
        </div>
      </div>
  </div>
  )
}

export default Benifit