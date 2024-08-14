import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../pageimg/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function NavbarTemp() {
  const location = useLocation();
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceDropdownMobile, setIsServiceDropdownMobile] = useState(false);
  const [isEventDropdownMobile, setIsEventDropdownMobile] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const isHomePage = location.pathname === '/';

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current && 
      !mobileMenuRef.current.contains(event.target) && 
      menuButtonRef.current && 
      !menuButtonRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`fixed z-50 w-full bg-white ${isScrolled ? "backdrop-blur-md" : ""}`}>
      <div className="hidden lg:flex flex-col items-center w-full">
        <Link to='/'>
          <img
            src={logo}
            alt="logo"
            className="h-16 w-26"
            style={{
              zIndex: "1000",
              overflow: "hidden",
              margin: "0px"
            }}
          />
        </Link>
        <div className="flex justify-between items-center p-2 space-x-10 font-Inter font-semibold text-black">
          <Link to="/" className="nav-link">
            <button className="text-black">Home</button>
          </Link>
          <NavLinkWithDropdown
            to="/Services"
            label="Services"
            dropdownItems={[
              { label: "Altruisty Services", to: "/Altruistyservices" },
              { label: "Training Program", to: "/training" },
              { label: "Startup Services", to: "/StartupLaunchpad" },
              { label: "Package", to: "/Package" },
            ]}
            isDropdownOpen={serviceDropdown}
            setDropdownOpen={setServiceDropdown}
            isHomePage={isHomePage}
            textColor="black"
          />
          <NavLinkWithDropdown
            to="/Eventsprogram"
            label="Events & competition"
            dropdownItems={[
              { label: "Events & competition", to: "/eventsandcompetition" },
              { label: "Past program log", to: "/pastprogramlog" },
            ]}
            isDropdownOpen={eventDropdown}
            setDropdownOpen={setEventDropdown}
            isHomePage={isHomePage}
            textColor="black"
          />
          <Link to="/internshipprogram" className="nav-link">
            <button className="text-black">Internship</button>
          </Link>
          <Link to="/AltruistyStartupLaunchpad" className="nav-link">
            <button className="text-black">Altruisty Startup Launchpad</button>
          </Link>
          <Link to="/SkillCentre" className="nav-link">
            <button className="text-black">Altruisty Skill Centra</button>
          </Link>
          <Link to="/Aboutus" className="nav-link">
            <button className="text-black">About Us</button>
          </Link>
          <Link to="/Contactus" className="nav-link">
            <button className="text-black">Contact Us</button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden flex justify-between mx-5">
        <Link to='/'>
          <img
            src={logo}
            alt="logo"
            className="h-16 w-26"
            style={{
              zIndex: "1000",
              overflow: "hidden",
            //   margin: ""
            }}
          />
        </Link>
        <button
          onClick={handleMobileMenuToggle}
          className={`text-xl font-bold text-black`}
          ref={menuButtonRef}
        >
          <FontAwesomeIcon icon={faBars} className="" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50" ref={mobileMenuRef}>
          <div className="bg-blue-100 w-full max-w-screen-lg mx-auto shadow-md rounded-b-lg p-4 mt-16">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-black"
                onClick={handleMobileMenuToggle}
              >
                Home
              </Link>
              <div className="text-black">
                <div onClick={() => setIsServiceDropdownMobile(!isServiceDropdownMobile)} className="cursor-pointer">
                  {isServiceDropdownMobile ? (
                    <Link to="/services" className="">
                      Services
                      <FontAwesomeIcon icon={faChevronUp} className="ml-1" />
                    </Link>
                  ) : (
                    <>
                      Services
                      <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                    </>
                  )}
                </div>
                {isServiceDropdownMobile && (
                  <div className="pl-4">
                    {[
                      { label: "Altruisty Services", to: "/Altruistyservices" },
                      { label: "Training Program", to: "/training" },
                      { label: "Startup Services", to: "/StartupLaunchpad" },
                      { label: "Package", to: "/Package" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className="block mt-2 hover:underline"
                        onClick={handleMobileMenuToggle}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-black">
                <div onClick={() => setIsEventDropdownMobile(!isEventDropdownMobile)} className="cursor-pointer">
                  {isEventDropdownMobile ? (
                    <Link to="/eventsprogram" className="">
                      Events & Competition
                      <FontAwesomeIcon icon={faChevronUp} className="ml-1" />
                    </Link>
                  ) : (
                    <>
                      Events & Competition
                      <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                    </>
                  )}
                </div>
                {isEventDropdownMobile && (
                  <div className="pl-4">
                    {[
                      { label: "Events & competition", to: "/eventsandcompetition" },
                      { label: "Past program log", to: "/pastprogramlog" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className="block mt-2 hover:underline"
                        onClick={handleMobileMenuToggle}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/internshipprogram"
                className="text-black"
                onClick={handleMobileMenuToggle}
              >
                Internship
              </Link>
              <Link
                to="/AltruistyStartupLaunchpad"
                className="text-black"
                onClick={handleMobileMenuToggle}
              >
                Altruisty Startup Launchpad
              </Link>
              <Link
                to="/SkillCentre"
                className="text-black"
                onClick={handleMobileMenuToggle}
              >
                Altruisty Skill Centra
              </Link>
              <Link
                to="/Aboutus"
                className="text-black"
                onClick={handleMobileMenuToggle}
              >
                About Us
              </Link>
              <Link
                to="/Contactus"
                className="text-black"
                onClick={handleMobileMenuToggle}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLinkWithDropdown({
  to,
  label,
  dropdownItems,
  isDropdownOpen,
  setDropdownOpen,
  isHomePage,
  textColor,
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <Link to={to} style={{ color: textColor }} onClick={() => setDropdownOpen(false)}>
        <button className="hover:text-white" style={{ color: textColor }}>
          {label} <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
        </button>
      </Link>
      {isDropdownOpen && (
        <div className="absolute p-2 text-sm bg-white text-black z-50 rounded-md shadow-md w-max">
          {dropdownItems.map((item, index) => (
            <p key={index} className="p-2">
              <Link
                className="hover:underline"
                to={item.to}
                onClick={() => setDropdownOpen(false)}
                style={{ color: textColor }}
              >
                {item.label}
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}