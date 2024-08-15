import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./logoo.jpg";


import "./SideBarCommunity.css";
import { Link } from "react-router-dom";
function SideBarCommunity() {
  const [toggle,setToggle]=useState(false);


  console.log(toggle);
  return (
    <div className={`${toggle?"  ":" max-sm:h-[160px] max-sm:w-full "}  w-full h-[80px]  relative bg-white text-[#f5cf6b] fixed  
                  flex flex-row items-center justify-between pb-[10px] max-sm:w-full max-sm:h-[90px]
                  max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-between `}>

      {/* <div className="md:mt-10">
        <CiGlobe size="40" />
      </div> */}
      <div className="md:mt-10"><img
        src={logo}
        alt="logo"
        className="h-[80px] w-[120px] "
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "1000",
          overflow: "hidden",
          margin: "0px"
        }}
      /></div>

      <div className="sticky2 max-sm:w-full  mt-[20px]">
        <ul className="  cursor-pointer text-Darkblue
                       max-sm:flex max-sm:flex-col max-sm:items-end max-sm:relative">

          <li className="text-Yellow md:hidden  " onClick={()=>setToggle(!toggle)}><GiHamburgerMenu size="40"/></li>

        <div className={`${toggle ?" hidden ":" block bg-white w-full "}
                           max-sm:flex max-sm:flex-row 
                           max-sm:absolute max-sm:top-[60px]  flex flex-row space-x-[20px] max-sm:justify-center`}>

          <li className={`${toggle ?" hidden ":" block "}hover:text-[#f5cf6b] md:mb-[10px]`}>
           <Link to="/"><AiFillHome size="40" /></Link>
          </li>
          <li className={`${toggle ?" hidden ":" block "}hover:text-[#f5cf6b] md:mb-[10px] `} >
          <Link to="/SkillCentra/community/netwrok"><IoPeopleSharp size="40"/></Link>
          </li>
          <li className={`${toggle ?" hidden ":" block "}hover:text-[#f5cf6b] md:mb-[10px] `}>
          <Link to="/SkillCentra/community/messages/"> <AiOutlineMessage size="40"/></Link>
          </li>
          <li className={`${toggle ?" hidden ":" block "}hover:text-[#f5cf6b] md:mb-[10px] `}>
          <Link to="/SkillCentra/community/colloboration/"><FaPeopleGroup size="40"/></Link>
          </li>
          <li className={`${toggle ?" hidden ":" block "}hover:text-[#f5cf6b]  `}> 
          <Link to="/SkillCentra/community/notification/"><IoNotifications size="40"/></Link>
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideBarCommunity;
