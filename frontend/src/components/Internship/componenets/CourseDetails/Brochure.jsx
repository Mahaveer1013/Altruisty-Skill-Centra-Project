import React from 'react';
import first from "../../assets/images/first.png"
import second from "../../assets/images/second.png"

const InternshipFeatures = () => {
  

  return (
    <div className="bg-[#D4CAAA] p-8 lg:p-16 font-times ">
      
      <h2 className="text-center text-2xl lg:text-3xl font-bold mb-8">Things you gonna learn in the internship</h2>
      <div className='absolute left-1/2 -ml-0.5 w-0.5 mx-10 h-screen bg-gray-600 hidden md:block'></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 my-5">
        <div className=''>
        
          <h1 className='text-4xl font-bold'>Real-World Experience</h1>
          <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          
        </div>
        <div className='flex mt-5 md:-mt-0  items-center justify-center ' >
          
          <img className='h-[300px] w-[400px]' src={first} alt="" />
        </div>
        <div>
          <h1 className='md:hidden text-2xl flex justify-center items-center'>------x------</h1>
        </div>
      </div>
      <div className='absolute left-1/2 -ml-0.5 w-0.5 mx-10 h-screen bg-gray-600 hidden md:block'></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:m-10 my-5">
        
      <div className='flex mt-5 md:-mt-0  items-center justify-center ' >
          <img className='h-[300px] w-[400px]' src={second} alt="" />
        </div>
        <div className='md:mx-5 '>
          <h1 className='text-4xl font-bold'>Skill Development</h1>
          <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h1 className='md:hidden text-2xl flex justify-center items-center'>------x------</h1>
        </div>
      </div>
      <div className='absolute left-1/2 -ml-0.5 w-0.5 mx-10 h-screen bg-gray-600 hidden md:block'></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:mx-5 my-5">
        <div className=''>
          <h1 className='text-4xl font-bold'>Work in realtime project</h1>
          <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='flex mt-5 md:-mt-0  items-center justify-center ' >
          <img className='h-[300px] w-[400px]' src={first} alt="" />
        </div>
        <div>
          <h1 className='md:hidden text-2xl flex justify-center items-center'>------x------</h1>
        </div>
      </div>
      <div className='absolute left-1/2 -ml-0.5 w-0.5 mx-10 h-screen bg-gray-600 hidden md:block'></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:m-10 my-5">
        
      <div className='flex mt-5 md:-mt-0  items-center justify-center ' >
          <img className='h-[300px] w-[400px]' src={second} alt="" />
        </div>
        
        <div className=' md:mx-5 '>
          <div className=''></div>
          <h1 className='text-4xl font-bold'>Connect with Industry Professionals</h1>
          <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h1 className='md:hidden text-2xl flex justify-center items-center'>------x------</h1>
        </div>
      </div>
      <div className='absolute left-1/2 -ml-0.5 w-0.5 mx-10 md:h-96 lg:h-[300px] bg-gray-600 hidden md:block'></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:x-5 my-5">
        <div className=''>
          <h1 className='text-4xl font-bold'>Certification for compleltion </h1>
          <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='flex mt-5 md:-mt-0  items-center justify-center ' >
          <img className='h-[300px] w-[400px]' src={first} alt="" />
        </div>
        <div>
          <h1 className='md:hidden text-2xl flex justify-center items-center'>------x------</h1>
        </div>
      </div>

    </div>
  );
};

export default InternshipFeatures;
