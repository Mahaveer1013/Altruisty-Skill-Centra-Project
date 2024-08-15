import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LuFiles } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./Certificate.css";
import { IoIosSend } from "react-icons/io";
import profile from "./profile.webp";
import { FaUpload } from "react-icons/fa6";

function Certificate({ certificate, closeCertificate }) {
  const [message,setMessage]=useState("");
  const[messageSent,setMessageSent]=useState(false);



  return (
    <>
      {certificate ? (
        <div className="overlay">
        <div className="overLayCertificate-background" >
        <div className="overLayCertificate-container">
        <div className="  p-6 rounded-md ">
          <div className="flex justify-between w-full  rounded-md p-2 mb-[2px]">
            <div className="flex  w-full">
              {/* <CgProfile size="30" /> */}
              <span className="">
                <h1 className="text-lg font-bold text-Darkblue">Upload Certificate</h1>
                {/* <p className="text-gray-400">50 mins ago</p> */}
              </span>
            </div>
            <span onClick={closeCertificate } className="cursor-pointer text-Darkblue">
              <IoClose size="25" />
            </span>
          </div>

          <div className="w-full h-full flex flex-col items-center">
          <div className="w-full h-full space-y-[10px] flex flex-col items-center">
            <span className="text-Yellow  "><FaUpload size="40"/></span>
            <input type="file" />
        </div>
            <p>upload your file to climb the Leaderboard</p>
          </div>

          


          </div></div></div></div>
      ) : null}
    </>
  );
}

export default Certificate;
