import React, { useState } from 'react'

import SideBarCommunity from "./SideBarCommunity";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import TeamCodeSetting from './TeamCodeSetting';

import profile from "./profile.webp";
function CreateTeam() {
    const userDate=[
        {
        
            id: 1,
            profile: profile,
            name:"John Doe",
            recentMessage: "Tap to add your friends",
          
    },
    {
        
        id: 2,
        profile: profile,
        name:"John Doe",
        recentMessage: "Tap to add your friends",
      
},
{
        
    id: 3,
    profile: profile,
    name:"John Doe",
    recentMessage: "Tap to add your friends",
  
},
{
        
    id: 4,
    profile: profile,
    name:"John Doe",
    recentMessage: "Tap to add your friends",
  
},
{
        
    id: 5,
    profile: profile,
    name:"John Doe",
    recentMessage: "Tap to add your friends",
  
},
{
        
    id: 6,
    profile: profile,
    name:"John Doe",
    recentMessage: "Tap to add your friends",
  
}
]
 const [createTeam,setCreateTeam]=useState(true);

  return (
    <div className="bg-[#f7d883]  font-times max-sm:w-[100%] max-sm:h-full h-full w-full xl:h-screen">
      <SideBarCommunity />
      <div className="w-[100%] h-full md:pb-[20px]">

        <div className="w-[98%]  ml-2 mt-10 pr-[10px] ">
          <div className="w-[100%] flex justify-between space-x-6 sticky ">
            <form action="" className="w-[100%] ">
              <div className="relative flex items-center text-gray-400 text-lg font-semibold focus-within:text-gray-600">
                <IoSearchOutline
                  size="20"
                  className="absolute pointer-events-none ml-2"
                />
                <input
                  text="text"
                  name="search"
                  placeholder="search"
                  autoComplete="off"
                  className="w-full h-[50px] px-3 pl-8 py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-2xl  border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                />
              </div>
            </form>
            <span className="mr-[10px]">
              <CgProfile size="50" />
            </span>
          </div>
        </div>

        <div className='w-[98%]  xl:h-[80%] mt-[20px] ml-[10px] pr-[10px] pl-[10px] flex space-x-6 '>

            <div className="w-full  bg-white rounded pt-[10px] pl-[20px] pr-[10px]
             max-sm:pt-[10px] max-sm:pl-[20px] border-none ring-2 ring-gray-300
               max-sm:mb-[250px] max-sm:justify-between max-sm:pb-[50px]">
                    
                    <h1 className='font-bold text-lg mb-[10px]'>Add Team Members</h1>
                    {userDate.map((user)=>(
                        <>
                         <div className='flex items-center space-x-4' key={user.id}> 
                         <img src={user.profile} className="rounded-full h-[50px] w-[50px] object-fit"/>
                             <div className="">
                             <h1 className='font-semibold text-md'>{user.name}</h1>
                             <p className="fony-semibold text-md text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque qui aliquam consequuntur laborum aut illo! Praesentium
                              alias vel nisi dicta. Reiciendis quae amet, voluptatem enim id perspiciatis quidem quo.</p>
                              </div>
                         </div>
                         <hr />

                         </>
     
     

                    ))}
                    <div className="flex justify-end mt-[10px] mb-[10px]">
                    <button onClick={()=>setCreateTeam(true)} className='ring-2 ring-Yellow border-none bg-Yellow text-Darkblue w-[15%] rounded-[30px]'>Add</button>
                    </div>

                   <TeamCodeSetting createTeam={createTeam} closeCreateTeam={()=>setCreateTeam(!createTeam)}/>


            </div>
       </div>



    </div>
    </div>
  )
}

export default CreateTeam
