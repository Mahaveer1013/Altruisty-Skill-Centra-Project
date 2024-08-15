import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LuFiles } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./TeamChat.css";
import { IoIosSend } from "react-icons/io";
import profile from "./profile.webp";
function TeamChat({ teamChat, closeTeamChat }) {
  const [message,setMessage]=useState("");
  const[messageSent,setMessageSent]=useState(false);



  return (
    <>
      {teamChat ? (
        <div className="overlay">
        <div className="overLayChat-background" >
        <div className="overLayChat-container">
        <div className="  p-6 rounded-md ">
          <div className="flex justify-between w-full bg-Yellow rounded-md p-2 mb-[2px]">
            <div className="flex bg-Yellow w-full">
              {/* <CgProfile size="30" /> */}
              <span className="">
                <h1 className="text-lg font-bold text-Darkblue">Lets Chat</h1>
                {/* <p className="text-gray-400">50 mins ago</p> */}
              </span>
            </div>
            <span onClick={closeTeamChat } className="cursor-pointer text-Darkblue">
              <IoClose size="25" />
            </span>
          </div>
          {/* <textarea
            name="comments"
            rows={4}
            cols={30}
            placeholder=""
            className="mb-[20px] outline-none bg-white mt-[10px]"
          ></textarea> */}
          <div className="bg-white text-Darkblue flex flex-col p-2 rounded-md  mb-[10px]  ">
            <div className="mb-[10px] flex">
          <img src={profile} className="rounded-full h-[30px] w-[30px] object-fit mr-[2px]"/>
          <div className="bg-gray-300 w-full p-2 rounded-md"><h1>John Doe</h1>
          <p>lorem ipsum</p></div>
          </div>
          <div className="mb-[10px] flex">
          
          {/* sender message */}
          {messageSent && (
            <>
              <div className="bg-gray-300 w-full p-2 rounded-md flex flex-col justify-end"><h1>John Doe</h1>
              <p>{message}</p></div>
              <img src={profile} className="rounded-full h-[30px] w-[30px] object-fit mr-[2px]"/>
              
            </>

          )}
        
        </div>
          
          </div>
          
          <div className="mt-[10px] flex  justify-between">
            <input type="text" onChange={(event)=>setMessage(event.target.value)} className=" border-none ring-2 ring-gray-200 bg-gray-200 rounded-md" placeholder="type your message here!"/>
            <span className="text-white" onClick={()=>setMessageSent(true)}><IoIosSend size="30" /></span>
          </div>
          
        </div>
        
        
        </div></div></div>
      ) : null}
    </>
  );
}

export default TeamChat;
