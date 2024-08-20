import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillFileEarmarkTextFill } from "react-icons/bs"
import About from './About';
import { RiVideoFill } from "react-icons/ri";
import Video from "../../assets/images/Video_image.png"
import DayUpload from './DayUpload';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white font-times text-lg font-bold">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex  items-center">
          <Link to={"/Explore"}><h1>{"<"} &nbsp; Back</h1></Link>
          </div>
          <div>
          <img src={logo} alt="" className='h-16 '/>
         </div>
      </div>
      </nav>
    </header>
  );
};

const DayDetail = () => {
  const { day } = useParams();
 
  // Dummy content for each day. Replace with actual content.
  
 
  const content = {
    1: {
      title: "Day 1: Introduction to the Course",
      description: "Welcome to Day 1! Today we will cover the basics...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      videos: ["Video 1", "Video 2"],
    },
    2: {
      title: "Day 2: Advanced Topics",
      description: "Welcome to Day 2! Today we will dive deeper...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      videos: ["Video 3", "Video 4"],
    },
    // Add more days as needed
  };

  const dayContent = content[day] || {
    title: `Day ${day}: Content not available`,
    description: "No content available for this day.",
    videos: [],
  };

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded shadow-lg max-w-lg w-full">
          <button onClick={onClose} className="ml-auto block text-gray-500">
            &times;
          </button>
          <div>{children}</div>
        </div>
      </div>
    );
  };
  const ParentComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <div>
        <button
          onClick={openModal}
        >   <div className='w-[300px] h-12 md:w-[400px] bg-white mb-5 rounded-md'>
            
        <div className='text-xl flex p-2 justify-between'>
        <h1>Brief for day one</h1>
        <RiVideoFill color='green' size={30} className='rounded-full'/>
       </div>
       </div>
        </button>
      
  
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold">Day 1: Introduction to the Course</h2>
          <p className="mt-2">
            Welcome to Day 1 of the online course! Today, we will cover the basics
            of the course, introduce the key topics, and outline what you can
            expect in the coming days.
          </p>
          <h3 className="text-lg mt-4">Agenda:</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Introduction to the course objectives</li>
            <li>Overview of the course structure</li>
            <li>Key resources and materials</li>
            <li>Interactive Q&A session</li>
          </ul>
          <p className="mt-4">
            Make sure to participate in the discussions and ask any questions you
            may have. Let's get started!
          </p>
        </Modal>
      </div>
    );
  };
  
  
  // Example tasks
  const tasks = [
    {
      
    
      id: 1,
      title: "Task 1: Building a Responsive Dashboard with React and Chart.js",
      description: "Develop a dashboard interface with data visualizations using Chart.js.",
      agenda: [
        "Set up a React project with Create React App",
        "Integrate Chart.js for data visualization",
        "Design responsive components using Tailwind CSS",
        "Fetch and display real-time data from an API"
      ],
      notes: "Ensure that the dashboard is responsive and performs well on both desktop and mobile devices."
    },
    // Add more tasks here as needed
  ];
  
  const ParentComponentTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
  
    const openModal = (task) => {
      setCurrentTask(task);
      setIsModalOpen(true);
    };
  
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <div>
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => openModal(task)}
            className="w-[300px] h-12 md:w-[400px] bg-white mb-5 rounded-md flex p-2 justify-between items-center"
          >
            <h1 className='text-xl'>Task</h1>
             <BsFillFileEarmarkTextFill color='red' size={25}/>
          </button>
        ))}
  
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {currentTask && (
            <>
              <h2 className="text-xl font-bold">{currentTask.title}</h2>
              <p className="mt-2">{currentTask.description}</p>
              <h3 className="text-lg mt-4">Agenda:</h3>
              <ul className="list-disc list-inside mt-2">
                {currentTask.agenda.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{currentTask.notes}</p>
            </>
          )}
        </Modal>
      </div>
    );
  };
  
  

  return (
    <div className='bg-[#D4CAAA] h-full font-times'>
        <Header />
        <About />
    <div className="p-3 md:p-16">
        <div>
      <h1 className="text-2xl md:text-4xl font-bold ">{dayContent.title}</h1>
      {/* <p className="mt-4">{dayContent.description}</p> */}
      <div className='flex justify-evenly flex-wrap my-5 md:my-10'>
        <div className='flex justify-center '>   
            
          
            <ParentComponent />
        </div>
        <div className='flex justify-center'>   
          {/* <div className='w-[300px] h-10 rounded-md md:w-[400px]  bg-white'>
            <div className='flex p-2 justify-between align-middle'>
                 
                <BsFillFileEarmarkTextFill color='red' size={25}/>
            </div>
          
          </div> */}
           <ParentComponentTask />
        </div>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
        <div>
        <h2 className="text-2xl md:text-4xl font-bold ">Videos</h2>
        <div className='rounded-full'>
           <img className='p-10  rounded-[50px] h-full w-full' src={Video} alt="" />
        </div>
        </div>    
         <div >
            <h1 className='text-2xl md:text-4xl font-bold' >Description</h1>
            <p className='p-10 md:text-2xl'>{dayContent.description}</p>
         </div>
      </div>
      {/* <ul className="mt-2">
        {dayContent.videos?.map((video, index) => (
          <li key={index} className="mt-1">
            {video}
          </li>
        ))}
      </ul> */}
      </div>
    </div>
    <DayUpload />
    </div>
  );
};

export default DayDetail;
