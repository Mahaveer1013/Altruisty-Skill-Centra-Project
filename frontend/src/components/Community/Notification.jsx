import React from "react";
import SideBarCommunity from "./SideBarCommunity";

import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FcManager } from "react-icons/fc";
import profile from "./profile.webp";
function Notification() {
  const userNotify = [
    {
      id: 1,
      profile:profile,
      name: "John doe",
    },
    {
      id: 2,
      profile:profile,
      name: "John doe",
    },
    {
        id: 3,
        profile:profile,
        name: "John doe",
      },
      {
        id: 4,
        profile:profile,
        name: "John doe",
      },
      {
        id: 5,
        profile:profile,
        name: "John doe",
      },
      {
        id: 6,
        profile:profile,
        name: "John doe",
      },
      {
        id: 7,
        profile:profile,
        name: "John doe",
      },
  ];
  return (
    <div className="bg-[#f7d883]  font-times">
      <SideBarCommunity />
      <div className="w-[100%] h-full md:pb-[20px]">
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
        {/* collab */}
        <div className="w-[98%] h-full mt-[20px] ml-[10px] pr-[10px] flex ">
          <div className="w-full h-full bg-white rounded pt-[10px] pl-[20px] pr-[20px] border-none ring-2 ring-gray-300 ">
            {/* side writings */}

            {userNotify.map((user) => (
            <div className="mb-[10px]">
              <div className="flex mb-[20px]" key={user.id} >
                 <img src={user.profile} className="rounded-full h-[30px] w-[40px] object-fit mr-[5px]"/>
                <div className="">
                <h1 className="text-lg font-bold ">{user.name}</h1>
                <p className="text-gray-400 text-lg font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis doloremque nobis nihil facilis corrupti provident
                  molestiae dolor tenetur, sint magnam saepe accusantium
                  perspiciatis eaque harum. Assumenda ipsa molestiae dicta
                  laboriosam?
                </p>
                
                </div>
                
              </div>
              <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
