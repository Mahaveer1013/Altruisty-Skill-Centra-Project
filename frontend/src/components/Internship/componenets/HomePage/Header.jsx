import React, { useState } from 'react';
import logo from "../../assets/images/logo.png"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white font-times">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
          <div>
          <img src={logo} alt="" className='h-16 '/>
         </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-[#17212E] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Project</a>
              <a href="#" className="hover:bg-[#17212E] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Intern</a>
              <a href="#" className="hover:bg-[#17212E] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Workshop</a>
              <a href="#" className="hover:bg-[#17212E] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
              <button className="bg-[#17212E] text-white px-4 w-20 py-2 rounded">Login</button>
              <button className="bg-[#F5CF6B]   text-[#17212E] w-20 px-4 py-2 rounded">Signup</button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="bg-[#17212E] inline-flex items-center justify-center p-2 rounded-md text-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-[#17212E] hover:text-white">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-[#17212E] hover:text-white">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-[#17212E] hover:text-white">Internship</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-[#17212E] hover:text-white">Contact</a>
            <button className="bg-[#17212E] text-white w-full text-left px-3 py-2 rounded-md">Login</button>
            <button className="bg-white  w-full text-left px-3 py-2 rounded-md">Signup</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
