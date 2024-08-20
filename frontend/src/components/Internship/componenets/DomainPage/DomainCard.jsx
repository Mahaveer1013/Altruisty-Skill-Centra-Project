import React from 'react';
import { Link } from 'react-router-dom';

const DomainCard = ({ title, description, registered, availableSlots }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg flex flex-col  justify-between">
      <div>
        <h3 className="text-xl text-[#F5CF6B] font-semibold mb-4">{title}</h3>
        <p className="text-md mb-4 h-[130px]">{description}</p>
        <div className="flex justify-between text-xs text-gray-400">
          <p>👥 Registered - {registered}</p>
          <p>🟢 Available slot - {availableSlots}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-md shadow-md">
          Apply now
        </button>
        <Link to={'/CourseDetails'}><button className="bg-gray-700 text-gray-200 font-semibold py-2 px-4 rounded-md shadow-md">
          View detail
        </button></Link>
      </div>
    </div>
  );
};

export default DomainCard;
