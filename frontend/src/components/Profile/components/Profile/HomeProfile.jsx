import React, { useState,useEffect } from "react";
import profile from "../../assets/profile.jfif";
import gdrive from "../../assets/gdrive.webp";
import EditProfile from "./EditProfile";
import ecommerce from "../../assets/ecommerce.png"
import admin from "../../assets/admin.png";
import library from "../../assets/library.jfif";
import "./HomeProfile.css";
import { MdPictureAsPdf } from "react-icons/md";


import Aos from "aos";
import "aos/dist/aos.css";

function HomeProfile() {
  const[editProfile,setEditProfile]=useState(false);
  const [fullName,setFullName]=useState("")
  const [EmailId,setEmailId]=useState("")
  const [PhoneNumber,setPhoneNumber]=useState("")
  const [CollegeName,setCollegeName]=useState("")


  const handleData1=(name,email,phone,college)=>{
    setFullName(name);
    setEmailId(email);
    setPhoneNumber(phone);
    setCollegeName(college);
    console.log(fullName,EmailId,PhoneNumber,CollegeName);


  }
    
useEffect(() => {
  Aos.init();
}, []);
  return (
    <div className=" w-full h-full font-times max-sm:w-full">
      <div className="flex w-full h-full max-sm:w-full">
        {/* profile section deatila */}
        <div className="h-full w-[100%] ml-[10px] md:mr-[10px] flex flex-col">

          <div className="w-[100%] pb-2 mb-[50px] bg-Yellow relative top-[50px] pt-[50px] rounded-md max-sm:w-[98%] ">
            <img
              src={profile}
              className="h-[100px] w-[100px] rounded-full absolute top-[-50px] left-[10px]"
            />
            {/* details */}
            <div className=" w-[100%] h-full pl-[150px] max-sm:pl-[100px] max-sm:w-[97%]">
              <div className="max-sm:w-[100%]">
                {/* name and phone number */}
                <span className=" max-sm:w-[100%] flex justify-between">
                  <h1 className="text-lg font-semibold text-Darkblue">
                    {" "}
                    {fullName?fullName:"John Doe"}
                  </h1>
                  <p className="md:pr-[200px] text-lg font-semibold text-Darkblue">
                  {PhoneNumber?PhoneNumber:"123456789"}
                  </p>
                </span>
                {/* phone number */}
                <span className="flex text-lg font-semibold text-Darkblue mt-[20px]">
                  <p> {EmailId?EmailId:"abcde@gmail.com"}</p>
                </span>
                {/* college*/}
                <span className="flex text-lg font-semibold text-Darkblue mt-[20px]">
                  <p> {CollegeName?CollegeName:"abc college of engineering and technology"}</p>
                </span>
                {/* github link */}
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Github Link:</h1>
                  <input
                    type="text"
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md max-sm:w-[100%]"
                  />
                </span>
                {/* LinkedIn Profile */}
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>LinkedIn Profile:</h1>
                  <input
                    type="text"
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md max-sm:w-[100%]"
                  />
                </span>
                {/* portfolio link */}
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Portfolio link:</h1>
                  <input
                    type="text"
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md max-sm:w-[100%]"
                  />
                </span>
                {/* Interest */}
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Interests:</h1>
                  <input
                    type="text"
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md max-sm:w-[100%]"
                  />
                </span>
                {/* upload your resume */}
                <div className="flex md:space-x-6 w-full max-sm:flex-col">
                <span className=" w-[50%] flex space-y-2 flex-col text-lg font-semibold text-Darkblue mt-[20px] max-sm:w-full">
                  <h1>Upload your resume</h1>
                  <button className="bg-White text-Yellow font-bold text-lg border-none ring-2 ring-white rounded-md w-[15%] max-sm:w-[30%]">
                    <img src={gdrive} className="h-[30px] w-[40px] ml-[10px]" />
                  </button>
                </span>
                <span className="w-[50%] flex space-y-2 flex-col text-lg font-semibold text-Darkblue mt-[20px] max-sm:w-full">
                  <h1>Edit your profile</h1>
                  <button className="bg-Darkblue text-Yellow font-bold text-lg 
                  border-none ring-2 ring-Darkblue rounded-md w-[15%] max-sm:w-[30%]" onClick={()=>setEditProfile(true)}>
                    Edit{" "}
                  </button>
                </span>
                </div>
              </div>
            </div>
          </div>

          <EditProfile editProfile={editProfile} onClose={()=>setEditProfile(false)} handleData1={handleData1}/>

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
              <h1 className="mt-[10px] font-bold text-lg">Projects</h1>
              <hr className="h-1 bg-Darkblue rounded-md mb-[10px]"/>
              {/* foot style */}
              <div className="bg-Darkblue p-2 rounded-md flex w-full space-x-2 max-sm:flex-col">
                <div className="image h-[150px] w-[280px] max-sm:w-full">
                  <img src={ecommerce} className=" projectImage w-full h-full rounded-md"/>
                  <div  className="content text-White font-semibold p-[2px]">
                    <h1 className="text-lg font-bold text-Yellow underline">Foot Style</h1>
                    <p className="text-center">It is an E-commerce website lorem ipsum</p>
                  </div>

                </div>
                <div className="w-full   ">
                    <h1 className="text-xl font-bold text-Yellow text-center">Foot Style</h1>
                    <div className="flex w-full md:justify-around max-sm:flex-col">
                      <span className="w-[45%] max-sm:w-[90%]">
                         <p className="text-white text-lg font-semibold">Github Link:</p>
                        <input type="text" className="outline-none rounded-md w-full" placeholder="Enter your project repo link" />
                      </span>
                      <span className="w-[45%] max-sm:w-[90%]">
                       <p className="text-white text-lg font-semibold">website Link:</p>
                        <input type="text" className="outline-none rounded-md w-full " placeholder="provide if you have deployed" />
                      </span>
                    </div>
                    <div className="flex w-full justify-around">
                    <div className="flex w-[50%] mt-[30px] max-sm:mt-[20px] md:ml-[20px] space-x-2 ">
                      <span className="flex-col">
                        <p className="text-white text-lg font-bold">Working Model:</p>
                        <p className="text-white">(website video link)</p>
                      </span>
                      <button className="bg-White text-Yellow font-bold
                       text-lg border-none ring-2 ring-white 
                       rounded-md w-[20%] h-[30px] max-sm:w-[30%]">
                          <img src={gdrive} className="h-[30px] w-[50px] ml-[10px] max-sm:ml-[30px] max-sm:w-[50px]" />
                       </button>
                    </div>
                    <div className="flex mt-[30px] w-[50%] max-sm:mt-[20px] md:ml-[20px] space-x-2 ">
                      <span className="flex-col">
                      <p className="text-white text-lg font-bold">Proposal:</p>
                      {/* <p className="text-white">(view the pdf)</p> */}
                      </span>
                      <button className="bg-White text-Yellow font-bold text-lg border-none ring-2
                       ring-white rounded-md w-[20%] h-[30px] max-sm:w-[30%] flex justify-center items-center">
                          <MdPictureAsPdf className="text-Darkblue text-center " size={30}/>
                       </button>
                    </div>
                    </div>
                </div>

              </div>

              <div className="bg-Darkblue p-2 rounded-md flex w-full space-x-2 max-sm:flex-col">
                <div className="image h-[150px] w-[280px] max-sm:w-full">
                  <img src={library} className=" projectImage w-full h-full rounded-md"/>
                  <div  className="content text-White font-semibold p-[2px]">
                    <h1 className="text-lg font-bold text-Yellow underline text-center">Library Management System</h1>
                    <p className="text-center">It is an Management system using MERN stack</p>
                  </div>

                </div>
                <div className="w-full  ">
                    <h1 className="text-xl font-bold text-Yellow text-center">Library Management System</h1>
                    <div className="flex w-full justify-around max-sm:flex-col">
                    <span className="w-[45%] max-sm:w-[90%]">
                      <p className="text-white text-lg font-semibold">Github Link:</p>
                      <input type="text" className="outline-none rounded-md w-full" placeholder="Enter your project repo link" />
                    </span>
                    <span className="w-[45%] max-sm:w-[90%]">
                      <p className="text-white text-lg font-semibold">Vercel Link:</p>
                      <input type="text" className="outline-none rounded-md w-full " placeholder="provide if you have deployed" />
                    </span>
                    </div>
                    <div className="flex w-full justify-around">
                    <div className="flex w-[50%] mt-[30px] max-sm:mt-[20px] md:ml-[20px] space-x-2 ">
                      <span className="flex-col">
                        <p className="text-white text-lg font-bold">Working Model:</p>
                        <p className="text-white">(website video link)</p>
                      </span>
                      <button className="bg-White text-Yellow font-bold
                       text-lg border-none ring-2 ring-white 
                       rounded-md w-[20%] h-[30px] max-sm:w-[30%]">
                          <img src={gdrive} className="h-[30px] w-[50px] ml-[10px] max-sm:ml-[30px] max-sm:w-[50px]" />
                       </button>
                    </div>
                    <div className="flex mt-[30px] w-[50%] max-sm:mt-[20px] md:ml-[20px] space-x-2 ">
                      <span className="flex-col">
                      <p className="text-white text-lg font-bold">Proposal:</p>
                      {/* <p className="text-white">(view the pdf)</p> */}
                      </span>
                      <button className="bg-White text-Yellow font-bold text-lg border-none ring-2
                       ring-white rounded-md w-[20%] h-[30px] max-sm:w-[30%] flex justify-center items-center">
                          <MdPictureAsPdf className="text-Darkblue text-center " size={30}/>
                       </button>
                    </div>
                    </div>
                </div>

              </div>

              <div className="bg-Darkblue p-2 rounded-md flex w-full space-x-2 max-sm:flex-col">
                <div className="image h-[150px] w-[280px] max-sm:w-full">
                  <img src={admin} className=" projectImage w-full h-full rounded-md"/>
                  <div  className="content text-White font-semibold p-[2px]">
                    <h1 className="text-lg font-bold text-Yellow underline">Admin Dashboard</h1>
                    <p className="text-center">It is an Admin dashboard using Figma tool</p>
                  </div>

                </div>
                <div className="w-full  ">
                    <h1 className="text-xl font-bold text-Yellow text-center">Admin Dashboard</h1>
                    <div className="flex w-full justify-around max-sm:flex-col">
                    <span className="w-[45%] max-sm:w-[90%]">
                      <p className="text-white text-lg font-semibold">Github Link:</p>
                      <input type="text" className="outline-none rounded-md w-full" placeholder="Enter your project repo link" />
                    </span>
                    <span className="w-[45%] max-sm:w-[90%]">
                      <p className="text-white text-lg font-semibold">Figma link:</p>
                      <input type="text" className="outline-none rounded-md w-full " placeholder="provide if you have deployed" />
                    </span>
                    </div>
                    <div className="flex w-full justify-around">
                    <div className="flex w-[50%] mt-[30px] max-sm:mt-[20px] md:ml-[20px] space-x-2 ">
                      <span className="flex-col">
                        <p className="text-white text-lg font-bold">Working Model:</p>
                        <p className="text-white">(website video link)</p>
                      </span>
                      <button className="bg-White text-Yellow font-bold
                       text-lg border-none ring-2 ring-white 
                       rounded-md w-[20%] h-[30px] max-sm:w-[30%]">
                          <img src={gdrive} className="h-[30px] w-[50px] ml-[10px] max-sm:ml-[30px] max-sm:w-[50px]" />
                       </button>
                    </div>
                    <div className="flex mt-[30px] w-[50%] max-sm:mt-[20px] md:ml-[20px] space-x-2 ">
                      <span className="flex-col">
                      <p className="text-white text-lg font-bold">Proposal:</p>
                      {/* <p className="text-white">(view the pdf)</p> */}
                      </span>
                      <button className="bg-White text-Yellow font-bold text-lg border-none ring-2
                       ring-white rounded-md w-[20%] h-[30px] max-sm:w-[30%] flex justify-center items-center">
                          <MdPictureAsPdf className="text-Darkblue text-center " size={30}/>
                       </button>
                    </div>
                    </div>
                </div>

              </div>
            </div>

          </div>

          
        </div>
      </div>
    </div>
  );
}
{/* <h1 className={`${isClick?" bg-Darkblue text-Yellow ":" bg-Yellow text-Darkblue "}`}></h1> */}
export default HomeProfile;
