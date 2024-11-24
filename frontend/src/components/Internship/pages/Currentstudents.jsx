import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";

export default function Currentstudents() {
  //for router navigation
  const navigate = useNavigate();
  const [domainData,setDomainData] = useState([])
  useEffect(()=> {
    const getDomainData = async()=>
    {
      try
      {
        const res = await api.get('/getStudentDomains');
        console.log(res.data)
       setDomainData(res.data);
      }
      catch(err)
      {
        console.log(err);
      }
    }
    getDomainData();
  },[])

  return (
    <div className="flex flex-row w-full h-full mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col items-center min-h-full bg-dark-blue w-[300px] pt-16">

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

       {/*  <div className="bg-dark-blue text-center py-6 rounded mb-8">
          <h2 className="text-2xl font-bold text-light-yellow">1433</h2>
          <p className="text-white">Current students</p>
        </div> */}

        {/* Data Cards */}
        <div className="grid grid-cols-3 gap-4">
          {domainData.map((item) => (
            <div
              key={item._id}
              className="bg-dark-blue text-white p-6 rounded flex items-center justify-between"
              onClick={() => navigate(`/Students/${item._id}`)}
            >
              <p className="text-xl">{item.registered}</p>
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