import React from 'react'
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function CurrentPlan() {

// you can add id for random no of student count
    const data = [
        {id:1, title: "UI / UX design", count: 23, route:'/Students' },
        {id:2, title: "Java developer", count: 25, route:'/Students' },
        {id:3, title: "UI / UX design", count: 26, route:'/Students' },
        {id:4, title: "Java developer", count: 24, route:'/Students' },
        {id:5, title: "UI / UX design", count: 33, route:'/Students' },
        {id:6, title: "Java developer", count: 24, route:'/Students' },
        {id:7, title: "UI / UX design", count: 29, route:'/Students' },
        {id:8, title: "Java developer", count: 33, route:'/Students' },
        {id:9, title: "UI / UX design", count: 23, route:'/Students' },
      ];

     //for navigation of router
     const navigate = useNavigate();

      const [isToggled, setisToggled] = useState(true);
      const [isClick, setisClick] = useState(false);
      const [isTriggered, setisTriggered] = useState(false);
      const [isHover, setisHovered] = useState(false);
    
      const handlePlan1 = () => {
        setisToggled(true);
        setisClick(false);
        setisTriggered(false);
        setisHovered(false);
      };
    
      const handlePlan2 = () => {
        setisToggled(false);
        setisClick(true);
        setisTriggered(false);
        setisHovered(false);
      };
    
      const handlePlan3 = () => {
        setisToggled(false);
        setisClick(false);
        setisTriggered(true);
        setisHovered(false);
      };
    
      const handlePlan4 = () => {
        setisToggled(false);
        setisClick(false);
        setisTriggered(false);
        setisHovered(true);
      };
    

  return (
    <div className="flex flex-row w-full h-full mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col items-center min-h-full bg-dark-blue w-[300px] pt-16">
        <nav>
          <div className="flex justify-center items-center text-light-yellow text-2xl lg:pb-8 font-TimesNewRoman">
            Menu
          </div>
          <ul className="flex flex-col space-y-5 mb-[50px] text-white justify-center items-center">
            <li className="flex items-center text-lg">Dashboard</li>
            <li className="flex items-center text-lg">Job & Intern</li>
            <li className="flex items-center text-lg">Community</li>
            <li className="flex items-center text-lg">Subscription</li>
            <li className="flex items-center text-lg">Admin Access</li>
            <li className="flex items-center text-lg">Event</li>
            <li className="flex items-center text-lg">Challenges</li>
            <li className="flex items-center text-lg">Offer Include</li>
            <li className="flex items-center text-lg">Log Out</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="bg-[#FAF2BE] w-full h-full pl-5 pr-5 pt-5 pb-5">
        <header className="flex justify-between items-center mb-8 bg-dark-blue w-full mx-auto rounded-lg lg:pl-5 lg:pr-5 lg:pt-5 lg:pb-5">
          <div className="flex space-x-4">
            <button className="bg-dark-blue text-white py-2 px-4 rounded">
              Internship
            </button>
            <button className="bg-dark-blue text-white py-2 px-4 rounded">
              Courses
            </button>
            <button className="bg-light-yellow text-dark-blue py-2 px-4 rounded">
              Training
            </button>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search here"
              className="py-2 px-4 rounded border border-gray-400"
            ></input>
            <span className="mt-1 mx-auto bg-light-yellow p-2 rounded-full">
              <IoSearchOutline size="20" />
            </span>
          </div>
        </header>

        <header className="flex justify-between items-center mb-8 bg-white w-[450px] mx-auto rounded-lg pt-3 pb-3 pl-3 pr-3">
          <div className="flex space-x-4">
            <button className={`${isToggled ? "bg-dark-blue text-light-yellow py-4 px-4 rounded" : "bg-white text-dark-blue py-4 px-4 rounded"}`}
              onClick={() => handlePlan1()}  
            >
              3 month
            </button>
            <button className={`${isClick ? "bg-dark-blue text-light-yellow py-4 px-4 rounded" : "bg-white text-dark-blue py-4 px-4 rounded"}`}
              onClick={() => handlePlan2()}
            >
              6 month
            </button>
            <button className={`${isTriggered ? "bg-dark-blue text-light-yellow py-4 px-4 rounded" : "bg-white text-dark-blue py-4 px-4 rounded"}`}
              onClick={() => handlePlan3()}  
            >
              9 month
            </button>
            <button className={`${isHover ? "bg-dark-blue text-light-yellow py-4 px-4 rounded" : "bg-white text-dark-blue py-4 px-4 rounded"}`}
              onClick={() => handlePlan4()}  
            >
              12 month
            </button>
          </div>
        </header>

        <div className="bg-dark-blue text-center py-6 rounded mb-8">
          <h2 className="text-2xl font-bold text-light-yellow">678</h2>
          <p className="text-white">Current Students</p>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-dark-blue text-white p-6 rounded flex items-center justify-between"
              onClick={() => navigate(item.route)}
            >
              <p className="text-xl">{item.count}</p>
              <p className="text-light-yellow">{item.title}</p>
              {/* Replace with actual image */}
              <div className="bg-white w-16 h-16 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}