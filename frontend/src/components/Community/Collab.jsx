import React from 'react'
import SideBarCommunity from "./SideBarCommunity";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import collab from "./colloborate.webp";
import {Link } from "react-router-dom"
function Collab() {
  return (
    <div className="bg-[#f7d883]  font-times max-sm:w-[100%] max-sm:h-full h-full w-full xl:pb[600px]">
      <SideBarCommunity />
      <div className="w-[100%] h-full md:pb-[10px]">

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
            {/* <span className="mr-[10px]">
              <CgProfile size="50" />
            </span> */}
          </div>
        </div>

        {/* collab */}
        <div className='w-[98%]  xl:h-[80%] mt-[20px] ml-[10px] pr-[10px] flex space-x-6'>

          <div className="w-full  bg-white rounded pt-[50px] pl-[20px] max-sm:pt-[10px] max-sm:pl-[20px] border-none ring-2 ring-gray-300 flex max-sm:mb-[10px] max-sm:justify-between max-sm:pb-[50px]">
            {/* side writings */}
            <div className="w-1/2 md:pt-[50px] md:pl-[30px]  max-sm:w-[100%]">
              <h1 className="font-bold text-4xl max-sm:text-lg text-Yellow">Collaborate with your team to learn</h1>
              <p className="text-Darkblue mt-[10px] text-2xl max-sm:text-lg font-semibold max-sm:font-normal">Join,Collaborate and Achieve Together</p>
              {/* Create a team */}
              <div className=' max-sm:w-[80%] md:hidden'>
                 <img src={collab} />
                </div>
              <div className='space-x-4 mt-[100px] max-sm:space-y-4 max-sm:space-x-0 max-sm:w-[90%]'>
               <Link to="/SkillCentra/community/colloboration/createTeams">  <button className='ring-2 ring-Yellow bg-Yellow text-Darkblue  
                font-normal text-lg rounded-sm cursor-pointer  px-4 max-sm:w-full '>Create a Team</button></Link>
                  <p className='md:hidden'>Or</p>
                <input
                  type="text"
                  placeholder="Enter a team code to join"
                  className='p-2 placeholder-gray-400 ring-2 ring-Yellow w-[35%] 
                  focus:outline-none text-Darkblue focus:ring-2 focus:ring-Yellow 
                  h-[35px] rounded-md max-sm:w-[100%]' />

                 <Link to="/SkillCentra/community/colloboration/teams">
                  <button className='ring-2 ring-Yellow bg-Yellow text-Darkblue  font-normal 
                  text-lg rounded-sm cursor-pointer px-4  max-sm:mt-[20px] max-sm:w-full'>Join</button>
                  </Link>


              </div>
            </div>
            {/* side image */}
            <div className='w-1/2 max-sm:w-[20%] max-sm:hidden'>
              <img src={collab} />
            </div>


          </div>


        </div>

      </div>
    </div>
  )
}

export default Collab
