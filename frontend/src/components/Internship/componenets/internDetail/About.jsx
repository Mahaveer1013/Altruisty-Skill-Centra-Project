import React from 'react';
import boom from "../../assets/images/boom.png"
import three_person from "../../assets/images/three_person.png"
const About = () => {
  return (
    <section className="bg-[#D4CAAA] p-8 font-times">
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex justify-center'>
           <img src={three_person} className=" -mt-10" alt="" />
        </div>
        <div className='ml-3  p-2'>
        <div className='flex '>
           <img src={boom} className='h-10 w-7 ' alt="" />
           <h1 className='m-3'>Join us</h1>
        </div>
        <h1 className='mt-3 text-2xl font-bold'>Intern with Altruistry</h1>
        <p className='mt-3 text-xl md:mr-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className='bg-[#17212E] text-white hover:bg-[#F5CF6B] hover:text-[#17212E] h-12 w-28 rounded-md  mt-5'>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
