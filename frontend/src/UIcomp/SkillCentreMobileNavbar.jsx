import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import defaultProfilePic from '../assets/DefaultProfile.png';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const SkillCentreMobileNavbar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();

  const getLinkClassName = (path) => {
    return location.pathname === path 
      ? "text-[#FD8901] font-semibold scale-125 transition duration-500 md:mx-0 cursor-pointer"
      : "hover:text-[#FD8901] font-semibold hover:scale-125 transition duration-500 md:mx-0 cursor-pointer";
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
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#F5CF6B] transition-transform transform duration-500 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-black text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center text-xl mt-2 space-y-3">
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
          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL || defaultProfilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full mb-2"
            />
            <div className="text-gray-700 mb-2">{user?.displayName || 'User'}</div>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-gray-500 text-white font-semibold rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
            >
              Log out
            </button>
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
  );
};

export default SkillCentreMobileNavbar;