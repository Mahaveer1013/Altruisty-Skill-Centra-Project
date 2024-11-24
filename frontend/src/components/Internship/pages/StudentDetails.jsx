import img from "../assets/images/profileimg.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import api from "../../../api/api";

export default function StudentDetails() {
  {
    /**student detail json */
  }
 

  {/**router navigation for view button */}
  const navigate = useNavigate();
  const {id} = useParams();
  const [details, SetDetails] = useState([]);

  
  useEffect(()=> {
    const getStudentDetails = async()=>
      {
        try
        {
          const res = await api.get(`/getStudentDetails/${id}`);
          console.log(res);
          SetDetails(res.data);
          console.log("hello"+details)
        
    
        }
        catch(err)
        {
          console.log(err);
        }
      }
      getStudentDetails();
  },[id])
  {
    /**Analysis json */
  }
  const graphType = [
    {
      id: 1,
      graphName: "Task  analysis",
      graphValue: [
        { id: 1, name: "Task", value: "60%" },
        { id: 2, name: "No.of.Task", value: "30" },
        { id: 3, name: "Completed", value: "156" },
      ],
      data: [
        { name: "Group A", value: 500 },
        { name: "Group B", value: 500 },
      ],
      color: ["lightgreen", "lightgray"],
    },
    {
      id: 2,
      graphName: "Project analysis",
      graphValue: [
        { id: 1, name: "Project", value: "30%" },
        { id: 2, name: "No.of.Project", value: "3" },
        { id: 3, name: "Completed", value: "1" },
      ],
      data: [
        { name: "Group A", value: 100 },
        { name: "Group B", value: 900 },
      ],
      color: ["#ff0000", "lightgray"],
    },
    {
      id: 3,
      graphName: "Assignment analysis",
      graphValue: [
        { id: 1, name: "assignment", value: "20%" },
        { id: 2, name: "No.of.Assignment", value: "10" },
        { id: 3, name: "Completed", value: "2" },
      ],
      data: [
        { name: "Group A", value: 200 },
        { name: "Group B", value: 900 },
      ],
      color: ["#000000", "lightgray"],
    },
    {
      id: 4,
      graphName: "Internship analysis",
      graphValue: [
        { id: 1, name: "Internship", value: "20%" },
        { id: 2, name: "No.of.Internship", value: "30" },
        { id: 3, name: "Completed", value: "2" },
      ],
      data: [
        { name: "Group A", value: 500 },
        { name: "Group B", value: 900 },
      ],
      color: ["blue", "lightgray"],
    },
  ];
  if (!details.length) {
    return <div>Loading student details...</div>;
  }
  return (
    <div className="flex flex-row w-full h-full mx-auto">
      {/* Sidebar */}
     
      {/**Main content*/}
      <div className="bg-[#FAF2BE] flex flex-col justify-center items-center mx-auto w-full h-full overflow-hidden p-5">
        <div className="flex flex-row justify-between w-full p-10">
          <div className="flex justify-start w-full space-x-5">
            <img
              src={img}
              alt=""
              className="w-[70px] h-[70px] object-cover rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-extrabold text-dark-blue">
               {details?.user?.email}
              </h2>
              <span className="text-dark-blue">student</span>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="w-[100px] h-[50px] bg-red-500 text-white rounded-lg">
              Eliminate
            </button>
          </div>
        </div>

        {/* User Table */}
        <table className="w-[400px] h-full bg-dark-blue rounded-lg mx-auto">
          <thead>
            <tr className="bg-light-yellow text-dark-blue">
              <th className="py-2 px-8">Title</th>
              <th className="py-2 px-8" colSpan="2">
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            { Array.isArray(details) ? (
               details.map((user) => (
                <tr
                  key={user._id}
                  className="text-center text-white border-b mx-auto"
                >
                  <td className="py-2 px-16 text-justify pl-[150px] pr-[100px]">
                    {details?.role}
                  </td>
                  <td className="py-2 px-16 text-justify pl-[160px]">
                    {user.Data}{" "}
                  </td>
                  <td className="mr-10">
                    <button className=" bg-light-yellow text-dark-blue w-10 my-2 mr-6 mx-auto rounded-lg"
                      onClick={() => navigate(user.route)}
                    >
                      {user.Button}
                    </button>
                  </td>
                </tr>
              ))
            )
            :(
              <td colSpan="3">No data available</td>
            )
          }
           
          </tbody>
        </table>

        {/* Data Cards */}
        <div className="grid grid-cols-2 gap-8 justify-center items-center mt-16">
          {graphType.map((g) => (
            <div
              key={graphType.id}
              className="flex flex-col bg-dark-blue text-light-yellow text-center rounded-lg w-[500px] h-[250px] justify-between items-center"
            >
              
              <h1 className="text-xl p-5 font-TimesNewRoman font-bold">{g.graphName}</h1>
              <div className="flex justify-center items-center mx-auto pr-5">
                <div className="flex justify-start w-full">
                  <PieChart width={300} height={400}>
                    <Pie
                      data={g.data}
                      cx={100}
                      cy={80}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={1}
                      dataKey="value"
                    >
                      {g.data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={g.color[index % g.color.length]}
                        />
                      ))}
                    </Pie>
                    {/* <Legend className='mr-[200px]'/> */}
                  </PieChart>
                </div>
                <div className="flex justify-start text-justify w-full h-full">
                  <ul
                    className={`text-[${g.color[0]}]`}
                    style={{ listStyleType: "disc" }}
                  >
                    {g.graphValue.map((gv) => {
                      return (
                        <li className="text-md text-white font-TimesNewRoman pt-7">
                          {gv.name}-{gv.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}