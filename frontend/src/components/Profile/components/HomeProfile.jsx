import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jfif";
import EditProfile from "./EditProfile";
import ecommerce from "../assets/ecommerce.png";
import admin from "../assets/admin.png";
import library from "../assets/library.jfif";
import "./HomeProfile.css";
import useDrivePicker from 'react-google-drive-picker';
import DriveFilePicker from "./DriveFilePicker";
import Aos from "aos";
import "aos/dist/aos.css";
import api from "../../../api/api";
import AddProject from "./AddProject";
import {useAuth} from "../../../AuthContext"

function HomeProfile() {
  const [editProfile, setEditProfile] = useState(false);
  const [Resdata, SetResData] = useState([]);
  const [fullName, SetfullName] = useState("");
  const [EmailId, SetEmailId] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [CollegeName, setCollegeName] = useState("");
  const [github, setGithub] = useState("");
  const [LinkedIn, SetLinkedIn] = useState("");
  const [Portfolio, SetPortfolio] = useState("");
  const [domain, setDomain] = useState("");
  const [Profile, SetProfile] = useState("");
  const [Resume, SetResume] = useState([]);
  const [file, setFile] = useState(null); // State to hold the uploaded image
  const {setFlash} = useAuth()
  const [addProject,setAddProject]=useState(false);
  const [Projects,SetProjects] = useState([]);
  const handleData1 = async (FullName,phone, college, github, LinkedIn, Portfolio, Profile, domain) => {
    setPhoneNumber(phone);
    setCollegeName(college);
    setGithub(github);
    SetLinkedIn(LinkedIn);
    SetPortfolio(Portfolio);
    setDomain(domain);
    SetProfile(Profile);
    SetfullName(FullName);
    console.log(FullName);
    try {
      const formData = new FormData();
      formData.append('username',FullName)
      formData.append('PhoneNumber', phone);
      formData.append('CollegeName', college);
      formData.append('github', github);
      formData.append('LinkedIn', LinkedIn);
      formData.append('Portfolio', Portfolio);
      formData.append('domain', domain);
  
      if (file) {
        formData.append('ProfilePicture', file); 
      } else if (Profile) {
        formData.append('ProfileBase64', Profile); 
      }
  
      formData.append('Resume', JSON.stringify(Resume)); 
      // Log formData to check values
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
  
      const res = await api.post('/registerProfile', formData, {
       
      });
      console.log("Profile updated:", res.data);
      fetchDetails();
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };
  
  // Fetch profile details
  const fetchDetails = async () => {
    try {
      const res = await api.get('/user');
      console.log(res.data);
      SetResData(res.data);
      SetEmailId(res.data.email)
      SetfullName(res.data.username);
      SetPortfolio(res.data.Portfolio);
      setPhoneNumber(res.data.phone_number);
      setCollegeName(res.data.college);
      setGithub(res.data.github_link);
      SetLinkedIn(res.data.linkedIn_link);
      setDomain(res.data.Interest);
      SetProfile(res.data.ProfilePicture);
      SetResume(res.data.Resume);
    } catch (err) {
      console.error("Error fetching profile details:", err);
    }
  };

  useEffect(() => {
    setFlash(['Kindly update your profile before proceeding', 'info']); 
    Aos.init();
    fetchDetails();
    
  }, []);
  useEffect(()=> {
    const getProjects = async()=>
      {
        try
        {
          const res = await api.get('/getprojects');
          console.log(res);
          SetProjects(res.data);
          
        }
        catch(err)
        {
          console.log(err);
          
        }
      }
      getProjects();
   })

  const [openPicker, data, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.REACT_APP_DRIVE_CLIENT_ID,
      developerKey: process.env.REACT_APP_DEVELOPER_KEY,
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
    });
    window.alert("You are clicking picker");
  };

  useEffect(() => {
    if (data) {
      const files = data.docs.map((i) => ({
        name: i.name,
        driveId: i.driveId,
        url: i.url,
        size: i.size,
        mimeType: i.mimeType,
      }));
      SetResume(files);
    }
  }, [data]);
  const [projects,setProjects]=useState([
    {
      
      name:"Foot Style",
      
      description:"It is an E-commerce website lorem ipsum",
      githubLink:'https://github.com/user/portfolio',
      driveLink:'https://github.com/user/portfolio',

    },
    {
      
      name:"Library ManageMent System",
   
      description:"It is an E-commerce website lorem ipsum",
      githubLink:'https://github.com/user/portfolio',
      driveLink:'https://github.com/user/portfolio',
    },
    
    {
      
      name:"Admin Dashboard",
     
      description:"It is an E-commerce website lorem ipsum",
      githubLink:'https://github.com/user/portfolio',
      driveLink:'https://github.com/user/portfolio',
    },
  ]);
  const [newProject, setNewProject] = useState({
    ProjectName: '',
    ProjectDescription: '',
    ProjectGithub: '',
    ProjectLink: '',
   
  });
  const handleInputChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };
 const handleFormSubmit = ()=>
 {

 }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        SetProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }

    const handleFormSubmit = async()=>
    {
        try
        {
          const res = await api.get('/addProject',addProject);
          console.log(res.data);
        }
        catch(err)
        {
          console.log(err);

        }
    }

 
  };

  return (
    <div className="w-full h-full font-times max-sm:w-full">
      <div className="flex w-full h-full max-sm:w-full">
        <div className="h-full w-[100%] ml-[10px] md:mr-[10px] flex flex-col">
          <div className="w-[100%] pb-2 mb-[50px] bg-Yellow relative top-[50px] pt-[50px] rounded-md max-sm:w-[98%]">
            <img
              src={ Profile || profile}
              className="h-[100px] w-[100px] rounded-full absolute top-[-50px] left-[10px]"
            />
            <div className="w-[100%] h-full pl-[150px] max-sm:pl-[100px] max-sm:w-[97%]">
              <div className="max-sm:w-[100%]">
                <span className="max-sm:w-[100%] flex justify-between">
                  <h1 className="text-lg font-semibold text-Darkblue">
                    {fullName ? fullName : "John Doe"}
                  </h1>
                  <p className="md:pr-[200px] text-lg font-semibold text-Darkblue">
                    {PhoneNumber ? PhoneNumber : "123456789"}
                  </p>
                </span>
                <span className="flex text-lg font-semibold text-Darkblue mt-[20px]">
                  <p>{EmailId ? EmailId : "abcde@gmail.com"}</p>
                </span>
                <span className="flex text-lg font-semibold text-Darkblue mt-[20px]">
                  <p>{CollegeName ? CollegeName : "ABC College of Engineering and Technology"}</p>
                </span>
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>GitHub Link:</h1>
                  <input
                    type="text"
                    value={github}
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md max-sm:w-[100%]"
                    readOnly
                  />
                </span>
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>LinkedIn Profile:</h1>
                  <input
                    type="text"
                    value={LinkedIn}
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md max-sm:w-[100%]"
                    readOnly
                  />
                </span>
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Portfolio link:</h1>
                  <input
                    type="text"
                    value={Portfolio}
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md max-sm:w-[100%]"
                    readOnly
                  />
                </span>
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Interests:</h1>
                  <input
                    type="text"
                    value={domain}
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md max-sm:w-[100%]"
                    readOnly
                  />
                </span>
                <div className="flex md:space-x-6 w-full max-sm:flex-col">
                  <span className="w-[50%] flex space-y-2 flex-col text-lg font-semibold text-Darkblue mt-[20px] max-sm:w-full">
                    <h1>Upload your resume</h1>
                    <DriveFilePicker />
                  </span>
                  <span className="w-[50%] flex space-y-2 flex-col text-lg font-semibold text-Darkblue mt-[20px] max-sm:w-full">
                    <h1>Edit your profile</h1>
                    <button
                      className="bg-Darkblue text-Yellow font-bold text-lg border-none ring-2 ring-Darkblue rounded-md w-[15%] max-sm:w-[30%]"
                      onClick={() => setEditProfile(true)}
                    >
                      Edit
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* see edit profile component for better understanding */}

          <EditProfile editProfile={editProfile} onClose={() => setEditProfile(false)} handleData1={handleData1} />

          {/* Assigned work */}
          <div className="w-full h-full bg-Yellow mt-[10px] rounded-md p-2 mb-[10px] pl-[20px] max-sm:w-[98%]">
            {/* <h1 className="font-bold text-lg text-Darkblue ">Assigned Trainings /Bootcamps/ Workshops</h1>
            <div className="w-[26%] max-sm:w-[98%] mt-[10px] border-1 border-white bg-Darkblue rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105">
              <img src={assigned1} className="rounded-md"/>
              <div className="p-2 ">
                <p className="text-center font-semibold text-Yellow text-lg">Full Stack Development</p>
                <p className="text-justify font-normal text-white text-md">learn full stack and build your own sites and make it functional</p>
              </div>
              <div className="w-full flex justify-end pb-[10px] pr-[10px]">
                <button className="text-Darkblue bg-Yellow rounded-[30px] ring-2 
                ring-Yellow w-[50%] ">Get Started</button>
              </div>

            </div> */}
            {/* Projects */}
            <div className="w-full space-y-2">
              <div className="w-full flex space-x-2 ">
              <h1 className="mt-[10px] font-bold text-lg">Projects</h1>
              <button className="ring-2 ring-Darkblue bg-Darkblue text-Yellow rounded-md px-2" onClick={()=>setAddProject(true)}>
                Add projects</button>
              </div>
              <AddProject addProject={addProject} onClose={()=>setAddProject(false)} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} newProject={newProject}/>
              <hr className="h-1 bg-Darkblue rounded-md mb-[10px]"/>
              {/* foot style */}
              {Projects.length > 0 ? (projects.map((project)=>(
                <div key={project.id} className="bg-Darkblue p-2 rounded-md flex w-full space-x-2 max-sm:flex-col">
                <div className="image h-[150px] w-[280px] max-sm:w-full">
                  <img src={ecommerce} className=" projectImage w-full h-full rounded-md"/>
                  <div  className="content text-White font-semibold p-[2px]">
                    <h1 className="text-lg font-bold text-Yellow underline">{project.name}</h1>
                    <p className="text-center">{project.description}</p>
                  </div>

                </div>
                <div className="w-full   ">
                    <h1 className="text-xl font-bold text-Yellow text-center">{project.name}</h1>
                    <div className="flex w-full md:justify-around max-sm:flex-col">
                      <span className="w-[45%] max-sm:w-[90%]">
                         <p className="text-white text-lg font-semibold">Github Link:</p>
                         <a className="text-Yellow text-lg font-semibold hover:underline" href={project.githubLink} >github link-click me</a>
                        {/* <input type="text" className="outline-none rounded-md w-full" placeholder="Enter your project repo link" /> */}
                      </span>
                      <span className="w-[45%] max-sm:w-[90%]">
                       <p className="text-white text-lg font-semibold">website Link:</p>
                       <a href={project.driveLink} className="text-Yellow text-lg font-semibold hover:underline">website-clickMe</a>
                        {/* <input type="text" className="outline-none rounded-md w-full " placeholder="provide if you have deployed" /> */}
                      </span>
                    </div>
                    <div className="flex w-full justify-around max-sm:flex-col">
                    <div className="flex w-[50%] mt-[30px] max-sm:mt-[20px] max-sm:w-full md:ml-[20px] space-x-2 ">
                      <span className="flex-col">
                        <p className="text-white text-lg font-bold">Working Model:</p>
                        <p className="text-white">(website video link)</p>
                      </span>
                      <button className="bg-White text-Yellow font-bold
                       text-lg border-none ring-2 ring-white 
                       rounded-md w-[20%] h-[30px] max-sm:w-[30%]">
                          <DriveFilePicker />
                       </button>
                    </div>
                    <div className="flex mt-[30px] w-[50%] max-sm:w-full max-sm:mt-[20px] md:ml-[20px] space-x-2 ">
                      <span className="flex-col">
                      <p className="text-white text-lg font-bold">Proposal:</p>
                      {/* <p className="text-white">(view the pdf)</p> */}
                      </span>
                      <button className="bg-White text-Yellow font-bold text-lg border-none ring-2
                       ring-white rounded-md w-[20%] h-[30px] max-sm:w-[30%] flex justify-center items-center">
                         <DriveFilePicker />
                       </button>
                    </div>
                    </div>
                </div>

              </div>



              ))) : (
                <h2>No projects To display</h2>
              )}
              
              
              
            </div>

          </div>

          
        </div>
      </div>
    </div>

  );
}
{/* <h1 className={`${isClick?" bg-Darkblue text-Yellow ":" bg-Yellow text-Darkblue "}`}></h1> */ }
export default HomeProfile;