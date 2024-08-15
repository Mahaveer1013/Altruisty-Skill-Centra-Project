import React from "react";
import { CgProfile } from "react-icons/cg";
import { LuFiles } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./Comments.css";
import profile from "./profile.webp";
function Comments({ isOpen, onClose }) {
  return (
    <>

      {isOpen ? (
        <div className="overlay">
        <div className="overLayComments-background" >
        <div className="overLayComments-container">
        <div className=" p-6  rounded-md ">
          <div className="flex justify-between">
            <div className="flex">
            <img src={profile} className="rounded-full h-[30px] w-[30px] object-fit ml-[2px]"/>
              <span className="ml-[20px]">
                <h1 className="text-lg font-bold">John Doe</h1>
                {/* <p className="text-gray-400">50 mins ago</p> */}
              </span>
            </div>
            <span onClick={onClose } className="cursor-pointer">
              <IoClose size="25" />
            </span>
          </div>
          <textarea
            name="comments"
            rows={4}
            cols={30}
            placeholder="post your commments"
            className="mb-[20px] outline-none bg-white mt-[10px]"
          ></textarea>
          <hr />
          <div className="mt-[10px] flex justify-between">
            <span>
              <LuFiles size="30" />
            </span>
            <button className="ring-2 ring-Yellow text-lg font-normal text-white bg-Darkblue  w-[100px] h-[30px] rounded-[30px] ">
              Post
            </button>
          </div>
        </div>
        
        
        </div></div></div>
      ) : null}
    </>
  );
}

export default Comments;
