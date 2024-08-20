import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsStackOverflow } from "react-icons/bs";
import premiumFooter from "../../Images/premiumFooter.png";
import syllabus from "./AdvSyllabus.json";

const Premium = () => {
  const [selectedTab, setSelectedTab] = useState("Syllabus");
  const [expandedDay, setExpandedDay] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleDay = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Syllabus":
        return (
          <div className="space-y-4">
            {/* Render each day using map */}
            {syllabus.days.map((dayData) => (
              <div key={dayData.day}>
                <div
                  onClick={() => toggleDay(dayData.day)}
                  className="cursor-pointer bg-[#D9D9D966] rounded-md border-[0.1px] text-lg border-gray- p-4 rounded-t-lg"
                >
                  {dayData.title}
                </div>
                <div
                  className={`overflow-hidden duration-500 ${
                    expandedDay === dayData.day ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {/* Render modules */}
                  <div className="p-4 bg-gray-100 md:mx-14 mx-2 my-4">
                    {dayData.modules.map((module, index) => (
                      <p
                        key={index}
                        className="text-lg p-4 bg-[#D9D9D966] rounded-md my-1"
                      >
                        {module}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "Daily Tasks":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Daily Tasks</h2>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-2xl">Day 1</h3>

              <h1 className="text-2xl my-4">Task Description</h1>
              <div className="w-[90%] mx-auto h-fit py-7 bg-[#17212E] rounded-md">
                <div className="px-4 ">
                  <h1 className="text-2xl text-[#F5CF6B] font-bold">
                    Question
                  </h1>
                </div>
                <p className="text-justify px-10 pt-6 text-xl font-medium text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  iaculis l aoreet leo a rutrum. Ut efficitur dapibus elit,
                  pellentesque mattis diam ltrices in. Vestibulum ullamcorper
                  mattis lorem vel maximus. Maecenas i n lacinia elit, vel
                  rhoncus felis. In eleifend faucibus venenatis. uis at egestas
                  tortor. Ut et enim laoreet, venenatis risus.
                </p>
              </div>
              <div className="my-14">
                <label className="block mb-2 text-2xl">Your Submission</label>
                <input
                  type="text"
                  placeholder="Upload a link of your task"
                  className="border p-2 w-full"
                />
              </div>
            </div>
            {/* Add more daily tasks content here */}
          </div>
        );
      case "Ask Mentor":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Ask Mentor</h2>
            <div className="p-4 bg-gray-100 rounded-lg w-[80%] max-h-screen mx-auto">
              <h1 className="text-4xl text-center">Ask Your Doubts</h1>
              <div className="my-6 flex flex-col">
                <label htmlFor="email" className="text-2xl font-semibold mx-7">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-[80%] mx-7 rounded-md border-[1px] border-slate-600 mt-5"
                />
              </div>
              <div className="my-6 flex flex-col">
                <label htmlFor="email" className="text-2xl font-semibold mx-7">
                  Your Query
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-[80%] h-48 mx-7 rounded-md border-[1px] border-slate-600 mt-5 "
                />
              </div>
              <div className="text-center">
                <button className="text-white text-xl text-center bg-[#17212E] rounded-md px-3 py-1">
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      case "Tech Stacks":
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Tech Stacks Used</h2>
            <div className="p-4 bg-gray-100 rounded-lg space-y-2">
              <div>
                <h3 className="font-semibold">Angular JS, React</h3>
                <a href="/path/to/download" className="text-blue-500">
                  Download from here
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Mongo DB, Ruby</h3>
                <a href="/path/to/download" className="text-blue-500">
                  Download from here
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Visual Studio</h3>
                <a href="/path/to/download" className="text-blue-500">
                  Download from here
                </a>
              </div>
              {/* Add more tech stacks content here */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="md:container mx-auto overflow-x-hidden overflow-y-hidden">
      <div className="bg-[#FFFBEF] p-4 rounded-lg mb-4">
        <h1 className="text-2xl font-bold mb-2 py-5 text">
          Full Stack Development
        </h1>
        <div className="flex flex-row">
          <div className="w-[80%] h-80 mx-auto bg-[#17212E] rounded-lg ">
            <div className=" flex justify-center align-middle items-center">
              {isPlaying ? (
                <div className="p-3 bg-yellow-400 rounded-full mt-32">
                  <FaPause
                    onClick={togglePlay}
                    className="text-black text-2xl"
                  />
                </div>
              ) : (
                <div className="p-3 bg-yellow-400 rounded-full mt-32">
                  <FaPlay
                    onClick={togglePlay}
                    className=" text-black text-2xl"
                  />
                </div>
              )}
            </div>

            {/* video title */}
            <div className="ml-4 mt-8">
              <h1 className="text-2xl font-semibold text-white">Module 1:</h1>
              <h1 className="text-xl font-semibold text-white">Introduction</h1>
            </div>
          </div>
        </div>
        <p className="text-blue-500 my-6">
          <span className="text-2xl text-[#17212E] font-bold">
            Your Live Link:{" "}
          </span>
          <a
            href="https://meet.google.com/vau-jklm-klm"
            className="decoration underline text-xl"
          >
            https://meet.google.com/vau-jklm-klm
          </a>
        </p>

        {/* Tabs "Syllabus, DailyTasks, AskMentor, TechStacks*/}
        <div className="">
          <div className="flex md:space-x-10 mb-4 flex-row justify-center space-x-4">
            <div>
              <button
                onClick={() => setSelectedTab("Syllabus")}
                className={`p-2 rounded flex flex-row items-center ${
                  selectedTab === "Syllabus"
                    ? "bg-[#17212E] text-[#F5CF6B] font-semibold"
                    : "bg-white"
                }`}
              >
                <FaClipboardList className="text-[#F5CF6B] align-middle mr-3" />{" "}
                Syllabus
              </button>
            </div>
            <button
              onClick={() => setSelectedTab("Daily Tasks")}
              className={`p-2 rounded flex flex-row items-center ${
                selectedTab === "Daily Tasks"
                  ? "bg-[#17212E] text-[#F5CF6B] font-semibold"
                  : "bg-white"
              }`}
            >
              <FaTasks className="text-[#F5CF6B] align-middle mr-3" /> Daily
              Tasks
            </button>
            <button
              onClick={() => setSelectedTab("Ask Mentor")}
              className={`p-2 rounded flex flex-row items-center ${
                selectedTab === "Ask Mentor"
                  ? "bg-[#17212E] text-[#F5CF6B] font-semibold"
                  : "bg-white"
              }`}
            >
              <IoChatbubbleEllipsesOutline className="text-[#F5CF6B] align-middle mr-3 font-bold" />
              Ask Mentor
            </button>
            <button
              onClick={() => setSelectedTab("Tech Stacks")}
              className={`p-2 rounded flex flex-row items-center ${
                selectedTab === "Tech Stacks"
                  ? "bg-[#17212E] text-[#F5CF6B] font-semibold"
                  : "bg-white"
              }`}
            >
              <BsStackOverflow className="text-[#F5CF6B] align-middle mr-3 font-bold" />{" "}
              Tech Stacks
            </button>
          </div>
        </div>
        {renderContent()}

        {/* Footer Component */}
        <div className="bg-[#17212E] h-fit w-full flex flex-row justify-between mt-12">
          <div className="flex flex-col justify-center items-center mx-12">
            <h1 className="md:text-6xl text-white">We value your feedbacks</h1>
            <input type="text" className="mt-9 w-3/4 h-12" />
            <button className="text-[#17212E] bg-[#F5CF6B] mt-9 px-4 py-2 rounded-md font-bold">
              Submit
            </button>
          </div>
          <div>
            <img src={premiumFooter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
