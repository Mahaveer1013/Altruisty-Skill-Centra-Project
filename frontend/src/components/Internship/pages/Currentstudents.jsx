import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Currentstudents() {
  const data = [
    { title: "UI / UX design", count: 23 },
    { title: "Java developer", count: 25 },
    { title: "UI / UX design", count: 26 },
    { title: "Java developer", count: 24 },
    { title: "UI / UX design", count: 33 },
    { title: "Java developer", count: 24 },
    { title: "UI / UX design", count: 29 },
    { title: "Java developer", count: 33 },
    { title: "UI / UX design", count: 23 },
  ];

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
            <button className="bg-light-yellow text-black py-2 px-4 rounded">
              Internship
            </button>
            <button className="bg-dark-blue text-white py-2 px-4 rounded">
              Courses
            </button>
            <button className="bg-dark-blue text-white py-2 px-4 rounded">
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

        <div className="bg-dark-blue text-center py-6 rounded mb-8">
          <h2 className="text-2xl font-bold text-light-yellow">1433</h2>
          <p className="text-white">Current students</p>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-dark-blue text-white p-6 rounded flex items-center justify-between"
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
  );
}
