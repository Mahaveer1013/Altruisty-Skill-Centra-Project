import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import question2 from "../../assets/images/question2.png"
import { Link } from 'react-router-dom';
import Mentor from '../course/Mentor';

const programs = [
  {
    id: 1,
    image: 'path-to-image-1.jpg',
    title: 'Assignment 1',
    duration: '3/6/9/12 Months',
  },
  {
    id: 2,
    image: 'path-to-image-2.jpg',
    title: 'Assignment 2',
    duration: '3/6/9/12 Months',
  },
  {
    id: 3,
    image: 'path-to-image-3.jpg',
    title: 'Assignment 3',
    duration: '3/6/9/12 Months',
  },
  {
    id: 4,
    image: 'path-to-image-4.jpg',
    title: 'Assignment 4',
    duration: '3/6/9/12 Months',
  },
  {
    id: 5,
    image: 'path-to-image-5.jpg',
    title: 'Assignment 5',
    duration: '3/6/9/12 Months',
  },
  {
    id: 6,
    image: 'path-to-image-6.jpg',
    title: 'Assignment 6',
    duration: '3/6/9/12 Months',
  },
  {
    id: 7,
    image: 'path-to-image-7.jpg',
    title: 'Assignment 7',
    duration: '3/6/9/12 Months',
  },
  {
    id: 8,
    image: 'path-to-image-8.jpg',
    title: 'Assignment 8',
    duration: '3/6/9/12 Months',
  },
  {
    id: 9,
    image: 'path-to-image-9.jpg',
    title: 'Assignment 9',
    duration: '3/6/9/12 Months',
  },
];

const Assignment = () => {
 
  

  return (
    <div  className='bg-[#17212E]'>
      
      
    <div>
      <section className=" text-bg-[#17212E] pb-12 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-8"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-12">
          {programs.map((program) => (
            <div key={program.id} className="bg-[white] p-6 rounded-2xl  text-center border border-2 border-[#F5CF6B]">
              <div className="w-full h-[w-full] mb-4">
                <img
                  src={question2}
                  alt={program.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-lg font-semibold ">{program.title}</h3>
              <p className="text-gray-600 mb-4 flex justify-center"><>Deadline:&nbsp;</>30 mins</p>
              <Link to={"/skill_center/Question/"} className="bg-yellow-500 text-[#17212E] px-4 py-2 rounded-lg hover:text-white hover:bg-[#17212E]">
                Start Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
    <Mentor />
    </div>
  );
};

export default Assignment;
