import React,{PureComponent, useState} from "react";
import { CgProfile } from "react-icons/cg";
import { LuFiles } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./MobileNavbar.css";
import {Link} from "react-router-dom"


function MobileNavBar({ isMobileMenuOpen,onClose }) {
  
    const [menu,setMenu]=useState();

  

  return (
    <>

      {isMobileMenuOpen ? (
        <div className="overlay">
        <div className="overLayEdit-background" >
        <div className="overLayEdit-container ">
        <div className=" p-6  rounded-md bg-Darkblue text-white">
          <div className="flex justify-between">
            <div className="flex">
              <span className="">
                <h1 className="text-lg font-bold text-Yellow">Edit Profile</h1>
                {/* <p className="text-gray-400">50 mins ago</p> */}
              </span>
            </div>
            <span onClick={onClose} className="cursor-pointer text-Yellow">
              <IoClose size="25" />
            </span>
          </div>

          <ul className=' mt-[20px] '>
        <Link to="/SkillCentre/profile/"><li className='text-lg text-white font-semibold  pl-2' >Home</li></Link>
        <Link to="/SkillCentre/profile"> <li className={`${menu=="my profile"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  pl-2 mt-6 cursor-pointer`} onClick={()=>setMenu("my profile")}>My profile</li></Link>
        <Link to="/SkillCentre/profile/learnings"><li className={`${menu=="my learnings"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  pl-2  mt-6 cursor-pointer`} onClick={()=>setMenu("my learnings")}>My Learnings</li></Link>
        <Link to="/SkillCentre/profile/certifications"><li className={`${menu=="my certifications"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  mt-6 pl-2  cursor-pointer`} onClick={()=>setMenu("my certifications")}>My Certifications</li></Link>
        <Link to="/SkillCentre/profile/analytics"><li className={`${menu=="my analytics"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  pl-2  mt-6 cursor-pointer`} onClick={()=>setMenu("my analytics")}>Analytics</li></Link>
        <Link to="/SkillCentre/profile/logout"><li className={`${menu=="logout"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  pl-2  cursor-pointer mt-6`} onClick={()=>setMenu("logout")}>Logout</li></Link>
      </ul>





         
        </div>
        
        
        </div></div></div>
      ) : null}
    </>
  );
}

export default MobileNavBar;
