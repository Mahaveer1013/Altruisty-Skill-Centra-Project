import { useState } from 'react';
import React from 'react';
import Logo from './logoo.jpg';

import { Link, useLocation, useNavigate } from "react-router-dom";


const SkillCentreNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClassName = (path) => {
    return location.pathname === path 
      ? "text-[#FD8901] font-semibold scale-125 transition duration-500 md:mx-0 cursor-pointer"
      : "hover:text-[#FD8901] font-semibold hover:scale-110 transition duration-500 md:mx-0 cursor-pointer";
  };


  return (
    <div className='bg-white'>
      <div className="relative flex justify-between px-5 md:py-5 md:px-5">
        <div className="hidden md:flex items-center pl-0">
          <img className="absolute" src={Logo} height={150} width={150} alt="Logo" />
        </div>
        <div className="md:hidden flex items-center text-center pl-20">
          <img className="absolute" src={Logo} height={150} width={150} alt="Logo" />
        </div>
        <div className="flex my-5 items-center md:hidden">
          <button
            className="text-[#F5CF6B] text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <nav className="hidden items-center text-lg md:flex md:gap-6">
          <Link to="/SkillCentre" className={getLinkClassName("/SkillCentre")}>
            Home
          </Link>
          <Link to="/SkillCentre/profile" className={getLinkClassName("/gallery")}>
            My Profile
          </Link>
          <Link to="/events" className={getLinkClassName("/services")}>
            My Learning
          </Link>
          <Link to="/internship" className={getLinkClassName("/about")}>
            Certifications  
          </Link>
          <Link to="/SkillCentra/community" className={getLinkClassName("/about")}>
            Community
          </Link>
          <Link to="/launchpad" className={getLinkClassName("/community")}>
            Jobs and Internships
          </Link>
          <Link to="/" className={getLinkClassName("/")}>
            Altruisty
          </Link>
          
        </nav>
      </div>
      
    </div>
  );
};

export default SkillCentreNavbar;
