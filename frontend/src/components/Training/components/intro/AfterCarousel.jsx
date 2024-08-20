import React from 'react'
import training from "../../assets/images/training.png"
import question2 from "../../assets/images/asking.png"
import meeting from "../../assets/images/meetin.png"
import check_list from "../../assets/images/check_list.png"
const items= [
    {id:1,
    image: meeting,
    heading: "Live classes",
    content:"Learn, interact and participate fromhome"

    },
    {
        id:2,
        image:training,
        heading: "Qualified Mentor",
        content:"Well Trained mentors to boost your knowledge about  domains"
    
    }, 
    {
        id:3,
        image: question2,
        heading: "24/7 Assistance",
        content:"Keep engaged with mentor assistance during your learning"
    },
    {
        id:4,
        image: check_list ,   
        heading: "Notes",
        content:"Notes and Resources to make sure that the you don’t forget them"
    }
]

function AfterCarousel() {
  return (
    <div className='h-80  -mt-3 bg-[#17212E] font-times'>
        <div className=' flex md:justify-evenly overflow-scroll overflow-y-hidden'>
        {
            items.map((item)=>{
                return(
                 <div key={item.id} className='text-white mx-10 w-56 h-80 flex flex-wrap justify-evenly'>
                     
                  <div className=''>
                     <div className=' bg-[#F5CF6B]  md:ml-14 my-5 md:mt-10 size-28  flex justify-center rounded-full'>
                        <img className='bg-center  bg-cover size-16 mt-6 ' src={item.image} alt="image" />
                    </div>
                    <h1 className='text-lg  text-center'>{item.heading}</h1>
                    <p className='text-center  text-sm mt-3'>{item.content}</p>
                     </div>
                  </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default AfterCarousel