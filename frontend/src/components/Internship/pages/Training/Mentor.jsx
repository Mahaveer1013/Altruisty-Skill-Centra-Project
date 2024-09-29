import React from "react";
import { IoSearchOutline } from "react-icons/io5";  

export default function Mentor() {

    const content = [
        {
          id: 1,
          Mailid: "Johndoe333@gmail.com",
          Query: "A query can either be a request for data results from your database or for action on the data, or for both.",
          Action: "Responded",
        },
        {
          id: 2,
          Mailid: "Dany1233@gmail.com",
          Query: "A query can either be a request for data results from your database or for action on the data, or for both.",
          Action: "Responded",
        },
        {
          id: 3,
          Mailid: "steve5050@gmail.com",
          Query: "A query can either be a request for data results from your database or for action on the data, or for both.",
          Action: "Not Responded",
        },
        {
          id: 4,
          Mailid: "ArulDas200@gmail.com",
          Query: "A query can either be a request for data results from your database or for action on the data, or for both.",
          Action: "Not Responded",
        },

      ];

  return (
    <div className="flex flex-row w-full h-full mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col items-center bg-dark-blue mx-auto min-h-full w-[300px] pt-10">
        <nav>
          <div className="flex justify-center items-center text-light-yellow text-2xl pb-8 font-TimesNewRoman">
            Menu
          </div>
          <ul className="flex flex-col space-y-5 text-white justify-center items-center">
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

      {/**Main content*/}
      <div className="bg-[#FAF2BE] flex flex-col justify-center items-center mx-auto w-full h-full p-5">
        <div className="flex flex-row justify-between w-full p-10">
          <div className="flex flex-col justify-center items-center p-10 mx-auto">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search here"
                className="py-2 px-4 w-[400px] rounded bg-dark-blue border border-gray-400"
              ></input>
              <span className="mt-1 mx-auto bg-light-yellow p-2 rounded-full">
                <IoSearchOutline size="20" />
              </span>
            </div>

            <h2 className="text-2xl text-center font-TimesNewRoman font-bold text-dark-blue p-10">
                Ask Mentor
            </h2>

            {/* User Table */}
            <table className="w-full h-full bg-dark-blue rounded-lg mt-10 mx-auto">
              <thead>
                <tr className="bg-light-yellow text-dark-blue">
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Mail id</th>
                  <th className="py-2 px-4">Query</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {content.map((item) => (
                  <tr
                    key={item.id}
                    className="text-center text-white border-b mx-auto"
                  >
                    <td className="py-2 px-16 text-justify w-[150px]">{item.id}</td>
                    <td className="py-2 px-8 text-justify text-center w-[300px]">
                      {item.Mailid}
                    </td>
                    <td className="py-2 px-4 w-[500px] text-justify text-center text-sm">
                      {item.Query}
                    </td>
                    <td className="py-2 px-8 w-[500px]">
                      <span className={`${item.Action === 'Responded' ? 'bg-green-600 p-3 rounded-full' : ' bg-red-600 p-3 rounded-full'}`}>
                        {item.Action}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}