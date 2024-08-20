import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from "../../assets/images/two young men talking about work.png"

const About = () => {
  return (

    <div className="bg-gray-900 text-white py-10 px-5 font-times  flex  items-center justify-between">
      {/* Search bar and buttons section */}
     <div>
        <div className="md:flex  justify-center w-full md:px-20 lg:px-40">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 mb-4 lg:mb-0 lg:mr-4 ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-white focus:outline-none w-full md:w-[300px]"
          />
          <FiSearch className="text-[#F5CF6B]   ml-2" size={20} />
        </div>
        <div className='flex justify-center '>
          
        <button className="bg-[#F5CF6B] text-gray-900 font-semibold py-2 px-6 rounded-full shadow-md">
          Search now
        </button>
        </div>
      </div>
      
      <div className="mt-6  text-center lg:text-left w-full md:mt-10 md:px-20 ">
        <h2 className="text-lg lg:text-3xl text-center font-medium">
          Use this internship opportunity to upgrade your skill to the level of corporate employee
        </h2>
        <div className='flex justify-center'>
           <button className="bg-[#F5CF6B] text-[#17212E]  font-semibold py-2 px-6 mt-4 rounded-md ">
              Apply now
           </button>
        </div>
      </div>

     </div>
      
      {/* Text and Apply button section */}
      {/* Image section */}
      <div className="hidden lg:block lg:w-1/4 mt-10 lg:mt-0 md:px-5 md:mx-5">
        <img src={Image} alt="Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default About;
