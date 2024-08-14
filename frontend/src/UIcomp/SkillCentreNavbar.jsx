import { useState } from 'react';
import React from 'react';
import Logo from '../pageimg/logo.jpg';
import MobileMenu from './SkillCentreMobileNavbar';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAuth } from '../components/AuthContext';
import defaultProfilePic from '../assets/DefaultProfile.png';

const SkillCentreNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      logout();
      navigate('/SkillCentre');
    } catch (error) {
      console.error(error);
    }
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
          <Link to="/services" className={getLinkClassName("/gallery")}>
            My Profile
          </Link>
          <Link to="/events" className={getLinkClassName("/services")}>
            My Learning
          </Link>
          <Link to="/internship" className={getLinkClassName("/about")}>
            Certifications
          </Link>
          <Link to="/community" className={getLinkClassName("/about")}>
            Community
          </Link>
          <Link to="/launchpad" className={getLinkClassName("/community")}>
            Jobs and Internships
          </Link>
          <Link to="/" className={getLinkClassName("/")}>
            Altruisty
          </Link>
          {isLoggedIn ? (
            <div className="relative">
              <img
                src={user?.photoURL || defaultProfilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <div className="px-4 py-2 text-gray-700">{user?.displayName || 'User'}</div>
                  <div className="px-4 py-2 text-gray-700 cursor-pointer" onClick={handleLogout}>Log out</div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/SkillCentreLogin')}
              className="px-3 py-1 bg-gray-500 text-white font-semibold rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
            >
              Sign in
            </button>
          )}
        </nav>
      </div>
      {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />}
    </div>
  );
};

export default SkillCentreNavbar;
