import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from "../../assets/images/Young woman working at a computer from home.png"
import { Link } from 'react-router-dom';
const About = () => {
  return (

    <div className="bg-gray-900 text-white p-10 font-times  flex  items-center justify-between">
      {/* Search bar and buttons section */}
     <div className=''>
        <div className="md:flex  justify-center w-full ">
            <div>
              <h1 className='text-[#F5CF6B] text-8xl text-center'>UIUX</h1>
            </div>
            <div className='text-4xl mt-2 ml-4 text-center'>
              <h1>Design</h1>
              <h1>Internship</h1>
            </div>
      </div>
      
      <div className="mt-6  text-center lg:text-left md:w-[700px] lg:w-[880px] md:mt-10 md:px-10 ">
        <h2 className="text-lg lg:text-3xl  font-medium">
        Gain mastery in UI/UX Design from the comfort of your home and open doors to amazing job opportunities with our but the certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application the way it development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.
        </h2>
        <div className='flex justify-evenly'>
           <button className="bg-[#F5CF6B] text-[#17212E]  font-semibold py-2 px-6 mt-4 rounded-md ">
              Apply now
           </button>
           <Link to={'/Explore'}><button className="border-2 border-[#F5CF6B] text-white bg-[#17212E]  font-semibold py-2 px-6 mt-4 rounded-md ">
              Explore now
           </button></Link>
        </div>
      </div>

     </div>
      
      {/* Text and Apply button section */}
      {/* Image section */}
      <div className="hidden md:block md:w-[400px] mt-10  md:mx-5">
        <img src={Image} alt="Illustration" className="w-full h-full" />
      </div>
    </div>
  );
};

export default About;
