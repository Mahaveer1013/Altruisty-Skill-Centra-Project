import img from "../assets/images/profileimg.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import api from "../../../api/api";

export default function StudentDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, SetDetails] = useState(null); // Initialize as null for object response
  const [loading, setLoading] = useState(true);
  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`; 
  };
  


  useEffect(() => {
    const getStudentDetails = async () => {
      try {
        const res = await api.get(`/getStudentDetails/${id}`);
        console.log("API Response:", res.data);
        SetDetails(res.data[0]); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching student details:", err);
        setLoading(false); // Stop loading on error
      }
    };

    getStudentDetails();
  }, [id]);

  // Show loading spinner or message
  if (loading) {
    return <div>Loading student details...</div>;
  }

  // Show fallback if no data exists
  if (!details) {
    return <div>No student details available.</div>;
  }

  const graphType = [
    {
      id: 1,
      graphName: "Task Analysis",
      graphValue: [
        { id: 1, name: "Task", value: "60%" },
        { id: 2, name: "No. of Tasks", value: "30" },
        { id: 3, name: "Completed", value: "156" },
      ],
      data: [
        { name: "Group A", value: 500 },
        { name: "Group B", value: 500 },
      ],
      color: ["lightgreen", "lightgray"],
    },
  ];

  return (
    <div className="flex flex-row w-full h-full mx-auto">
      <div className="bg-[#FAF2BE] flex flex-col justify-center items-center mx-auto w-full h-full overflow-hidden p-5">
        <div className="flex flex-row justify-between w-full p-10">
          <div className="flex justify-start w-full space-x-5">
            <img
              src={img}
              alt="Profile"
              className="w-[70px] h-[70px] object-cover rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-extrabold text-dark-blue">
                {details.user?.email || "N/A"}
              </h2>
              <span className="text-dark-blue">Student</span>
            </div>
          </div>
          
        </div>

        {/* User Table */}
        <table className="w-[400px] h-full bg-dark-blue rounded-lg mx-auto">
          <thead>
            <tr className="bg-light-yellow text-dark-blue">
              <th className="py-2 px-8">Title</th>
              <th className="py-2 px-8">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Role</td>
              <td className="py-2 px-16">{details.role || "N/A"}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Transaction ID</td>
              <td className="py-2 px-16">{details.transactionId || "N/A"}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Verification</td>
              <td className="py-2 px-16">{details.verification || "N/A"}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">StartedAt</td>
              <td className="py-2 px-16">{formatDate(details.createdAt) || formatDate(details.StartedAt)}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Completion</td>
              <td className="py-2 px-16">{details.completion ? "Yes" : "No"}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Task1</td>
              <td className="py-2 px-16">{details.progress[0].file.task1 ? details.progress[0].file.task1 : "No"}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Task2</td>
              <td className="py-2 px-16">{details.progress[0].file.task2 ? details.progress[0].file.task2 : "No"}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Task3</td>
              <td className="py-2 px-16">{details.progress[0].file.task3 ? details.progress[0].file.task3 : "No"}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Task4</td>
              <td className="py-2 px-16">{details.progress[0].file.task4 ? details.progress[0].file.task4 : "No"}</td>
            </tr>
            <tr className="text-center text-white border-b mx-auto">
              <td className="py-2 px-16">Task5</td>
              <td className="py-2 px-16">{details.progress[0].file.task5 ? details.progress[0].file.task5 : "No"}</td>
            </tr>

          </tbody>
        </table>

        {/* Data Cards */}
        <div className="grid grid-cols-2 gap-8 justify-center items-center mt-16">
          {graphType.map((g) => (
            <div
              key={g.id}
              className="flex flex-col bg-dark-blue text-light-yellow text-center rounded-lg w-[500px] h-[250px] justify-between items-center"
            >
              <h1 className="text-xl p-5 font-bold">{g.graphName}</h1>
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
                  </PieChart>
                </div>
                <div className="flex justify-start text-justify w-full h-full">
                  <ul style={{ listStyleType: "disc" }}>
                    {g.graphValue.map((gv) => (
                      <li key={gv.id} className="text-md text-white pt-7">
                        {gv.name} - {gv.value}
                      </li>
                    ))}
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
