import React from "react";

import SideBarCommunity from "./SideBarCommunity";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoPeopleSharp } from "react-icons/io5";
import profile from "./profile.webp";
function Network() {
    const userData = [
        {
          id: 1,
          profile: profile,
        name:"John Doe",
          profession:"UI/UX designer",
          CollegeName: "College Name",
        },
        {
          id: 2,
         profile:profile, 
        name:"John Doe",
          profession:"UI/UX designer",
          CollegeName: "College Name",
        },
        {
          id: 3,
         profile:profile,
         name:"John Doe",
          profession:"UI/UX designer",
          CollegeName: "College Name",
        },
        {
          id: 4,
         profile:profile,
         name:"John Doe",
          profession:"UI/UX designer",
          CollegeName: "College Name",
        },
        {
          id: 5,
         profile:profile, 
        name:"John Doe",
          profession:"UI/UX designer",
          CollegeName: "College Name",
        },
        {
          id: 6,
         profile:profile,
         name:"John Doe",
          profession:"UI/UX designer",
          CollegeName: "College Name",
        },
        {
          id: 7,
         profile:profile, 
        name:"John Doe",
          profession:"UI/UX designer",
          CollegeName: "College Name",
        },
    ]
  return (
    <div className="bg-[#f7d883] w-full h-full font-times max-sm:w-[100%] xl:pb-[300px]">
      <SideBarCommunity />

      <div className="w-[100%] h-full  ">

        <div className="w-[98%]  ml-2 mt-10 pr-[10px] max-sm:w-[97%] max-sm:ml-[10px]">
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
        {/* people you follow */}
        <div className="ml-2  w-full  grid grid-cols-4 max-sm:grid-cols-1 ">


        {userData.map((user)=>(
              <div key={user.id} className="bg-Darkblue rounded-md flex flex-col mb-[10px] max-sm:place-self-center max-sm:mr-[20px] w-[90%] max-sm:w-[80%] p-2 items-center space-y-4">
              <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit ml-[2px]"/>
              <h1 className="font-bold text-lg text-Yellow">{user.name}</h1>
              <p className="font-thin text-sm text-white">{user.profession}</p>
             
              {/* <p className="font-thin text-sm text-gray-400">{user.CollegeName}</p> */}
              <button className="w-full bg-Yellow border-2 border-Yellow text-DarkBlue rounded-md ">Follow </button>
  
          </div>
        

        ))}
        

        </div>















      </div>
    </div>
  );
}

export default Network;
