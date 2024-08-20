import CourseSection from "./components/courseSection/CourseSection";
import Pricing from "./components/PricingSection/Pricing";
import student from "./Images/Male-Student.png";
import { IoIosArrowBack } from "react-icons/io";
import head from "./Images/head5.jpg";

import { useState } from "react";
import RegistorForm from "./components/RegistorForm";

const ProjectPage = () => {
  const [isFormOpen, SetFormOpen] = useState(false);

  const openForm = () => {
    SetFormOpen(!isFormOpen);
  };

  return (
    <div className={`overflow-x-hidden `}>
      {/* HEADER COMPONENT*/}
      <div className="text-white flex w-full flex-row h-3/4">
        <div className="w-2/5 md:w-2/5 bg-[#17212E] pb-10">
          <div className="bg-[#F5CF6B] w-min rounded-r-full p-2 md:p-5 cursor-pointer text-black align-center align-middle pr-5 md:pr-12 mt-2 md:mt-4">
            <div className="flex">
              <IoIosArrowBack
                size={21}
                style={{
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "4px",
                }}
              />
              <h1 className="text-black text-semibold md:font-bold text-lg md:text-2xl">
                Projects
              </h1>
            </div>
          </div>
          <div className="md:mt-10 mt-4 md:flex md:flex-col md:items-center">
            <h1 className="text-lg font-bold w-fit text-center md:w-3/4 md:leading-normal md:text-4xl md:text-center md:tracking-wide text-wrap">
              Get Hands On Experience by Using your
            </h1>
            <h1 className="text-2xl font-bold text-[#F5CF6B] text-center mt-3 pb-5 md:mt-14 md:text-5xl underline decoration-[#F5CF6B]">
              SKILLS
            </h1>
          </div>
        </div>
        <div className="w-3/5">
          <img className="w-[100%] h-[100%]" src={head} alt="slide1" />
        </div>
      </div>
      {/* HEADER COMPONENT ENDS */}

      {/* Course Section */}
      <CourseSection />

      {/* Available Plans */}
      <div className="w-full h-fit bg-gradient-to-b from-[#1B1F24] to-[#17212E] pt-24 pb-24">
        <h1 className="text-white text-center text-4xl font-bold mb-4">
          Available plans
        </h1>
        <Pricing openForm={openForm} />
      </div>
      {/* blank space */}
      <div className="w-full h-36 bg-[#FFFFFF]"></div>
      {/* thumbsup section */}
      <div className="w-full h-96 overflow-y-hidden">
        <div className="w-full bg-gradient-to-b from-[#17212E] to-[#F5CF6B] flex flex-row md:pt-16 pt-7">
          <div className="w-3/5 text-white flex flex-col">
            <div>
              <h1 className="text-5xl text ml-24 font-bold">Wait!</h1>
            </div>
            <div className="md:text-3xl w-3/4 mt-8 font-bold text-justify md:ml-24 ml-3">
              <h1>
                Would you first like to learn the skills that works for you ?
                Here is something for you to get back to your track
              </h1>
            </div>
            <div className="text-[#17212E] font-semibold mt-10 ml-auto md:mr-28 md:text-3xl bg-[#F5CF6B] p-4 rounded-md w-fit">
              <button className="">Learn more!</button>
            </div>
          </div>
          <div className="w-2/5 ">
            <img
              src={student}
              alt="student"
              className="md:h-[70%] md:mt-[-39px] md:ml-10"
            ></img>
          </div>
        </div>
      </div>

      {/* Register Form */}

      {isFormOpen && (
        <RegistorForm isFormOpen={isFormOpen} SetFormOpen={SetFormOpen} />
      )}
    </div>
  );
};

export default ProjectPage;