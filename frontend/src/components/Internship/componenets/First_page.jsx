import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackGroundImage from "../assets/images/Background_for_firstPage.png"

function First_page() {

  
  
  return (
    <div>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BackGroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <div className=" text-white text-4xl font-bold p-4 md:px-40 rounded-lg shadow-lg">
          <span className="text-4xl text-[#F5CF6B]">Altruisty</span> help you to Take your career to next level by Join Our Exciting Internship Journey
        </div>
        <div className="mt-10">
          <Link to={'/HomePage'}><button className="bg-[#F5CF6B] text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md m-2 hover:bg-yellow-600">
            real time project
          </button></Link>
        
          <Link to={'/InternDetail'}><button className=" bg-[#17212E] text-[white] font-semibold py-2 px-4 rounded-md shadow-md m-2 hover:bg-gray-800">
          training internship
          </button></Link>
         
        </div>
      </div>
      </div>

      
    
   

    </div>
  )
}

export default First_page