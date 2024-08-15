import React, { useEffect, useState } from "react";
import SideBarCommunity from "./SideBarCommunity";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaUserGroup } from "react-icons/fa6";

import { IoPeopleSharp } from "react-icons/io5";
import { FcManager } from "react-icons/fc";
import profile from "./profile.webp";
import profile2 from "./profile2.jpg"
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoIosArrowRoundBack } from "react-icons/io";


import "./Message.css";
function Message() {
  const userInfo = [
    {
      id: 1,
      profile: profile2,
      name: "Create Group",
      recentMessage: "Tap to add your friends",
    },
    {
      id: 2,
      profile:profile,
      name: "john doe",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 3,
      profile:profile,
      name: "lazy willi",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 4,
      profile:profile,
      name: "windy wazer",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 5,
      profile:profile,
      name: "windy wapper",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 6,
      profile:profile,
      name: "jazz",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 7,
      profile:profile,
      name: "Trump",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    // {
    //   id: 8,
    //   profile:profile,
    //   name: "Daniel",
    //   recentMessage: "You:Hi!its been great connecting with you",
    // },
    // {
    //   id: 9,
    //   profile:profile,
    //   name: "Abhraham",
    //   recentMessage: "You:Hi!its been great connecting with you",
    // },
    // {
    //   id: 10,
    //   profile:profile,
    //   name: "Eliyah",
    //   recentMessage: "You:Hi!its been great connecting with you",
    // },
  ];
  const userInfo2 = [
    {
      id: 1,
      profile: profile2,
      name: "Group Name-1",
      recentMessage: "Tap to add your friends",
    },
    {
      id: 2,
      profile:profile,
      name: "john doe",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 3,
      profile:profile,
      name: "lazy willi",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 4,
      profile:profile,
      name: "windy wazer",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 5,
      profile:profile,
      name: "windy wapper",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 6,
      profile:profile,
      name: "jazz",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    {
      id: 7,
      profile:profile,
      name: "Trump",
      recentMessage: "You:Hi!its been great connecting with you",
    },
    // {
    //   id: 8,
    //   profile:profile,
    //   name: "Daniel",
    //   recentMessage: "You:Hi!its been great connecting with you",
    // },
    // {
    //   id: 9,
    //   profile:profile,
    //   name: "Abhraham",
    //   recentMessage: "You:Hi!its been great connecting with you",
    // },
    // {
    //   id: 10,
    //   profile:profile,
    //   name: "Eliyah",
    //   recentMessage: "You:Hi!its been great connecting with you",
    // },
  ];
  var newDate = new Date();
  let dateTime = new Intl.DateTimeFormat("en-In", {
    dateStyle: "short",
  });
  let curDate = dateTime.format(newDate);

  const [singleUser, setSingleUser] = useState("1");
  const [singleUser1,setSingleUser1]=useState("1");
  const [mobileView,setMobileView]=useState(false);
  const [people, setPeople] = useState([
    {
      id: 1,
      profile: <IoPeopleSharp size="40" />,
      name: "Create Group",
      recentMessage: "Tap to add your friends",
    },
  ]);
  const [addMembers,setAddMembers]=useState([]);

  const [confimMember,setConfirmMember]=useState(false);


  const handleUser = (id) => {
    const currUser = id;
    // console.log(currUser);
    setSingleUser(currUser);
    setMobileView(true);
    
    // const newUser=
    // console.log(newUser[0].id);
    // if(newUser[0].id!=1){setPeople(newUser);}

    // console.log(newUser);
    console.log(people);

    console.log(singleUser);
  };

  // for showing memebers in the messages
  const handleUserforGroup = (id) => {
    const currUser = id;
    // console.log(currUser);
    setSingleUser1(currUser);
    
    // const newUser=
    // console.log(newUser[0].id);
    // if(newUser[0].id!=1){setPeople(newUser);}

    // console.log(newUser);
    console.log(people);

    console.log(singleUser);
  };

  useEffect(() => {
    setPeople(userInfo.filter((user) => user.id == singleUser));
    console.log(people);
  }, [singleUser]);

  // for adding members in the group


  useEffect(()=>{
      const addingMembers=userInfo2.filter((user)=>user.id==singleUser1 )

    setAddMembers( [...addMembers,addingMembers ]);
    console.log(addMembers);
  },[singleUser1]);

  const handleRemoveMember=(memberId)=>{
    console.log("membersID"+memberId);
    const removeElements=addMembers.filter((member)=>member[0].id!==memberId);
    setAddMembers( removeElements );
    console.log(removeElements)
 }
 









const [message,setMessage]=useState(
  []);

const [message1,setMessage1]=useState();
const handleChange=(event)=>{
  setMessage1(event.target.value);

}
const handleSubmit=()=>{
      setMessage([...message, message1]);

}

  const [createGroup,setCreateGroup]=useState(false);
  const handleGroup=()=>{
    console.log("created group");
    setCreateGroup(true);

  }
  const handleNone=()=>{
    console.log("created no group");
    setCreateGroup(false);
  }
  const handleNone2=()=>{
    console.log("no action"); 
  }
  const handleConfirmMember=()=>{
    setCreateGroup(false);
    setConfirmMember(true);
  
  
   }
 

  return (

    <div className="bg-[#f7d883]  font-times h-full w-full max-sm:h-[100%] xl:pb-[300px]">
      <SideBarCommunity />
      {/* Side search bar and message feed */}
      <div className="w-[100%] h-full md:pb-[10px]">
        {/* search bar */}
        <div className="w-[98%]  ml-2 mt-10 pr-[10px] ">
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
        {/* Messages-Middle */}

        <div className="w-[98%]  mt-[20px] ml-[10px] pr-[10px] flex md:space-x-6  max-sm:pb-[20px]">


          {/* AllName */}



          <div className={`${mobileView?" max-sm:hidden ":" max-sm:display "} bg-Darkblue p-2  w-1/2 max-sm:w-[98%] max-sm:h-full max-sm:mx-2 rounded-lg `}>

          {createGroup && (
            <>
           <div className="flex items-center">
           <span onClick={()=>handleNone()} className="cursor-pointer text-white">
              <IoClose size="25" />
            </span>
             <h1 className="text-lg font-semibold m-2 text-white">Add Group Members</h1>

            </div>
            <div className="grid grid-cols-3">
            {addMembers && (addMembers.map((members,index)=>(
              members[0].name!="Group Name-1"?
                <div key={index} className= "flex ring-2 ring-gray-300 p-2 w-fit rounded-[30px] space-x-2 mb-[10px] text-white">
                <span className=""><IoPeopleSharp size="20"/></span>
                <p>{members[0].name}</p>
                <span onClick={()=>handleRemoveMember(members[0].id)} className="cursor-pointer">
              <IoClose size="25" />
            </span>
              </div>:null  


            )))}
           
            
            </div>
            <div className="flex justify-end  ">
            <span className="ring-2 ring-Yellow bg-Yellow rounded-full cursor-pointer" onClick={()=>handleConfirmMember()}><TiTick size="25"/></span>
            </div>
            <input
              text="text"
              name="search"
              placeholder="search"
              autoComplete="off"
              className="w-[98%] m-2 px-3  py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-[30px]  border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />

            {userInfo2.map((user) => (
              <div
                className="w-full  "
                onClick={() => handleUserforGroup(user.id)}
              >
                <div
                  key={user.id}
                  className="mt-[10px] ml-2 flex space-x-2 mb-[10px]  "
                  onClick={()=>singleUser1==1?handleGroup():handleNone2()}
                >
                  <span
                    className={
                      // singleUser == 1
                      //   ? "items-center mt-[5px] text-Yellow"
                         "items-center mt-[5px]"
                    }
                    
                  >
                    <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit"/>
                  </span>
                  <span>
                    <h1 className="text-lg font-semibold text-Yellow">{user.name}</h1>
                    <p className="text-md font-normal text-white">
                      {user.recentMessage}
                    </p>
                  </span>
                </div>
                <hr />
              </div>
            ))}

            </>

          )}

          {!createGroup && (
            <>
            <h1 className="text-lg font-semibold m-2 text-white">Messages</h1>
            <input
              text="text"
              name="search"
              placeholder="search"
              autoComplete="off"
              className="w-[98%] m-2 px-3  py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-[30px]  border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />

            {userInfo.map((user) => (
              <div
                className="w-full hover:rounded "
                onClick={() => handleUser(user.id)}
              >
                <div
                  key={user.id}
                  className="mt-[10px] ml-2 flex space-x-2 mb-[10px] cursor-pointer"
                  onClick={()=>singleUser==1?handleGroup():handleNone()}
                >
                  <span
                    className={
                      singleUser == 1
                        ? "items-center mt-[5px] text-Yellow"
                        : "items-center mt-[5px] text-white"
                    }
                    
                  >
                    <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit"/>
                  </span>
                  <span>
                    <h1 className="text-lg font-semibold text-Yellow">{user.name}</h1>
                    <p className="text-md font-normal text-white">
                      {user.recentMessage}
                    </p>
                  </span>
                </div>
                <hr />
              </div>
            ))}
</>


          )}

            


          </div>

          {/* Single-Name */}
          <div className={` ${mobileView?" max-sm:display ":" max-sm:hidden "}bg-Darkblue p-2  w-1/2 max-sm:w-[98%]  max-sm:h-full  rounded-lg border-none`}>
            {/* <h1 className="text-lg font-semibold m-2">JohnDoe</h1> */}
            <span className="md:hidden" onClick={()=>setMobileView(false)}><IoIosArrowRoundBack /></span>
            {people[0].id == 1 ? (
              <div className="h-full w-full flex flex-col justify-center items-center">
                <span className="text-Yellow">
                  <IoPeopleSharp size="100" />
                </span>
                <h1 className="text-xl font-bold text-white ">
                  Collaborate to learn effectively
                </h1>
                <p className="text-gray-400 font-semibold text-lg text-white">
                  Invite your friends to join this community
                </p>
              </div>
            ) : (
              <div className="h-full w-full relative">
                <div>
                  <div className="mt-[10px] ml-2 flex space-x-2 mb-[10px] ">
                    <img src={profile} className="rounded-full h-[30px] w-[30px] object-fit"/>
                    <span>
                      <h1 className="text-lg font-semibold text-Yellow">
                        {people[0].name}
                      </h1>
                      <p className="text-md font-normal text-White ">
                        30 min ago
                      </p>
                    </span>
                  </div>
                  <hr />
                  {/* Date */}
                  <div className="flex justify-center  mt-[10px] max-sm:w-full ">
                    <p className="text-center bg-white md:w-[20%] rounded-md  ">
                      2 Aug 2024
                    </p>
                  </div>
                </div>
                {/* Messages */}
                
                
                    {/* Sender */}
                  <div className="messaging">
                   <div className="w-[90%] flex  mt-[10px]">
                     <img src={profile} className="rounded-full h-[30px] w-[30px] object-fit"/>
                    <div className="ml-[10px] p-2 w-full text-justify ">
                         <p className="bg-white p-2 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Eius doloribus sunt ducimus eaque cum quod quisquam officia non quaerat, 
                           in esse doloremque dolorem fuga enim odit excepturi quibusdam ex velit.</p>
                     </div>
                   </div> 

                   {/* Receiver */}
                   <div className="messaging2">
                   {message.map((msg)=>(
                       <div className="w-[90%] flex h-full mt-[10px]">
                      
                      <div className="ml-[10px] p-2 w-full text-justify ">
                           <p className="bg-Yellow text-Darkblue text-right p-2 rounded-md">{msg}</p>
                       </div>
                       <img src={profile} className="rounded-full h-[30px] w-[30px] object-fit"/>
                     </div> 
                   ))}
                   </div>
                  </div>
                  
                   
                  


                

                {/* down send button */}
                  <div className="absolute bottom-[10px] w-full max-sm:bottom-[10px]">
                  <div className="w-[100%] flex justify-between space-x-6 mt-[40px] relative  ">
                    <form action="" className="w-[100%] " >
                      <div className="relative flex items-center text-gray-400 text-lg font-semibold focus-within:text-gray-600">
                        {/* <IoSearchOutline size="20" className="absolute pointer-events-none ml-2"/> */}
                        <input
                          text="text"
                          name="search"
                          placeholder="Start Posting"
                          autoComplete="off"
                          className="w-full h-[50px] px-3 pl-8 py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-2xl shadow-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                          onChange={(event)=>handleChange(event)}
                        />
                        <FaImage
                          size="40"
                          className="absolute right-[10px] ml-2"
                        />
                      </div>
                    </form>
                    <span onClick={()=>handleSubmit()} className="text-white">
                      <IoIosSend size="40" />
                      </span>
                    
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
