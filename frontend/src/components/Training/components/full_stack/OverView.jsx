import React, { useEffect, useState } from 'react'
import "./overview.css"
import question from "../../assets/images/question.jpeg"
import Aos from "aos";
import 'aos/dist/aos.css'
import Stack from './Stack';
import Benifit from './Benifit';
import drive from "../../assets/images/Drive.jpeg"

function OverView() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handle = () => {
    setShowForm(false);
  }

  const [Syllabus, setSyllabus] = useState(false)
  const handleSyllabus = () => {
    setSyllabus(true);
  };

  const handleClose = () => {
    setSyllabus(false);
  }

  const SyllabusContent = [{
    id: 1,
    Topic: "Introduction to the Course",
    Drive_url: "https://drive.google.com/drive/home",
  }, {
    id: 2,
    Topic: "Basic concepts",
    Drive_url: "https://drive.google.com/drive/home",
  }, {
    id: 3,
    Topic: "Course overview",
    Drive_url: "https://drive.google.com/drive/home",
  }]

  const SyllabusSchedule = () => {
    return (
      <div className="min-h-screen p-4 flex justify-center max-w-full align-middle items-center font-times rounded-xl">
        <div className="w-full mx-auto bg-white h-[400px]  overflow-x-hidden overflow-scroll md:overflow-hidden md:hover:overflow-scroll md:overflow-x-hidden   shadow-md rounded-xl border-2 border-[#F5CF6B]">
          <div className='flex justify-between px-4'>
            <h1 className="text-3xl font-bold  my-4">Course Syllabus</h1>

            <button onClick={handleClose} className="text-gray-500">✕</button>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="mt-2 text-gray-700">
              Welcome to the course! This syllabus provides an overview of the course structure, schedule, and policies.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold">Course Schedule</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Week</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Topic</th>
                    <th className="py-2 px-2 border-b-2 border-gray-300 text-left">Readings</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    SyllabusContent.map((content) => (

                      <tr>
                        <td className="py-2 px-4 border-b border-gray-300">{content.id}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{content.Topic}</td>
                        <td className="py-2 px-4 border-b border-gray-300"><a href={content.Drive_url}><img className='size-10' src={drive} alt="" /></a></td>

                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="relative h-screen font-times">

      <div className={` ${showForm ? 'opacity-25' : ''}  ${Syllabus ? 'opacity-25 ' : ''} z-0`}>
        <Stack />
        <div className={`m-5 md:m-10 h-full `}>
          <h1 className='font-bold text-3xl'>OVERVIEW</h1>
          <div className=' grid grid-cols-1 mt-5 md:grid-cols-2'>
            <div className='overview m-2 -ml-0  mb-8 md:-mb-0' >
              <p className=' my-3 text-xl  mx-5 md:text-3xl  font-[professional]  '>
                The Fullstack Live Class is an immersive, interactive program designed to transform you into a proficient fullstack developer. Covering both front-end and back-end development, the course includes HTML, CSS, JavaScript, React.js, Node.js, Express.js, SQL, NoSQL, and deployment strategies. Through live sessions with industry experts, hands-on projects, and collaborative learning, you’ll gain practical experience and build a portfolio of real-world work. With access to mentorship, comprehensive learning materials, and career support, this program is ideal for aspiring developers, professionals transitioning to tech, and those wanting to expand their web development skills.
              </p>
            </div>
            <div className='flex justify-center align-middle   h-[420px] md:h-[480px]'  >
              <div className='question p-7 md:p-10 -mb-10 rounded-xl'>
                <img className=' size-[250px] md:size-[300px]' src={question} alt="" />
                <div className='text-center text-2xl mt-3 font-normal'>
                  <h1>Full Stack</h1>
                  <h1 className=''>Development</h1>
                  <div >


                    <div className="">
                      {(
                        <button onClick={handleClick} className={`my-8 font-extralight  text-xl rounded-md hover:text-white hover:bg-[#17212E] bg-[#F5CF6B] h-10 w-52 `}>REGISTER NOW</button>
                      )}
                    </div>
                  </div>
                </div>

                <button onClick={handleSyllabus} className='text-center  bg-[#F5CF6B] w-56 md:w-72 font-normal text-2xl my-8 rounded-md h-12 hover:text-white hover:bg-[#17212E]'  >Syllabus & schedule</button>
              </div>
            </div>
          </div>
        </div>
        <Benifit />
      </div>



      {/* RegisterForm */}

      <div className={` inset-0 bg-cover bg-center ${showForm ? 'fixed' : ''}`} >
        {showForm &&
          <div>
            <div className="flex justify-center align-middle mx-3 md:-m-0 items-center min-h-screen ">
              <div className="bg-white p-6 md:p-8 rounded-2xl   w-full max-w-md border border-2 border-[#F5CF6B]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-center">Register Now!</h2>
                  <button onClick={handle} className="text-gray-500">✕</button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="Enter your email ID" className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE] " />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter your Name" className="mt-1 block w-full  p-2  placeholder-black  rounded-md bg-[#FAF2DE]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="+91" className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Domain Of Interest <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter your Preferred Domain" className="placeholder-black mt-1 block w-full p-2   bg-[#FAF2DE] rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Choose Your Plan <span className="text-red-500">*</span></label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['3 Months', '6 Months', '9 Months', '12 Months'].map((plan, index) => (
                        <div key={index} className="flex-1 bg-[#FAF2DE] p-2 text-center  text-sm border border-gray-300 rounded-md cursor-pointer ">
                          <p className='font-semibold'>{plan}</p>
                          <p className='font-bold'>Rs: 6000</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-[#F5CF6B] text-white p-2 rounded-md mt-4">Register</button>
                </form>
              </div>
            </div>
          </div>}

      </div>

      {/* SyllabusSchedule */}
      <div className={` inset-0 bg-cover bg-center ${Syllabus ? 'fixed left-[60px]' : ''}`} >
        {Syllabus &&
          <SyllabusSchedule />
        }
      </div>
    </div>
  )
}

export default OverView