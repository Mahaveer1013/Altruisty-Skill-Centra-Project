import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import SideBarCommunity from "./SideBarCommunity";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FcManager } from "react-icons/fc";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import profile from "./profile.webp";
import { MdLeaderboard } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import TeamChat from "./TeamChat";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import "./Teams.css";
import Certificate from "./Certificate";

function Teams() {
    const userNotify = [
        {
          id: 1,
          profile: profile,
          name: "John doe",points:1000

        },
        {
          id: 2,
          profile: profile,
          name: "John doe",points:1000
        },
        {
            id: 3,
            profile: profile,
            name: "John doe",points:1000
          },
          {
            id: 4,
            profile: profile,
            name: "John doe",points:1000
          },
          {
            id: 5,
            profile: profile,
            name: "John doe",points:1000
          },
          {
            id: 6,
            profile: profile,
            name: "John doe",points:1000
          },
          {
            id: 7,
            profile: profile,
            name: "John doe",points:1000
          },
      ];
      const [teamChat,setTeamChat]=useState(false);
      const [certificate,setCertificate]=useState(false);

  return (
    <div className="bg-[#f7d883]  font-times">
      <SideBarCommunity />
      <div className="w-[100%] h-full md:pb-[10px]">
        <div className="w-[98%] h-full ml-2 mt-10 pr-[10px] ">
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

        <div className="w-[98%] h-full ml-[10px] pr-[10px] max-sm:pb-[20px]">
          <div className="w-full h-full bg-white rounded-md border-none ring-2 ring-gray-300 p-4 ">
           
            <div className="flex justify-between mb-[20px] max-sm:w-full items-center ">
              <span className="flex items-center">
                <MdOutlineKeyboardArrowRight />
                <h1 className="text-lg font-normal max-sm:text-md"> Team Name</h1>
            </span>
             
              <p className="max-sm:text-sm max-sm:hidden cursor-pointer" onClick={()=>setCertificate(true)}>Click here to upload your certificates</p>
              <p href="/#" className="md:hidden cursor-pointer" onClick={()=>setCertificate(true)}>upload certificates</p>
            </div>
            <Certificate certificate={certificate} closeCertificate={()=>setCertificate(false)} />

            <span className="flex text-Yellow mb-[20px] space-x-2">
              <FaPeopleGroup size="30" />
              <h2 className="text-lg font-semibold text-black" >Team Members</h2>
            </span>

            <div className="w-full grid grid-cols-4 max-sm:grid-cols-1  ">
              {userNotify.map((user)=>(
                <div key={user.id} className="flex bg-Darkblue p-2 w-[90%] max-sm:w-full rounded-md space-x-2 mb-[10px]">
                <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit"/>
                  <div>
                      <h1 className="font-bold text-xl text-Yellow">{user.name}</h1>
                      <p className="font-normal text-white">Lorem Ipsum dolor si right</p>
                      <a href="" className="underline underline-offset-1 text-Yellow"> view more</a>
                  </div>
    
                </div>

            ))}
            </div>

            <div>
              <div className="flex justify-between mb-[10px]">
                <div className="flex items-center">
              <span className="text-Yellow"><MdLeaderboard size="40"/></span>
              <h1 className="font-bold text-lg ml-[10px]">Leaderboard</h1>
              </div>

            <div className="tooltip ">
              <span className="tooltipText max-sm:hidden">Discuss with your team members</span>
              <span className="mr-[30px] w-[30px] flex items-center justify-center 
              ring-2 ring-Yellow bg-Yellow text-Darkblue rounded-[100%]" 
              onClick={()=>setTeamChat(true)}>
                
                <IoChatbubbleEllipsesOutline size="30"/>
              </span>
            </div>
              </div>

              <TeamChat teamChat={teamChat} closeTeamChat={()=>setTeamChat(!teamChat)}/>
            
              

            
              <div className="">
              {userNotify.map((user)=>(
                <div>
                <div className="flex justify-between mb-[10px] mt-[10px]">
                  <div className="flex space-x-6">
                   <p className="font-semibold text-lg ">{user.id}</p>
                  <div className="flex items-center space-x-4">
                   <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit"/>
                    <h1 className="font-semibold text-lg">{user.name}</h1>
                  </div>
                  </div>
                  <p className="text-Yellow text-lg font-semibol">{user.points} Points</p>

                </div>
                <hr />
                </div>

              ))}
              

        </div>


            </div>
            
           

          </div>
        </div>







      </div>
    </div>
  );
}

export default Teams;
