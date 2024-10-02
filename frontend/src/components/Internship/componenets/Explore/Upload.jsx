import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { RiVideoFill } from "react-icons/ri";
import api from "../../../../api/api";
import { useAuth } from "../../../../AuthContext";

function Upload({value}) {
    const {setFlash} = useAuth()
    const [FirstProj, SetFirstProj] = useState({
        project1: "",
      });
      const [SecondProj, SetSecondProj] = useState({
        project1: "",
        project2: "",
       
      });
      const [ThirdProj, SetThirdProj] = useState({
        project1: "",
        project2: "",
        project3: "",
       
      });
      const [FourthProj, SetFourthProj] = useState({
        project1: "",
        project2: "",
        project3: "",
        project4: "",
      });
      const handleSubmit1 = async(project1)=>
      {
        try
        {
            
            const res = await api.post('/project1',project1)
            console.log(res);
            if(res.status === 201)
            {
                setFlash(['Project1 link submitted sucessfully','info'])
            }
        }
        catch(err)
        {
            console.log(err);
        }
      }
       const handleSubmit2 = async()=>
       {
            try
            {
                const projectLinks = {
                    project1: SecondProj.project1 || '',
                    project2: SecondProj.project2 || '',
                   
                };
                const res = await api.post('/project2',projectLinks);
                if(res.status === 201)
                {
                    setFlash(['Project Link is submitted sucessfully', 'info'])
                }
            }
            catch(err)
            {
                console.log(err);
            }
       }

       const handleSubmit3 = async()=>
       {
            try
            {
                const projectLinks = {
                    project1: ThirdProj.project1 || '',
                    project2: ThirdProj.project2 || '',
                    project3: ThirdProj.project3 || ''
                }
                const res = await api.post('/project3',projectLinks);
                if(res.status === 201)
                {
                    setFlash(['Project Link is submittes sucessfully','info'])
                }
            }
            catch(err)
            {
                console.log(err)
            }
       }
       const handleSubmit4 = async()=>
       {
        try
        {
            const projectLinks = {
                project1: FourthProj.project1 || '', 
                project2: FourthProj.project2 || '',
                project3: FourthProj.project3 || '',
                project4: FourthProj.project4 || '',
            };
            const res = await api.post('/project4',projectLinks)
            if(res.status === 201)
                {
                    setFlash(['Project Link is submittes sucessfully','info'])
                }
        }
        catch(err)
        {
            console.log(err)
        }
       }

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
      
        
        const [isModalOpen1, setIsModalOpen1] = useState(false);
      
        const openModal1 = () => setIsModalOpen1(true);
        const closeModal1 = () => setIsModalOpen1(false);
      
        const [isModalOpen2, setIsModalOpen2] = useState(false);
      
        const openModal2 = () => setIsModalOpen2(true);
        const closeModal2 = () => setIsModalOpen2(false);
      
        const [isModalOpen3, setIsModalOpen3] = useState(false);
      
        const openModal3 = () => setIsModalOpen3(true);
        const closeModal3 = () => setIsModalOpen3(false);
      
        return (
          <div>
           <div >
                        {value=="15 Days"?<div className='flex justify-evenly'><button   onClick={openModal}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project1</h1></button></div>:""}
                        {value==1?<div className='flex justify-evenly'><button   onClick={openModal}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project1</h1></button><button   onClick={openModal1}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project2</h1></button></div>:""}
                        {value==2?<div  className='flex justify-evenly'><button   onClick={openModal}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project1</h1></button><button   onClick={openModal1}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project2</h1></button><button   onClick={openModal2}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project3</h1></button></div>:""}
                        {value==3?<div  className='flex justify-evenly'><button   onClick={openModal}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20 '>Project1</h1></button><button   onClick={openModal1}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project2</h1></button><button   onClick={openModal2}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project3</h1></button><button   onClick={openModal3}><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project4</h1></button></div>:""}
                    </div>
          
      {/* model0 */}
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2 className="text-xl font-bold">Project 1: UI/UX Design Challenge</h2>
                    <p className="mt-2">
                        Welcome to your first UI/UX project! In this project, you'll apply the principles of user interface and user experience design to create a responsive and user-friendly web application.
                    </p>
                    <h3 className="text-lg mt-4">Project Objectives:</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Understand the key concepts of UI/UX design.</li>
                        <li>Conduct user research to inform your design decisions.</li>
                        <li>Create wireframes and prototypes for your web application.</li>
                        <li>Apply visual design principles to enhance user experience.</li>
                        <li>Test your design with real users and iterate based on feedback.</li>
                    </ul>
                    <p className="mt-4">
                        This project is a great opportunity to showcase your design skills and creativity. Be sure to document your process and share your work with the class!
                    </p>
                    </Modal>
{/* model1          */}          
                    <Modal isOpen={isModalOpen1} onClose={closeModal1}> 
                    <h2 className="text-xl font-bold">Project 2: User Research & Personas</h2>
                    <p className="mt-2">
                        In this project, you'll focus on understanding your users. You'll conduct user research and create detailed user personas to guide your design decisions.
                    </p>
                    <h3 className="text-lg mt-4">Project Objectives:</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Conduct surveys and interviews to gather user insights.</li>
                        <li>Analyze the data to identify user needs and pain points.</li>
                        <li>Create detailed user personas representing different user types.</li>
                        <li>Present your findings in a clear and visually appealing format.</li>
                    </ul>
                    <p className="mt-4">
                        This project will lay the foundation for your design work by helping you deeply understand who your users are and what they need.
                    </p>
                    </Modal>

{/* model2 */}
                    <Modal isOpen={isModalOpen2} onClose={closeModal2}>
                    <h2 className="text-xl font-bold">Project 3: Wireframing & Prototyping</h2>
                    <p className="mt-2">
                        In this project, you'll translate your research into tangible design solutions. You'll create wireframes and prototypes to visualize your ideas.
                    </p>
                    <h3 className="text-lg mt-4">Project Objectives:</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Sketch low-fidelity wireframes for your application.</li>
                        <li>Create high-fidelity prototypes using design tools like Figma or Sketch.</li>
                        <li>Focus on usability, layout, and navigation.</li>
                        <li>Iterate on your designs based on user feedback.</li>
                    </ul>
                    <p className="mt-4">
                        This project is essential for translating your ideas into practical, testable designs. Make sure your wireframes and prototypes are user-friendly and intuitive.
                    </p>
                    </Modal>
{/* model3 */}
                    <Modal isOpen={isModalOpen3} onClose={closeModal3}>
                    <h2 className="text-xl font-bold">Project 4: Visual Design & Branding</h2>
                    <p className="mt-2">
                        This project focuses on the visual aspects of your application. You'll develop a cohesive visual design and branding that aligns with your project's goals and user needs.
                    </p>
                    <h3 className="text-lg mt-4">Project Objectives:</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Develop a color scheme, typography, and iconography that reflect your brand.</li>
                        <li>Design key visual elements like buttons, forms, and navigation menus.</li>
                        <li>Ensure consistency across all screens and interactions.</li>
                        <li>Create a style guide to maintain visual consistency throughout the project.</li>
                    </ul>
                    <p className="mt-4">
                        This project is crucial for making your application visually appealing and aligned with your brand's identity. Focus on creating a memorable and user-friendly design.
                    </p>
                    </Modal>

          </div>
        );
      };
      
      
  return (
    <div  className='bg-[#D4CAAA]  font-times'>
        <div className='flex justify-center items-center h-full'>
                 <div className='bg-[#17212E] mb-10 md:w-[600px] rounded-md md:rounded-3xl'>
                    <div className='flex justify-evenly  p-10'>
                    <button className='bg-[#F5CF6B] w-24 h-10 rounded-lg font-bold'>Upload</button>
                    <h1 className='text-[#F5CF6B] mt-2 text-xl'>Submitted</h1>
                    </div>
                    <hr className='bg-white mb-4'/>
                    <div className='mb-5'>
                    {/* <button><FaCirclePlus className='mt-1 mx-1'/>
                    </button><h1 className='text-xl'> Add a file:&nbsp;   &nbsp;</h1> */}
                    {/* <div >
                        {value=="15 Days"?<div className='flex justify-evenly'><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project1</h1></div>:""}
                        {value==1?<div className='flex justify-evenly'><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project1</h1><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project2</h1></div>:""}
                        {value==2?<div  className='flex justify-evenly'><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project1</h1><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project2</h1><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project3</h1></div>:""}
                        {value==3?<div  className='flex justify-evenly'><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20 '>Project1</h1><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project2</h1><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project3</h1><h1 className='text-xl bg-[#F5CF6B] flex justify-evenly items-center text-[#17212E] rounded-md h-10 w-20'>Project4</h1></div>:""}
                    </div> */}
                    <ParentComponent />
                    </div>
                    
                    {
                     value=="15 Days"? 
                    <div className='flex mb-5 justify-between text-white md:px-6 p-3'>
                     <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
                     <form
  onSubmit={(e) => {
    e.preventDefault();
    if (FirstProj.project1 === '') {
      alert("Please enter the Drive Link");
    } else {
      
      console.log(FirstProj.project1);
    }
  }}
>
  <h1 className="text-xl">Project 1 Drive Link</h1>
  <input
    required
    type="text"
    value={FirstProj.project1}
    onChange={(e) => SetFirstProj({ ...FirstProj, project1: e.target.value })}
    className="md:w-[300px] rounded-lg mx-2 text-black"
    placeholder="Enter the Drive Link"
  />
  <button className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold" type="submit">
    Upload
  </button>
</form>

                      </div>
                    </div> :""
                    }
                    {
                     value==1? 
                     <form
  onSubmit={(e) => {
    e.preventDefault();
   
   
  }}
>
  <div className="mb-5">
    <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
      <h1 className="text-xl">Project 1 Drive Link</h1>
      <input
        type="text"
        required
        value={SecondProj.project1}
        onChange={(e) => SetSecondProj({ ...SecondProj, project1: e.target.value })}
        className="md:w-[300px] rounded-lg mx-2 text-black"
        placeholder="Enter the Drive Link"
      />
      <button 
      className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold" 
      type="submit"
      onClick={() => {
        if (!SecondProj.project1) {
          alert("Project 1 Drive Link is not filled");
        } else {
          handleSubmit2()
          console.log("Project 1 Drive Link:", SecondProj.project1);
        }
      }}
      >
        Upload
      </button>
    </div>

    <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
      <h1 className="text-xl">Project 2 Drive Link</h1>
      <input
        type="text"
        required
        value={SecondProj.project2}
        onChange={(e) => SetSecondProj({ ...SecondProj, project2: e.target.value })}
        className="md:w-[300px] rounded-lg mx-2 text-black"
        placeholder="Enter the Drive Link"
      />
      <button className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold" 
      type="submit"
      onClick={() => {
        if (!SecondProj.project2) {
          alert("Project 1 Drive Link is not filled");
        } else {
          
          handleSubmit2();
        }
      }}
      >
        Upload
      </button>
    </div>
  </div>
</form>
 :""
                    }{
                      value==2? 
                      <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        // This can be empty if each button handles its own validation
                      }}
                    >
                      <div className="mb-5">
                        <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
                          <h1 className="text-xl">Project 1 Drive Link</h1>
                          <input
                            required
                            type="text"
                            value={ThirdProj.project1}
                            onChange={(e) => SetThirdProj({ ...ThirdProj, project1: e.target.value })}
                            className="md:w-[300px] rounded-lg mx-2 text-black"
                            placeholder="Enter the Drive Link"
                          />
                          <button
                            className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold"
                            type="button" // Change to type="button" to prevent form submission
                            onClick={() => {
                              if (!ThirdProj.project1) {
                                alert("Project 1 Drive Link is not filled");
                              } else {
                                // Handle Project 1 Upload
                                handleSubmit3();
                                console.log("Project 1 Drive Link:", ThirdProj.project1);
                              }
                            }}
                          >
                            Upload
                          </button>
                        </div>
                    
                        <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
                          <h1 className="text-xl">Project 2 Drive Link</h1>
                          <input
                            required
                            type="text"
                            value={ThirdProj.project2}
                            onChange={(e) => SetThirdProj({ ...ThirdProj, project2: e.target.value })}
                            className="md:w-[300px] rounded-lg mx-2 text-black"
                            placeholder="Enter the Drive Link"
                          />
                          <button
                            className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold"
                            type="button" // Change to type="button" to prevent form submission
                            onClick={() => {
                              if (!ThirdProj.project2) {
                                alert("Project 2 Drive Link is not filled");
                              } else {
                                // Handle Project 2 Upload
                                handleSubmit3();
                                console.log("Project 2 Drive Link:", ThirdProj.project2);
                              }
                            }}
                          >
                            Upload
                          </button>
                        </div>
                    
                        <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
                          <h1 className="text-xl">Project 3 Drive Link</h1>
                          <input
                            required
                            type="text"
                            value={ThirdProj.project3}
                            onChange={(e) => SetThirdProj({ ...ThirdProj, project3: e.target.value })}
                            className="md:w-[300px] rounded-lg mx-2 text-black"
                            placeholder="Enter the Drive Link"
                          />
                          <button
                            className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold"
                            type="button" // Change to type="button" to prevent form submission
                            onClick={() => {
                              if (!ThirdProj.project3) {
                                alert("Project 3 Drive Link is not filled");
                              } else {
                                // Handle Project 3 Upload
                                handleSubmit3();
                                console.log("Project 3 Drive Link:", ThirdProj.project3);
                              }
                            }}
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    </form>
                    
                    
 :""
                     }{
                      value==3? 
                      <div className="mb-5">
                      <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
                        <h1 className="text-xl">Project 1 Drive Link</h1>
                        <input
                          required
                          type="text"
                          value={FourthProj.project1}
                          onChange={(e) => SetFourthProj({ ...FourthProj, project1: e.target.value })}
                          className="md:w-[300px] rounded-lg mx-2 text-black"
                          placeholder="Enter the Drive Link"
                        />
                        <button
                          className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold"
                          onClick={() => {
                            if (!FourthProj.project1) {
                              alert("Project 1 Drive Link is not filled");
                            } else {
                             handleSubmit4()
                            }
                          }}
                        >
                          Upload
                        </button>
                      </div>
                    
                      <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
                        <h1 className="text-xl">Project 2 Drive Link</h1>
                        <input
                          required
                          type="text"
                          value={FourthProj.project2}
                          onChange={(e) => SetFourthProj({ ...FourthProj, project2: e.target.value })}
                          className="md:w-[300px] rounded-lg mx-2 text-black"
                          placeholder="Enter the Drive Link"
                        />
                        <button
                          className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold"
                          onClick={() => {
                            if (!FourthProj.project2) {
                              alert("Project 2 Drive Link is not filled");
                            } else {
                              // Proceed with the upload logic
                             handleSubmit4()
                            }
                          }}
                        >
                          Upload
                        </button>
                      </div>
                    
                      <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
                        <h1 className="text-xl">Project 3 Drive Link</h1>
                        <input
                          required
                          type="text"
                          value={FourthProj.project3}
                          onChange={(e) => SetFourthProj({ ...FourthProj, project3: e.target.value })}
                          className="md:w-[300px] rounded-lg mx-2 text-black"
                          placeholder="Enter the Drive Link"
                        />
                        <button
                          className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold"
                          onClick={() => {
                            if (!FourthProj.project3) {
                              alert("Project 3 Drive Link is not filled");
                            } else {
                              // Proceed with the upload logic
                              handleSubmit4()
                            }
                          }}
                        >
                          Upload
                        </button>
                      </div>
                    
                      <div className="flex justify-between items-center text-white md:px-6 p-3 mt-4">
                        <h1 className="text-xl">Project 4 Drive Link</h1>
                        <input
                          required
                          type="text"
                          value={FourthProj.project4}
                          onChange={(e) => SetFourthProj({ ...FourthProj, project4: e.target.value })}
                          className="md:w-[300px] rounded-lg mx-2 text-black"
                          placeholder="Enter the Drive Link"
                        />
                        <button
                          className="bg-[#F5CF6B] w-20 h-10 rounded-lg font-bold"
                          onClick={() => {
                            if (!FourthProj.project4) {
                              alert("Project 4 Drive Link is not filled");
                            } else {
                              // Proceed with the upload logic
                             handleSubmit4()
                            }
                          }}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                    
                     :""
                     
                     }
                 </div>
        </div>
    </div>
  )
}

export default Upload