import StudentDetails from './StudentDetails';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

const Current = () => {
  const users = [
    { id: 1, name: 'Ashok', email: 'ABCDEFG123@gmail.com' },
    { id: 2, name: 'Deepak kumar', email: 'thgfrg434@gmail.com' },
    { id: 1, name: 'Ashok', email: 'ABCDEFG123@gmail.com' },
    { id: 2, name: 'Deepak kumar', email: 'thgfrg434@gmail.com' },
    { id: 1, name: 'Ashok', email: 'ABCDEFG123@gmail.com' },
    { id: 2, name: 'Deepak kumar', email: 'thgfrg434@gmail.com' },
    { id: 1, name: 'Ashok', email: 'ABCDEFG123@gmail.com' },
    { id: 2, name: 'Deepak kumar', email: 'thgfrg434@gmail.com' },
    { id: 1, name: 'Ashok', email: 'ABCDEFG123@gmail.com' },
    { id: 2, name: 'Deepak kumar', email: 'thgfrg434@gmail.com' },
    
    // ... add other users as needed
  ];

  return (
    <div className="flex flex-row w-full h-full  mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col min-h-full items-center bg-dark-blue w-[300px] mx-auto pt-10">
        <nav>
          <div className='flex justify-center items-center text-light-yellow text-2xl lg:pb-8 font-TimesNewRoman'>Menu</div>
          <ul className="flex flex-col space-y-5 mb-[50px] text-white justify-center items-center">
            <li className="flex items-center text-lg">
               Dashboard
            </li>
            <li className="flex items-center text-lg">
              Job & Intern
            </li>
            <li className="flex items-center text-lg">
               Community
            </li>
            <li className="flex items-center text-lg">
               Subscription
            </li>
            <li className="flex items-center text-lg">
               Admin Access
            </li>
            <li className="flex items-center text-lg">
               Event
            </li>
            <li className="flex items-center text-lg">
             Challenges
            </li>
            <li className="flex items-center text-lg">
             Offer Include
            </li>
            <li className="flex items-center text-lg">
             Log Out
            </li>
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

         {/* User Table */}
         <table className="w-full bg-white rounded-lg mx-auto">
         <thead>
           <tr className="bg-gray-800 text-white">
             <th className="py-2 px-4">User Id</th>
             <th className="py-2 px-4">Name</th>
             <th className="py-2 px-4">Email Id</th>
             <th className="py-2 px-4">Operation</th>
           </tr>
         </thead>
         <tbody>
           {users.map((user) => (
             <tr key={user.id} className="text-center border-b">
               <td className="py-2 px-4">{user.id}</td>
               <td className="py-2 px-4">{user.name}</td>
               <td className="py-2 px-4">{user.email}</td>
               <td className="py-2 px-4">
                 <Link to='/StudentDetails'> 
                  <button className="bg-green-500 text-white px-4 py-1 rounded mx-1">View</button>
                 </Link>
                 <button className="bg-red-500 text-white px-4 py-1 rounded mx-1">Delete</button>
                 <button className="bg-gray-500 text-white px-4 py-1 rounded mx-1">Block</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
      </div>
    </div>
  );
};

export default Current;