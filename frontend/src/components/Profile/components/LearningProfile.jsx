import React, { useState,useEffect } from "react";
import assigned1 from "../assets/assigned_1.png";
import { FaRegClock } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

import Aos from "aos";
import "aos/dist/aos.css";

function LearningProfile() {
  const [inProgress,setInProgress]=useState(true);
  const [completed,setCompleted]=useState(false);
  const handleProgress=()=>{
    setInProgress(true);
    setCompleted(false);
  }
  const handleCompleted=()=>{
    setInProgress(false);
    setCompleted(true);

  }
  
useEffect(() => {
  Aos.init();
}, []);
  return (
    <div className="w-full h-full flex font-times mt-5">
      <div className="bg-Yellow w-full ml-[10px] mr-[10px] rounded-md p-2 md:pl-[50px] md:pr-[50px] rounded-md">
        <div className=" flex space-x-[100px]">
          <span>
          <p className="text-lg font-bold text-Darkblue cursor-pointer" onClick={()=>{handleProgress()}}>Inprogress</p>
          <hr className={`${inProgress?" block ":" hidden "} h-1 bg-Darkblue border-1 border-Darkblue rounded-md  flex justify-center`} />
          </span>
          <span>
            <p className="text-lg font-bold text-Darkblue cursor-pointer" onClick={()=>{handleCompleted()}}>Completed</p>
            <hr className={`${completed?" block ":" hidden "} h-1 bg-Darkblue border-1 border-Darkblue rounded-md  flex justify-center`} />
          </span>
        </div>
       

        {inProgress && (
          <>
          <div className="mt-[20px] w-full bg-Darkblue p-2 text-white rounded-md" data-aos="fade-right">
          <div className="flex h-full max-sm:flex-col max-sm:w-full">
            <img
              src={assigned1}
              className="h-[150px] w-[25%] rounded-md mr-[10px] max-sm:w-full"
            />
            <div>
              <h1 className="text-center text-Yellow text-lg font-bold">
                Introduction To Web Development
              </h1>
              <p className="text-justify text-white text-md font-normal">
                Web development is the process of building, programming, and
                maintaining websites and web applications. Website developers
                use various programming languages, like HTML, CSS, and
                JavaScript, to develop websites and web applications.
              </p>
              <div className="flex md:space-x-6 mt-[10px] max-sm:flex-wrap max-sm:space-x-2">
                <p className="text-Yellow">Intermediate</p>
                <span className="flex items-center space-x-[2px] text-Yellow">
                  <FaRegClock />
                  <p>5 hours</p>
                </span>
                <span className="flex items-center space-x-[2px] text-Yellow">
                  <FaPlay />
                  <p>11 lessons</p>
                </span>
                <div className="flex items-center border border-white h-[5px] w-[150px] rounded-md mt-[10px]">
                  <div className="h-[5px] w-[100px] border border border-yellow bg-Yellow rounded-[30px]"></div>
                </div>
                <p>65%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[20px] w-full bg-Darkblue p-2 text-white rounded-md" data-aos="fade-right">
          <div className="flex h-full max-sm:flex-col max-sm:w-full">
            <img
              src={assigned1}
              className="h-[150px] w-[25%] rounded-md mr-[10px] max-sm:w-full"
            />
            <div>
              <h1 className="text-center text-Yellow text-lg font-bold">
                Introduction To AI&ML
              </h1>
              <p className="text-justify text-white text-md font-normal">
                AIML, or Artificial Intelligence Markup Language, is an
                XML-based language used by computers to communicate with humans.
                AIML was developed by Dr. Richard Wallace in 1995 and has been
                used by a number of companies and organizations
              </p>
              <div className="flex md:space-x-6 mt-[10px] max-sm:flex-wrap max-sm:space-x-2">
                <p className="text-Yellow">Intermediate</p>
                <span className="flex items-center space-x-[2px] text-Yellow">
                  <FaRegClock />
                  <p>5 hours</p>
                </span>
                <span className="flex items-center space-x-[2px] text-Yellow">
                  <FaPlay />
                  <p>11 lessons</p>
                </span>
                <div className="flex items-center border border-white h-[5px] w-[150px] rounded-md mt-[10px]">
                  <div className="h-[5px] w-[100px] border border border-yellow bg-Yellow rounded-[30px]"></div>
                </div>
                <p>65%</p>
              </div>
            </div>
          </div>
        </div>
        </>

        )}
         {completed && (
          <>
          <div className="mt-[20px] w-full bg-Darkblue p-2 text-white rounded-md" data-aos="fade-left" data-aos-duration="2000">
          <div className="flex h-full max-sm:flex-col max-sm:w-full">
            <img
              src={assigned1}
              className="h-[150px] w-[25%] rounded-md mr-[10px] max-sm:w-full"
            />
            <div>
              <h1 className="text-center text-Yellow text-lg font-bold">
                Introduction To Web Development
              </h1>
              <p className="text-justify text-white text-md font-normal">
                Web development is the process of building, programming, and
                maintaining websites and web applications. Website developers
                use various programming languages, like HTML, CSS, and
                JavaScript, to develop websites and web applications.
              </p>
              <div className="flex space-x-6 mt-[10px] max-sm:flex-wrap max-sm:space-x-2">
                <p className="text-Yellow">Intermediate</p>
                <span className="flex items-center space-x-[2px] text-Yellow">
                  <FaRegClock />
                  <p>5 hours</p>
                </span>
                <span className="flex items-center space-x-[2px] text-Yellow">
                  <FaPlay />
                  <p>11 lessons</p>
                </span>
                {/* <div className="flex items-center border border-white h-[5px] w-[150px] rounded-md mt-[10px]">
                  <div className="h-[5px] w-[100px] border border border-yellow bg-Yellow rounded-[30px]"></div>
                </div>
                <p>65%</p> */}
                <button className="ring-2 ring-Yellow text-Darkblue text-lg font-semibold bg-Yellow rounded-md w-[25%] flex items-center justify-center max-sm:w-[50%]">Certificate <FaDownload /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[20px] w-full bg-Darkblue p-2 text-white rounded-md" data-aos="fade-left" data-aos-duration="2000">
          <div className="flex h-full max-sm:flex-col max-sm:w-full">
            <img
              src={assigned1}
              className="h-[150px] w-[25%] rounded-md mr-[10px] max-sm:w-full"
            />
            <div>
              <h1 className="text-center text-Yellow text-lg font-bold">
                Introduction To AI&ML
              </h1>
              <p className="text-justify text-white text-md font-normal">
                AIML, or Artificial Intelligence Markup Language, is an
                XML-based language used by computers to communicate with humans.
                AIML was developed by Dr. Richard Wallace in 1995 and has been
                used by a number of companies and organizations
              </p>
              <div className="flex space-x-6 mt-[10px] max-sm:flex-wrap max-sm:space-x-2">
                <p className="text-Yellow">Intermediate</p>
                <span className="flex items-center space-x-[2px] text-Yellow">
                  <FaRegClock />
                  <p className="text-Yellow">5 hours</p>
                </span>
                <span className="flex items-center space-x-[2px] text-Yellow">
                  <FaPlay />
                  <p className="text-Yellow">11 lessons</p>
                </span>
                {/* <div className="flex items-center border border-white h-[5px] w-[150px] rounded-md mt-[10px]">
                  <div className="h-[5px] w-[100px] border border border-yellow bg-Yellow rounded-[30px]"></div>
                </div>
                <p>65%</p> */}
                <button className="ring-2 ring-Yellow text-Darkblue text-lg font-semibold bg-Yellow rounded-md w-[25%] flex items-center justify-center max-sm:w-[50%]">Certificate <FaDownload /></button>
              </div>
            </div>
          </div>
        </div>
        </>

        )}
       

        
      
      </div>
    </div>
  );
}

export default LearningProfile;
