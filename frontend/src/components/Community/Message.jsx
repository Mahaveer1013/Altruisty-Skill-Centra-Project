import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoIosArrowRoundBack } from "react-icons/io";


import "./Message.css";
import axios from "axios";
import { IoSearchOutline, IoPeopleSharp, IoClose } from "react-icons/io5";

import "./Message.css";

function Message() {
  const [userInfo, setUserInfo] = useState([]);
  const [userInfo2, setUserInfo2] = useState([]);
  const [singleUser, setSingleUser] = useState("1");
  const [singleUser1, setSingleUser1] = useState("1");
  const [mobileView, setMobileView] = useState(false);
  const [people, setPeople] = useState([]);
  const [addMembers, setAddMembers] = useState([]);
  const [confimMember, setConfirmMember] = useState(false);
  const [message, setMessage] = useState([]);
  const [message1, setMessage1] = useState("");
  const [createGroup, setCreateGroup] = useState(false);

  // Fetch user info from backend
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axios.get("/api/user-info");
        setUserInfo(data);
        setUserInfo2(data); // assuming userInfo2 is same as userInfo
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchUserInfo();
  }, []);

  useEffect(() => {
    setPeople(userInfo.filter((user) => user.id == singleUser));
  }, [singleUser, userInfo]);

  useEffect(() => {
    const addingMembers = userInfo2.filter((user) => user.id == singleUser1);
    setAddMembers([...addMembers, addingMembers]);
  }, [singleUser1, userInfo2]);

  const handleUser = (id) => {
    setSingleUser(id);
    setMobileView(true);
  };

  const handleUserforGroup = (id) => {
    setSingleUser1(id);
  };

  const handleRemoveMember = (memberId) => {
    const removeElements = addMembers.filter((member) => member[0].id !== memberId);
    setAddMembers(removeElements);
  };

  const handleChange = (event) => {
    setMessage1(event.target.value);
  };

  const handleSubmit = async () => {
    if (message1.trim() === "") return;
    try {
      const { data } = await axios.post("/api/send-message", {
        userId: singleUser,
        message: message1,
      });
      setMessage([...message, data.message]);
      setMessage1("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleGroup = () => {
    setCreateGroup(true);
  };

  const handleNone = () => {
    setCreateGroup(false);
  };

  const handleConfirmMember = async () => {
    setCreateGroup(false);
    setConfirmMember(true);
    try {
      await axios.post("/api/create-group", {
        members: addMembers.map(member => member[0].id),
      });
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  return (
    <div className="bg-[#f7d883] font-times h-full w-full max-sm:h-[100%] xl:pb-[300px] pt-4">
      <div className="w-[100%] h-full md:pb-[10px]">
        <div className="w-[98%] ml-2 mt-10 pr-[10px]">
          <div className="w-[100%] flex justify-between space-x-6 sticky">
            <form action="" className="w-[100%]">
              <div className="relative flex items-center text-gray-400 text-lg font-semibold focus-within:text-gray-600">
                <IoSearchOutline size="20" className="absolute pointer-events-none ml-2" />
                <input
                  text="text"
                  name="search"
                  placeholder="search"
                  autoComplete="off"
                  className="w-full h-[50px] px-3 pl-8 py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-[98%] mt-[20px] ml-[10px] pr-[10px] flex md:space-x-6 max-sm:pb-[20px]">
          <div className={`${mobileView ? "max-sm:hidden" : "max-sm:display"} bg-Darkblue p-2 w-1/2 max-sm:w-[98%] max-sm:h-full max-sm:mx-2 rounded-lg`}>
            {createGroup ? (
              <>
                <div className="flex items-center">
                  <span onClick={() => handleNone()} className="cursor-pointer text-white">
                    <IoClose size="25" />
                  </span>
                  <h1 className="text-lg font-semibold m-2 text-white">Add Group Members</h1>
                </div>
                <div className="grid grid-cols-3">
                  {addMembers.map((members, index) => (
                    members[0].name !== "Group Name-1" && (
                      <div key={index} className="flex ring-2 ring-gray-300 p-2 w-fit rounded-[30px] space-x-2 mb-[10px] text-white">
                        <span className=""><IoPeopleSharp size="20" /></span>
                        <p>{members[0].name}</p>
                        <span onClick={() => handleRemoveMember(members[0].id)} className="cursor-pointer">
                          <IoClose size="25" />
                        </span>
                      </div>
                    )
                  ))}
                </div>
                <div className="flex justify-end">
                  <span className="ring-2 ring-Yellow bg-Yellow rounded-full cursor-pointer" onClick={() => handleConfirmMember()}><TiTick size="25" /></span>
                </div>
                <input
                  text="text"
                  name="search"
                  placeholder="search"
                  autoComplete="off"
                  className="w-[98%] m-2 px-3 py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-[30px] border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                />
                {userInfo2.map((user) => (
                  <div key={user.id} className="w-full" onClick={() => handleUserforGroup(user.id)}>
                    <div className="mt-[10px] ml-2 flex space-x-2 mb-[10px]" onClick={() => singleUser1 === 1 ? handleGroup() : handleNone()}>
                      <span className="items-center mt-[5px]">
                        <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit" alt={user.name} />
                      </span>
                      <span>
                        <h1 className="text-lg font-semibold text-Yellow">{user.name}</h1>
                        <p className="text-md font-normal text-white">{user.recentMessage}</p>
                      </span>
                    </div>
                    <hr />
                  </div>
                ))}
              </>
            ) : (
              <>
                <h1 className="text-lg font-semibold m-2 text-white">Messages</h1>
                <input
                  text="text"
                  name="search"
                  placeholder="search"
                  autoComplete="off"
                  className="w-[98%] m-2 px-3 py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-[30px] border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                />
                {userInfo.map((user) => (
                  <div key={user.id} className="w-full hover:rounded" onClick={() => handleUser(user.id)}>
                    <div className="mt-[10px] ml-2 flex space-x-2 mb-[10px] cursor-pointer" onClick={() => singleUser === 1 ? handleGroup() : handleNone()}>
                      <span className={singleUser === 1 ? "items-center mt-[5px] text-Yellow" : "items-center mt-[5px] text-white"}>
                        <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit" alt={user.name} />
                      </span>
                      <span>
                        <h1 className="text-lg font-semibold text-Yellow">{user.name}</h1>
                        <p className="text-md font-normal text-white">{user.recentMessage}</p>
                      </span>
                    </div>
                    <hr />
                  </div>
                ))}
              </>
            )}
          </div>
          <div className={`${mobileView ? "max-sm:display" : "max-sm:hidden"} bg-Yellow rounded-lg max-sm:w-[98%] max-sm:mx-2`}>
            {people.length === 0 ? (
              <h1 className="text-lg font-semibold m-2 text-white">No Messages</h1>
            ) : (
              <>
                <div className="flex justify-between items-center space-x-2 border-b-[1px] border-[#f1be66]">
                  <span onClick={() => setMobileView(false)} className="ml-2 text-Darkblue cursor-pointer">
                    <IoIosArrowRoundBack size="25" />
                  </span>
                  <div className="flex items-center">
                    <span className="items-center mt-[5px]">
                      <img src={people[0].profile} className="rounded-full h-[40px] w-[40px] object-fit" alt={people[0].name} />
                    </span>
                    <h1 className="text-xl font-semibold m-2 text-Darkblue">{people[0].name}</h1>
                  </div>
                  <span className="m-2 ring-2 rounded-full ring-Darkblue">
                    <IoPeopleSharp size="25" className="text-Darkblue" />
                  </span>
                </div>
                <div className="mt-4 mb-4 h-[400px]">
                  {message.map((msg, index) => (
                    <div key={index} className="flex justify-start m-2">
                      <p className="font-semibold text-white bg-Darkblue p-2 rounded-[20px] rounded-tl-none">{msg}</p>
                    </div>
                  ))}
                </div>
                <div className="m-2">
                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="relative flex items-center text-gray-400 text-lg font-semibold focus-within:text-gray-600">
                    <span className="absolute pointer-events-none ml-2">
                      <FaImage size="20" className="text-gray-500" />
                    </span>
                    <input
                      text="text"
                      name="message"
                      placeholder="Type your message"
                      autoComplete="off"
                      className="w-full h-[50px] px-3 pl-8 py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                      value={message1}
                      onChange={handleChange}
                    />
                    <span className="absolute right-2">
                      <button type="submit" className="text-Darkblue">
                        <IoIosSend size="25" />
                      </button>
                    </span>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
