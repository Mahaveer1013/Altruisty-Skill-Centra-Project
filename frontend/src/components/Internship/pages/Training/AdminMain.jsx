import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
/* import PreviousPlan from "./PreviousPlan" */
import Current from "../Students"
import Subscription from "../Subscription"


export default function AdminMain() {

  const data = [
    { id: 1, title: "Previously completed", count: 369, route:'/Training/PreviousPlan'},
    { id: 2, title: "Current Students", count: 678, route:'/Training/CurrentPlan'},
    { id: 3, title: "Overall Students", count: 1600, route:'/Training/OverallPlan'},
  ];

  //for router navigation
  const navigate = useNavigate();

  return (
    <div className="w-full h-fit mx-auto">
        {/* Data Cards */}
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
  );
}