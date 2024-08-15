import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LuFiles } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./TeamCodeSetting.css";
import {Link} from "react-router-dom";
import { MdContentCopy } from "react-icons/md";

function TeamCodeSetting({ createTeam, closeCreateTeam }) {
  const [isTeamCreated, setTeamCreated] = useState(false);
  const [teamName,setTeamName]=useState("");
  const handleClick=()=>{
    teamName==""?alert("enter team name"):setTeamCreated(true)
  }
  return (
    <>
      {createTeam ? (
        <div className="overlay">
          <div className="overLay-background">
            <div className="overLay-container">
              <div className=" p-6  rounded-md  ">
                {!isTeamCreated && (
                  <div className="bg-[#ff8eb] space-y-4">
                    <h1 className="font-bold text-lg text-white">
                      Enter your Team Name
                    </h1>
                    <input
                      
                      type="text"
                      placeholder="enter your Team name"
                      className="w-full h-[40px] placeholder-gray-400 p-2 pl-4 rounded-md "
                      onChange={(event)=>setTeamName(event.target.value)}
                    />
                    <div className="flex justify-end">
                      <button
                        className="ring-2 ring-Yellow text-Darkblue bg-Yellow w-[25%] rounded-md  "
                        onClick={() => handleClick()}
                      >
                        create{" "}
                      </button>
                    </div>
                  </div>
                )}

                {isTeamCreated && (
                  <div className=" space-y-2">
                   <div className="flex justify-between">
                    <div>
                      <h1 className="font-bold text-lg text-Yellow">
                        Team Created Successfully{" "}
                      </h1>
                      {teamName && (
                        <h1 className="font-normal text-md text-white">
                        Team Name: {teamName} 
                      </h1>

                      )

                      }
                      
                    </div>
                    {/* <span onClick={closeCreateTeam} className="cursor-pointer">
                      <IoClose size="25" />
                    </span> */}
                    </div>
                    <div className="flex space-x-2 ">
                      {" "}
                      <h1 className="font-normal text-md text-white ">
                        Team Code:{" "}
                      </h1>
                      <div className="flex justify-between items-center border-none ring-2 ring-gray-200 bg-gray-200 text-gray-500 rounded-[30px] w-[50%] h-[20px]">
                      <p >
                        678954 
                      </p>
                      {/* <input type="text" className="w-full h-full border-none ring-2 ring-gray-200 outline-none bg-gray-200 rounded-[30px]" value="67895"/>
                      <span className="pr-[2px] " ><MdContentCopy /></span>
                       */}
                      </div>
                     
                    </div>
                    {/* <p className="text-white">*copy the team code*</p> */}

                    <div className="flex justify-end">
                     <Link to="/SkillCentra/community/colloboration/" className="w-[25%]"> <button
                        className="ring-2 ring-Yellow text-Darkbulue bg-Yellow w-full rounded-md "
                        onClick={closeCreateTeam}
                      >
                        close{" "}
                      </button></Link>
                    </div>
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default TeamCodeSetting;
