import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import AdminMain from "./Training/AdminMain";

export default function Mainpage() {
  const data = [
    {id:1, title: "Overall Students", count: 5300, route:'/OverallStudents'},
    {id:2, title: "Previously Completed", count: 1220, route:'/Previous'},
    {id:3, title: "Current students", count: 1433, route:'/CurrentStudents'},
    {id:4, title: "Next batch students", count: 2300, route:'/Nextbatch'},
  ];

   //for router navigation
   const navigate = useNavigate();

  const [isToggled, setisToggled] = useState(true);
  const [isClick, setisClick] = useState(false);
  const [isTriggered, setisTriggered] = useState(false);

  const handleIntern = () => {
    setisToggled(true);
    setisClick(false);
    setisTriggered(false);
  };

  const handleCourse = () => {
    setisToggled(false);
    setisClick(true);
    setisTriggered(false);
  };

  const handleTraining = () => {
    setisToggled(false);
    setisClick(false);
    setisTriggered(true);
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
          {/*   <li className="flex items-center text-lg">Community</li> */}
           {/*  <li className="flex items-center text-lg">Subscription</li> */}
           {/*  <li className="flex items-center text-lg">Admin Access</li> */}
            <li className="flex items-center text-lg">Event</li>
            <li className="flex items-center text-lg">Challenges</li>
   {/*          <li className="flex items-center text-lg">Offer Include</li> */}
            <li className="flex items-center text-lg">Log Out</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="bg-[#FAF2BE] w-full h-full h-screen pl-5 pr-5 pt-5">
        <header className="flex justify-between items-center mb-8 bg-dark-blue w-full mx-auto rounded-lg lg:pl-5 lg:pr-5 lg:pt-5 lg:pb-5">
          <div className="flex space-x-4">
            <button
              className={`${
                isToggled
                  ? "bg-light-yellow text-dark-blue py-2 px-4 rounded"
                  : "bg-dark-blue text-white py-2 px-4 rounded"
              }`}
              onClick={() => handleIntern()}
            >
              Internship
            </button>
            <button
              className={`${
                isClick
                  ? "bg-light-yellow text-dark-blue py-2 px-4 rounded"
                  : "bg-dark-blue text-white py-2 px-4 rounded"
              }`}
              onClick={() => handleCourse()}
            >
              Courses
            </button>
            <button
              className={`${
                isTriggered
                  ? "bg-light-yellow text-dark-blue py-2 px-4 rounded"
                  : "bg-dark-blue text-white py-2 px-4 rounded"
              }`}
              onClick={() => handleTraining()}
            >
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

        {/* Data Cards for Intern section*/}
        {isToggled && (
        <div>

          <div className="flex justify-between bg-dark-blue items-center w-full p-10 h-[50px] rounded-lg mx-auto">
            <h2 className="flex justify-start text-xl font-TimesNewRoman text-white">
              Students Subscription Details
            </h2>
            <Link to='/Payment'>
              <button className="flex justify-end bg-light-yellow text-dark-blue transform hover:scale-105 rounded-lg p-3">
                Visit
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 justify-center items-center p-8 ml-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-dark-blue text-white text-center pt-16 rounded-lg flex-col w-[400px] h-[200px] justify-between items-center"
              >
                <p className="text-2xl justify-center items-center">
                  {item.count}
                </p>
                <p className="text-xl text-light-yellow">{item.title}</p>
                <span className="underline text-md justify-center items-center text-white cursor-pointer"
                  onClick={() => navigate(item.route)}
                >
                    See details
                </span>
              </div>
            ))}
            </div>
          </div>
        )}

        {/**Data Cards for Course Section */}
        {isClick && <div></div>}

        {/**Data Cards for Training Section*/}
        {isTriggered && (
          <AdminMain />
        )}

      </div>
    </div>
  );
}