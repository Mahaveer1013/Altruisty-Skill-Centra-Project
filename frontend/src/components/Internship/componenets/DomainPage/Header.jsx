import React, { useState } from 'react';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white font-times text-lg font-bold">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex  items-center">
          <Link to={"/InternDetail"}><h1>{"<"} &nbsp; Back</h1></Link>
          </div>
          <div className="hidden md:block ">
            <div className=" flex justify-center font-times font-bold space-x-4">
              <a href="#" className="hover:bg-[#17212E] hover:text-white px-3 py-2 rounded-md  ">Project</a>
              <a href="#" className="hover:bg-[#17212E] hover:text-white px-3 py-2 rounded-md  ">Intern</a>
              <a href="#" className="hover:bg-[#17212E] hover:text-white px-3 py-2 rounded-md  ">Workshop</a>
              <a href="#" className="hover:bg-[#17212E] hover:text-white px-3 py-2 rounded-md  ">Blog</a>
            </div>
          </div>
          <div>
          <div>
          <img src={logo} alt="" className='h-16 '/>
         </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="bg-[#17212E]  inline-flex items-center justify-center p-2 rounded-md text-white">
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
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-[#17212E] hover:text-white">Project</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-[#17212E] hover:text-white">Intern</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-[#17212E] hover:text-white">Workshop</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-[#17212E] hover:text-white">Blog</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
