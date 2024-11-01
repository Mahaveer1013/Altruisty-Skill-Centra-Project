import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faCashRegister,
  faCertificate,
  faHome,
  faPeopleGroup,
  faSignOut,
  faUser,
  faChevronDown,
  faNetworkWired,
  faMessage,
  faGroupArrowsRotate,
  faBell,
  faPieChart,
  faSignIn,
  faChalkboardTeacher,
  faListAlt,
  faCheckCircle,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../AuthContext";
import logo from "../assets/logo.jpg";
import api from "../api/api";

const Sidebar = () => {
  const {
    setIsSidebar,
    isSidebar,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    setFlash,
  } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        await api
          .get("/logout")
          .then((res) => {
            setUser(null);
            setIsLoggedIn(false);
            setFlash(["Logged out Successfully", "success"]);
          })
          .catch((err) => {
            setFlash(["Error Logging out", "error"]);
          });
      } catch (error) {
        setFlash(["Error Logging out", "error"]);
      }
    }
  };

  useEffect(() => {
    if (!isSidebar) {
      setIsDropdownOpen(false);
    }

    setActiveLink(location.pathname);
  }, [isSidebar, location.pathname]);

  const handleSidebar = () => {
    setIsSidebar((prev) => !prev);
  };

  const toggleDropdown = (active) => {
    setIsDropdownOpen((prev) => (prev === active ? 0 : active));
  };

  const isCommunityActive = location.pathname.startsWith("/community");
  const isProfileActive = location.pathname.startsWith("/profile");
  // const isTrainingActive = location.pathname.startsWith('/Training');
  const isLearningActive = location.pathname.startsWith("/learning");
  const isInternshipActive = location.pathname.startsWith("/Internship");
  const isAdminPanelActive = location.pathname.startsWith("/Internship");

  return (
    <>
      {/* <<=========================Sidebar===================>> */}
      <nav className="w-full fixed top-0 h-[70px] bg-white shadow-md z-40 shadow-[#17212E]">
        <img src={logo} alt="Logo" className="h-full m-auto" />
      </nav>
      <nav
        className={
          (isSidebar ? "w-full md:w-[250px]" : "w-[60px]") +
          " sidebar px-2 h-[100vh] flex flex-col bg-[#17212E] text-white shadow-lg fixed z-50 transition-all duration-200"
        }
      >
        <p className="p-3 cursor-pointer mb-5" onClick={handleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </p>

        {/* <<=========================Home===================>> */}
        <Link
          to={"/"}
          className={` p-3 rounded transition-all duration-300 ${
            activeLink === "/"
              ? "bg-[#F5CF6B] text-black"
              : "hover:text-primary hover:text-[#F5CF6B]"
          }`}
          onClick={() => {
            setActiveLink("/");
            setIsSidebar(false);
          }}
        >
          <FontAwesomeIcon className="m-auto" icon={faHome} />{" "}
          {isSidebar && "Home"}
        </Link>

        {/* <<=========================profile-dropdown===================>> */}
        <p
          onClick={() => toggleDropdown(1)}
          className={`flex items-center p-3 cursor-pointer rounded transition-all duration-300 ${
            isProfileActive && isDropdownOpen !== 1
              ? "bg-[#F5CF6B] text-black"
              : "hover:text-[#F5CF6B]"
          } ${isSidebar ? "text-primary  justify-between" : "justify-center"}`}
        >
          <span>
            <FontAwesomeIcon className="m-auto" icon={faUser} />{" "}
            {isSidebar && "Profile"}
          </span>
          {isSidebar && (
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-2 transition-transform ${
                isDropdownOpen === 1 ? "rotate-180" : ""
              }`}
            />
          )}
        </p>
        <div
          className={`overflow-hidden ${
            isDropdownOpen === 1 ? "dropdown-enter-active" : "dropdown-enter"
          }`}
        >
          <div className="flex flex-col">
            {/* <<=========================profile===================>> */}
            <Link
              to={"/profile"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/profile"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/profile");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faUser} />{" "}
              {isSidebar && "My Profile"}
            </Link>

            {/* <<=========================Learning===================>> */}
            <Link
              to={"/profile/learnings"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/learnings"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/profile/learnings");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faBook} />{" "}
              {isSidebar && "My Learning"}
            </Link>
            {/* <<=========================certification===================>> */}
            <Link
              to={"/profile/certifications"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/certifications"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/profile/certifications");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faCertificate} />{" "}
              {isSidebar && "Certifications"}
            </Link>
            {/* <<=========================Analytics===================>> */}
            <Link
              to={"/profile/analytics"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/analytics"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/profile/analytics");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faPieChart} />{" "}
              {isSidebar && "Analytics"}
            </Link>
          </div>
        </div>
        {/* <<=========================community dropdown===================>> */}
       {/*  <p
          onClick={() => toggleDropdown(2)}
          className={`flex items-center justify-between p-3 cursor-pointer rounded transition-all duration-300 ${
            isCommunityActive && isDropdownOpen !== 2
              ? "bg-[#F5CF6B] text-black"
              : "hover:text-[#F5CF6B]"
          } ${
            isSidebar ? "text-primary flex justify-center items-center" : ""
          }`}
        >
          <span>
            <FontAwesomeIcon className="m-auto" icon={faPeopleGroup} />{" "}
            {isSidebar && "Community"}
          </span>
          {isSidebar && (
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-2 transition-transform ${
                isDropdownOpen === 2 ? "rotate-180" : ""
              }`}
            />
          )}
        </p> */}
        <div
          className={`overflow-hidden ${
            isDropdownOpen === 2 ? "dropdown-enter-active" : "dropdown-enter"
          }`}
        >
          <div className="flex flex-col">
            {/* <<=========================community===================>> */}
            <Link
              to={"/community"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/community"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/community");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faPeopleGroup} />{" "}
              {isSidebar && "Community"}
            </Link>
            {/* <<=========================network===================>> */}
            <Link
              to={"/community/network"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/community/network"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/community/network");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faNetworkWired} />{" "}
              {isSidebar && "Network"}
            </Link>
            {/* <<=========================messages===================>> */}
            <Link
              to={"/community/messages/"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/community/messages/"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/community/messages/");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faMessage} />{" "}
              {isSidebar && "Messages"}
            </Link>
            {/* <<=========================Collaborations===================>> */}
            <Link
              to={"/community/colloboration/"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/community/colloboration/"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/community/colloboration/");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faGroupArrowsRotate} />{" "}
              {isSidebar && "Collaboration"}
            </Link>
            {/* <<=========================Notifications===================>> */}
            <Link
              to={"/community/notification/"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/community/notification/"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/community/notification/");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faBell} />{" "}
              {isSidebar && "Notifications"}
            </Link>
          </div>
        </div>
          {/* <<==========================Training==============================>> */}
        {/* <Link
          to={"/training"}
          className={`p-3 rounded transition-all duration-300 ${
            activeLink === "/training"
              ? "bg-[#F5CF6B] text-black"
              : "hover:text-primary hover:text-[#F5CF6B]"
          }`}
          onClick={() => {
            setActiveLink("/training");
            setIsSidebar(false);
          }}
        >
          <FontAwesomeIcon className="m-auto" icon={faCashRegister} />{" "}
          {isSidebar && "Training"}
        </Link>
 */}
        <Link
        to={'/MainPage'}
        className={`p-3 rounded transition-all duration-300 ${
          activeLink === "/AdminPanel"
            ? "bg-[#F5CF6B] text-black"
            : "hover:text-primary hover:text-[#F5CF6B]"
        }`}
        onClick={() => {
          setActiveLink("/AdminPanel");
          setIsSidebar(false);
        }}
        >
          <FontAwesomeIcon className="m-auto" icon={faCashRegister} />{" "}
          {isSidebar && "AdminPanel"}
        </Link>

        {/* <<========================Internships===================>> */}


        {/* <Link
          to={"/Internships"}
          className={`p-3 rounded transition-all duration-300 ${
            activeLink === "/Internships"
              ? "bg-[#F5CF6B] text-black"
              : "hover:text-primary hover:text-[#F5CF6B]"
          }`}
          onClick={() => {
            setActiveLink("/Internships");
            setIsSidebar(false);
          }}
        >
          <FontAwesomeIcon className="m-auto" icon={faChalkboardTeacher} />{" "}
          {isSidebar && "Internships"}
        </Link> */}



<p
              onClick={() => toggleDropdown(4)}
              className={`flex items-center justify-between p-3 cursor-pointer rounded transition-all duration-300 ${
                isLearningActive && isDropdownOpen !== 4
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-[#F5CF6B]"
              } ${
                isSidebar ? "text-primary flex justify-center items-center" : ""
              }`}
            >
              <span>
                <FontAwesomeIcon className="m-auto" icon={faChalkboardTeacher} />{" "}
                {isSidebar && "Learning"}
              </span>
              {isSidebar && (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-2 transition-transform ${
                    isDropdownOpen === 4 ? "rotate-180" : ""
                  }`}
                />
              )}
            </p>
            <div
              className={`overflow-hidden ${
                isDropdownOpen === 4 ? "dropdown-enter-active" : "dropdown-enter"
              }`}
            >
              <div className="flex flex-col">
                {/* <<=========================Training Internships===================>> */}
                <Link
                  to={"/Internships/HomePage/InternDetails"}
                  className={`p-3 rounded transition-all duration-300 ${
                    isSidebar ? "pl-10" : "pl-3"
                  } ${
                    activeLink === "/Internships/HomePage/InternDetails"
                      ? "bg-[#F5CF6B] text-black"
                      : "hover:text-primary hover:text-[#F5CF6B]"
                  }`}
                  onClick={() => {
                    setActiveLink("/Internships/HomePage/InternDetails");
                    setIsSidebar(false);
                  }}
                >
                  <FontAwesomeIcon className="m-auto" icon={faListAlt} />{" "}
                  {isSidebar && "Training Internships"}
                </Link>

                {/* <<=========================Projects===================>> */}
                <Link
                  to={"/Internships/Homepage"}
                  className={`p-3 rounded transition-all duration-300 ${
                    isSidebar ? "pl-10" : "pl-3"
                  } ${
                    activeLink === "/Internships/Homepage"
                      ? "bg-[#F5CF6B] text-black"
                      : "hover:text-primary hover:text-[#F5CF6B]"
                  }`}
                  onClick={() => {
                    setActiveLink("/Internships/Homepage");
                    setIsSidebar(false);
                  }}
                >
                  <FontAwesomeIcon className="m-auto" icon={faProjectDiagram} />{" "}
                  {isSidebar && "Real Time Projects"}
                </Link>

                {/* <<=========================My Internships===================>> */}
                <Link
                  to={"/day/:day/"}
                  className={`p-3 rounded transition-all duration-300 ${
                    isSidebar ? "pl-10" : "pl-3"
                  } ${
                    activeLink === "/day/:day"
                      ? "bg-[#F5CF6B] text-black"
                      : "hover:text-primary hover:text-[#F5CF6B]"
                  }`}
                  onClick={() => {
                    setActiveLink("/Internships/");
                    setIsSidebar(false);
                  }}
                >
                  <FontAwesomeIcon className="m-auto" icon={faCheckCircle} />{" "}
                  {isSidebar && "My Internships"}
                </Link>
                <Link
            to={"/training"}
            className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"}
            ${activeLink === "/training"
              ? "bg-[#F5CF6B] text-black"
              : "hover:text-primary hover:text-[#F5CF6B]"
          }`}
          onClick={() => {
            setActiveLink("/training");
            setIsSidebar(false);
          }}
        >
          <FontAwesomeIcon className="m-auto" icon={faCashRegister} />{" "}
          {isSidebar && "Training"}
          </Link>
                <Link
                  to={"/courses/"}
                  className={`p-3 rounded transition-all duration-300 ${
                    isSidebar ? "pl-10" : "pl-3"
                  } ${
                    activeLink === "/courses/"
                      ? "bg-[#F5CF6B] text-black"
                      : "hover:text-primary hover:text-[#F5CF6B]"
                  }`}
                  onClick={() => {
                    setActiveLink("/courses/");
                    setIsSidebar(false);
                  }}
                >
                  <FontAwesomeIcon className="m-auto" icon={faCheckCircle} />{" "}
                  {isSidebar && "courses"}
                </Link>
                

              </div>
            </div>

            {/* <<=========================Projects===================>> */}




            {/* <Link
              to={"/Internships/Projects"}
              className={`p-3 rounded transition-all duration-300 ${
                isSidebar ? "pl-10" : "pl-3"
              } ${
                activeLink === "/Internships/Projects"
                  ? "bg-[#F5CF6B] text-black"
                  : "hover:text-primary hover:text-[#F5CF6B]"
              }`}
              onClick={() => {
                setActiveLink("/Internships/Projects");
                setIsSidebar(false);
              }}
            >
              <FontAwesomeIcon className="m-auto" icon={faProjectDiagram} />{" "}
              {isSidebar && "Projects"}
            </Link> */}



        {isLoggedIn ? (
          <p
            onClick={handleLogout}
            className="cursor-pointer p-3 rounded transition-all duration-300 hover:text-primary hover:text-[#F5CF6B]"
          >
            <FontAwesomeIcon className="m-auto" icon={faSignOut} />{" "}
            {isSidebar && "Logout"}
          </p>
        ) : (
          <Link
            to={"/login"}
            className="cursor-pointer p-3 rounded transition-all duration-300 hover:text-primary hover:text-[#F5CF6B]"
          >
            <FontAwesomeIcon className="m-auto" icon={faSignIn} />{" "}
            {isSidebar && "Login"}
          </Link>
        )}
      </nav>
    </>
  );
};

export default Sidebar;