import React, { useState } from 'react'
import Hackathon from "../assets/Hackathon.png"
import OnlineQuiz from "../assets/onlineQuiz.png";
import aptitude from "../assets/Aptitute-Test.webp";
import codingSkill from "../assets/codingSkill.png";
import AptitudeGraph from './AptitudeGraph.jsx';

function AnalyticsProfile() {
    const HackathonData=[
        {
            id:1,
            img:Hackathon,
            name:"Hackathon Name",

        },
        {
            id:2,
            img:Hackathon,
            name:"Hackathon Name",

        },
        {
            id:3,
            img:Hackathon,
            name:"Hackathon Name",

        },
        

    ]
    const onlinequiz=[
        {
            id:1,
            img:OnlineQuiz,
            name:"Quiz Name",
        }
    ]
    const Aptitude=[{
        id:1,
        img:aptitude,
        name:"Aptitude Tests",
    }]
    const CodingSkill=[{
        id:1,
        img:codingSkill,
        name:"Coding skill"

    }]
    const [isaptitude,setAptitude]=useState(false);
    
  return (
    <div className="w-full h-full flex font-times mt-5">
      <div className="bg-Yellow w-full ml-[10px] mr-[10px] rounded-md p-2 md:pl-[50px] md:pr-[50px] rounded-md">
        {/* hackathon */}
        <div className='w-full ' >
            <span className='flex space-x-4 mb-[10px] '>
                <h1 className='text-lg font-bold'>Hackathons</h1>
                <p className='text-md font-normal bg-Darkblue text-white px-3 px-5 rounded-md cursor-pointer' >View more</p>
            </span>
            <div className='w-full grid grid-cols-3 md:space-x-2 max-sm:grid-cols-1 max-sm:space-y-2'>
        {HackathonData.map((data)=>(
            
            <div className='w-[90%] max-sm:w-[100%] p-2 bg-white rounded-md md:transform md:transition-transform md:duration-500 md:ease-in-out md:hover:scale-105 ' key={data.id}>
                <img src={data.img} className='rounded-md'/>
                <span className='flex justify-between mt-[10px] mb-[10px]'>
                    <h1 className='font-semibold text-Darkblue text-lg'>{data.name}</h1>
                    <p className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-md font-normal rounded-md px-2 p-2 mr-[2px]'>Completed</p>
                </span>
                <p className='text-md font-normal text-justify'>Lorem ipsum dolor sit amet elit id consectetur adipisicing . Quam pariatur thin normal wedow wery  </p>

            </div>
        ))}
        </div>

        </div>

        {/* quiz */}
        <div className='w-full mt-[20px]' >
            <span className='flex space-x-4 mb-[10px] '>
                <h1 className='text-lg font-bold'>Online Quiz</h1>
                <p className='text-md font-normal bg-Darkblue text-white px-3 px-5 rounded-md cursor-pointer' >View more</p>
            </span>
            <div className='w-full grid grid-cols-3 space-x-2 md:space-x-2 max-sm:grid-cols-1 max-sm:space-y-2'>
        {onlinequiz.map((data)=>(
            
            <div className='w-[90%] max-sm:w-[100%] p-2 bg-white rounded-md transform transition-transform duration-500 ease-in-out md:hover:scale-105 ' key={data.id}>
                <img src={data.img} className='rounded-md'/>
                <span className='flex justify-between mt-[10px] mb-[10px]'>
                    <h1 className='font-semibold text-Darkblue text-lg'>{data.name}</h1>
                    <p className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-md font-normal rounded-md px-2 p-2 mr-[2px]'>Completed</p>
                </span>
                <p className='text-md font-normal text-justify'>Lorem ipsum dolor sit amet elit id consectetur adipisicing . Quam pariatur thin normal wedow wery  </p>

            </div>
        ))}
        </div>

        </div>
        {/* aptitude test */}
        <div className='w-full mt-[20px]' >
            <span className='flex space-x-4 mb-[10px] '>
                      <h1 className='text-lg font-bold'>Aptitude Tests</h1>
                      <p className='text-md font-normal bg-Darkblue text-white px-3 px-5 rounded-md cursor-pointer' onClick={()=>setAptitude(true)} >View more</p>
            </span>
            <div className='w-full grid grid-cols-3 space-x-2 md:space-x-2 max-sm:grid-cols-1 max-sm:space-y-2'>
        {Aptitude.map((data)=>(
            
            <div className='w-[90%] max-sm:w-[100%] p-2 bg-white rounded-md transform transition-transform duration-500 ease-in-out md:hover:scale-105 ' key={data.id}>
                <img src={data.img} className='rounded-md'/>
                <span className='flex justify-between mt-[10px] mb-[10px]'>
                    <h1 className='font-semibold text-Darkblue text-lg'>{data.name}</h1>
                    <p className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-md font-normal rounded-md px-2 p-2 mr-[2px]'>Completed</p>
                </span>
                <p className='text-md font-normal text-justify'>Lorem ipsum dolor sit amet elit id consectetur adipisicing . Quam pariatur thin normal wedow wery  </p>

            </div>
        ))}
        </div>
            
        </div>
        <AptitudeGraph isaptitude={isaptitude} onClose={()=>setAptitude(false)} />
        {/* codingskill */}
        <div className='w-full mt-[20px]' >
            <span className='flex space-x-4 mb-[10px] '>
                <h1 className='text-lg font-bold'>Coding Skill</h1>
                <p className='text-md font-normal bg-Darkblue text-white px-3 px-5 rounded-md cursor-pointer' >View more</p>
            </span>
            <div className='w-full grid grid-cols-3 space-x-2 md:space-x-2 max-sm:grid-cols-1 max-sm:space-y-2'>
        {CodingSkill.map((data)=>(
            
            <div className='w-[90%] max-sm:w-[100%] p-2 bg-white rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105 ' key={data.id}>
                <img src={data.img} className='rounded-md'/>
                <span className='flex justify-between mt-[10px] mb-[10px]'>
                    <h1 className='font-semibold text-Darkblue text-lg'>{data.name}</h1>
                    <p className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-md font-normal rounded-md px-2 p-2 mr-[2px]'>Completed</p>
                </span>
                <p className='text-md font-normal text-justify'>Lorem ipsum dolor sit amet elit id consectetur adipisicing . Quam pariatur thin normal wedow wery  </p>

            </div>
        ))}
        </div>

        </div>
        
        

        

    </div>
    </div>
  )
}

export default AnalyticsProfile
