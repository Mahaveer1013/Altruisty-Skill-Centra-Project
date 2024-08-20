import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from "../../assets/images/four_person.png"
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
          <div className="bg-gray-900 text-white  font-times flex justify-center   ">
      {/* Search bar and buttons section */}
     <div className=''>
        <div className="md:flex p-10 justify-center w-full ">
            <div>
              <h1 className='text-[#F5CF6B] text-8xl text-center'>UIUX</h1>
            </div>
            <div className='text-4xl mt-2 ml-4 text-center'>
              <h1>Design</h1>
              <h1>Internship</h1>
            </div>
      </div>
      
      <div className="mt-6  text-center lg:text-left md:w-[full] lg:w-[full]  md:p-10 md:-mt-14 ">
        <h2 className="text-lg lg:text-3xl  font-medium">
        Gain mastery in UI/UX Design from the comfort of your home and open doors to amazing job opportunities with our but the certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application the way it development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.
        </h2>
        <div className='flex justify-evenly mb-10 md:mb-0'>
           <button className="bg-[#F5CF6B] text-[#17212E]  font-semibold py-2 px-6 mt-4 rounded-md ">
              Apply now
           </button>
        </div>
      </div>

     </div>
      
      {/* Text and Apply button section */}
      {/* Image section */}
      <div className="flex justify-end">
        <div className='hidden md:block  ml-10 '>
           <img src={Image} alt="Illustration" className="scale-100 w-[2400px] h-full" />
      
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
