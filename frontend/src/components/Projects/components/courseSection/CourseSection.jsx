import { useState } from "react";
import NavBar from "./NavBar";
import BasicProjects from "./BasicProjects";
import AdvancedProjects from "./AdvancedProjects";
import PremiumProjects from "./PremiumProjects";
import { FaSearch } from "react-icons/fa";
import RegistorForm from "../RegistorForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("BASIC");
  const [SearchInput, SetSearchInput] = useState("");
  const [isFormOpen, SetFormOpen] = useState(false);

  const openForm = () => {
    SetFormOpen(!isFormOpen);
  };

  return (
    <div className={`mt-14 ${isFormOpen ? " opacity-50" : ""}`}>
      {isFormOpen && (
        <RegistorForm isFormOpen={isFormOpen} SetFormOpen={SetFormOpen} />
      )}
      <div className="bg-gray-50 w-full ">
        <div className="flex justify-center space-x-8 bg-[#17212E] shadow-md md:py-8 py-8">
          <a
            className={`font-bold cursor-pointer md:text-3xl text-xl ${
              selectedPlan === "BASIC" ? "text-[#F5CF6B]" : "text-white"
            }`}
            onClick={() => setSelectedPlan("BASIC")}
          >
            BASIC
          </a>
          <a
            className={`font-bold cursor-pointer md:text-3xl text-xl ${
              selectedPlan === "ADVANCED" ? "text-[#F5CF6B]" : "text-white"
            }`}
            onClick={() => setSelectedPlan("ADVANCED")}
          >
            ADVANCED
          </a>
          <a
            className={`font-bold md:text-3xl text-xl cursor-pointer ${
              selectedPlan === "PREMIUM" ? "text-[#F5CF6B]" : "text-white"
            }`}
            onClick={() => setSelectedPlan("PREMIUM")}
          >
            PREMIUM
          </a>
        </div>
        <div className="flex w-full justify-center pt-8 md:font-bold text-xl mx-4">
          <input
            type="text"
            placeholder="What do you want to learn?"
            value={SearchInput}
            onChange={(e) => SetSearchInput(e.target.value)}
            className="w-[90%] md:w-1/2 px-3 py-5 border rounded-lg border-gray-300 focus:outline-none placeholder:ml-4 border-solid"
          />
          <div className="bg-[#F5CF6B] p-3 cursor-pointer rounded-lg flex justify-center align-middle items-center ml-[-2.5rem] ">
            <FaSearch />
          </div>
        </div>
        <div className="w-full h-fit">
          {selectedPlan === "BASIC" && <BasicProjects openForm={openForm} />}
          {selectedPlan === "ADVANCED" && (
            <AdvancedProjects openForm={openForm} />
          )}
          {selectedPlan === "PREMIUM" && (
            <PremiumProjects openForm={openForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
