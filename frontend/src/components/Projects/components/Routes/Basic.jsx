import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import syllabusData from "./syllabus.json";

const Basic = () => {
  const [visibleDay, setVisibleDay] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [syllabus, setSyllabus] = useState([]);

  useEffect(() => {
    // Load syllabus data
    setSyllabus(syllabusData.days);
  }, []);

  const toggleDay = (day) => {
    setVisibleDay(visibleDay === day ? null : day);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Day Header and Course title */}
      <div>
        <div className="bg-[#17212E] mt-7 w-max rounded-r-full p-2 md:p-5 cursor-pointer text-black align-center align-middle pr-5 md:pr-12 mt-2 md:mt-4">
          <h1 className="text-white font-semibold md:font-bold text-lg md:text-2xl">
            Full Stack
          </h1>
        </div>
        <div className="flex justify-center mb-10">
          <h1 className="text-4xl font-bold underline decoration-[#f5cf6b] underline-offset-8">
            WEEK 1
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-4 bg-[#FFFBEF]">
        {/* Header and description */}
        <div className="bg-[#17212E] text-white p-4 rounded">
          <h2 className="text-xl font-semibold mb-2 text-[#f5cf6b]">
            <span className="text-2xl">Day 1</span> is all about introduction!
            You will be learning about:
          </h2>
          <p className="text-justify font-semibold text-lg my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            iaculis laoreet leo a rutrum. Ut efficitur dapibus elit,
            pellentesque mattis diam tristique in. Vestibulum ullamcorper mattis
            lorem vel maximus. Maecenas in lacinia elit, vel rhoncus felis.
          </p>
        </div>

        {/* Syllabus Header */}
        <div className="bg-[#f5cf6b] w-max rounded-r-full p-2 md:p-5 cursor-pointer my-7 text-black align-center align-middle pr-5 md:pr-12 mt-2 md:mt-4">
          <h1 className="text-black font-semibold md:font-bold text-lg md:text-2xl">
            Syllabus
          </h1>
        </div>

        {/* Days 1 - 7 */}
        {syllabus.map((dayData) => (
          <div
            key={dayData.day}
            className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md"
          >
            <button
              onClick={() => toggleDay(dayData.day)}
              className="w-full text-left font-semibold text-gray-800"
            >
              Day {dayData.day}
            </button>
            {visibleDay === dayData.day && (
              <div className="mt-2">
                <div className="bg-gray-200 p-2 rounded-lg mb-2">
                  {dayData.modules.map((module, index) => (
                    <div
                      key={index}
                      className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md"
                    >
                      {module.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Video Section */}
        <div className="my-20">
          {/* Video Title */}
          <div className="bg-[#f5cf6b] w-max rounded-r-full p-2 md:p-5 cursor-pointer my-7 text-black align-center align-middle pr-5 md:pr-12 mt-2 md:mt-4">
            <h1 className="text-black font-semibold md:font-bold text-lg md:text-2xl">
              Video
            </h1>
          </div>

          {/* Video Box */}
          <div className="flex flex-row">
            <button aria-label="Previous video">
              <IoIosArrowBack size={36} />
            </button>
            <div className="w-[80%] h-80 mx-auto bg-[#17212E] rounded-lg">
              <div className="flex justify-center align-middle items-center">
                {isPlaying ? (
                  <div className="p-3 bg-yellow-400 rounded-full mt-32">
                    <FaPause
                      onClick={togglePlay}
                      className="text-black text-2xl"
                      aria-label="Pause"
                    />
                  </div>
                ) : (
                  <div className="p-3 bg-yellow-400 rounded-full mt-32">
                    <FaPlay
                      onClick={togglePlay}
                      className="text-black text-2xl"
                      aria-label="Play"
                    />
                  </div>
                )}
              </div>

              {/* Video Title */}
              <div className="ml-4 mt-8">
                <h1 className="text-2xl font-semibold text-white">Module 1:</h1>
                <h1 className="text-xl font-semibold text-white">
                  Introduction
                </h1>
              </div>
            </div>
            <button aria-label="Next video">
              <IoIosArrowForward size={36} />
            </button>
          </div>
        </div>

        {/* Task Section */}
        <div className={`${isLocked ? "opacity-70" : ""}`}>
          <div className="bg-[#F5CF6B] w-max rounded-r-full p-2 md:p-5 cursor-pointer my-7 text-black align-center pr-5 md:pr-12 mt-2 md:mt-4 align-middle">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-black font-semibold md:font-bold text-lg md:text-2xl">
                Task
              </h1>
              <FaLock
                onClick={() => setIsLocked(!isLocked)}
                className="ml-8 mt-1 text-xl cursor-pointer"
                aria-label="Toggle task lock"
              />
            </div>
          </div>

          {/* Task Box */}
          <div className="w-[90%] mx-auto h-fit p-7 bg-[#17212E] rounded-md md:mt-28">
            <div className="px-4">
              <h1 className="text-2xl text-[#F5CF6B] font-bold">Question</h1>
            </div>
            <p className="text-justify md:px-10 pt-6 text-xl font-medium text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              iaculis laoreet leo a rutrum. Ut efficitur dapibus elit,
              pellentesque mattis diam tristique in. Vestibulum ullamcorper
              mattis lorem vel maximus. Maecenas in lacinia elit, vel rhoncus
              felis. In eleifend faucibus venenatis. Ut at egestas tortor. Ut et
              enim laoreet, venenatis risus.
            </p>
          </div>
        </div>

        {/* Upload Task Section */}
        <div className="mb-16 mt-5">
          <div className="flex flex-col md:flex-row mx-auto">
            <input
              type="text"
              placeholder="Upload a link of your task"
              className="block mx-auto p-2 border-b-2 border-[#17212E] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
