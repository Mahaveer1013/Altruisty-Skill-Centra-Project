import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jfif";
import EditProfile from "./EditProfile";
import ecommerce from "../assets/ecommerce.png"
import admin from "../assets/admin.png";
import library from "../assets/library.jfif";
import "./HomeProfile.css";
import useDrivePicker from 'react-google-drive-picker'
import DriveFilePicker from "./DriveFilePicker";
import Aos from "aos";
import "aos/dist/aos.css";

function HomeProfile() {
  const [editProfile, setEditProfile] = useState(false);

  const [fullName, setFullName] = useState("")
  const [EmailId, setEmailId] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [CollegeName, setCollegeName] = useState("")

  const handleData1 = (name, email, phone, college) => {
    setFullName(name);
    setEmailId(email);
    setPhoneNumber(phone);
    setCollegeName(college);
    console.log(fullName, EmailId, PhoneNumber, CollegeName);


  }

  useEffect(() => {
    Aos.init();
  }, []);

  const [openPicker, data, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: "687826912462-d6vg873c90345g0t2rm68dles95q78rd.apps.googleusercontent.com",
      developerKey: "AIzaSyDwHpjxzWp8nN26e8FVkzf90aTLrZ4OxPc",
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
    })
    window.alert("you are clicking picker");

  }

  useEffect(() => {
    if (data) {
      data.docs.map((i) => console.log(i))
    }
  }, [data]);

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
                    {fullName ? fullName : "John Doe"}
                  </h1>
                  <p className="md:pr-[200px] text-lg font-semibold text-Darkblue">
                    {PhoneNumber ? PhoneNumber : "123456789"}
                  </p>
                </span>
                {/* phone number */}
                <span className="flex text-lg font-semibold text-Darkblue mt-[20px]">
                  <p> {EmailId ? EmailId : "abcde@gmail.com"}</p>
                </span>
                {/* college*/}
                <span className="flex text-lg font-semibold text-Darkblue mt-[20px]">
                  <p> {CollegeName ? CollegeName : "abc college of engineering and technology"}</p>
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
                    <DriveFilePicker />
                  </span>
                  <span className="w-[50%] flex space-y-2 flex-col text-lg font-semibold text-Darkblue mt-[20px] max-sm:w-full">
                    <h1>Edit your profile</h1>
                    <button className="bg-Darkblue text-Yellow font-bold text-lg 
                  border-none ring-2 ring-Darkblue rounded-md w-[15%] max-sm:w-[30%]" onClick={() => setEditProfile(true)}>
                      Edit{" "}
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
            {/* Projects */}
            <div className="w-full space-y-2">
              <h1 className="mt-[10px] font-bold text-lg">Projects</h1>
              <hr className="h-1 bg-Darkblue rounded-md mb-[10px]" />

              {/* Foot Style */}
              <div className="bg-Darkblue p-6 rounded-lg flex flex-wrap w-full space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
                <div className="image h-[150px] w-full md:w-[280px]">
                  <img src={ecommerce} className="w-full h-full rounded-lg object-cover" />
                  <div className="content text-White font-semibold mt-2">
                    <h1 className="text-xl font-bold text-Yellow underline text-center">Foot Style</h1>
                    <p className="text-center">It is an E-commerce website lorem ipsum</p>
                  </div>
                </div>
                <div className="w-full md:flex-1 space-y-6">
                  <h1 className="text-2xl font-bold text-Yellow text-center md:text-left">Foot Style</h1>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-white text-lg font-semibold">GitHub Link:</p>
                      <input type="text" className="outline-none px-3 py-2 rounded-lg w-full" placeholder="Enter your project repo link" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-lg font-semibold">Website Link:</p>
                      <input type="text" className="outline-none px-3 py-2 rounded-lg w-full" placeholder="Provide if you have deployed" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="flex flex-1 items-center space-x-4">
                      <div className="flex flex-col">
                        <p className="text-white text-lg font-bold">Working Model:</p>
                        <p className="text-white">(website video link)</p>
                      </div>
                      <DriveFilePicker />
                    </div>
                    <div className="flex flex-1 items-center space-x-4">
                      <div className="flex flex-col">
                        <p className="text-white text-lg font-bold">Proposal:</p>
                      </div>
                      <DriveFilePicker />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-Darkblue p-6 rounded-lg flex flex-wrap w-full space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
                <div className="image h-[150px] w-full md:w-[280px]">
                  <img src={library} className="w-full h-full rounded-lg object-cover" />
                  <div className="content text-White font-semibold mt-2">
                    <h1 className="text-xl font-bold text-Yellow underline text-center">Library Management System</h1>
                    <p className="text-center">It is a Management system using MERN stack</p>
                  </div>
                </div>
                <div className="w-full md:flex-1 space-y-6">
                  <h1 className="text-2xl font-bold text-Yellow text-center md:text-left">Library Management System</h1>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-white text-lg font-semibold">GitHub Link:</p>
                      <input type="text" className="outline-none px-3 py-2 rounded-lg w-full" placeholder="Enter your project repo link" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-lg font-semibold">Vercel Link:</p>
                      <input type="text" className="outline-none px-3 py-2 rounded-lg w-full" placeholder="Provide if you have deployed" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="flex flex-1 items-center space-x-4">
                      <div className="flex flex-col">
                        <p className="text-white text-lg font-bold">Working Model:</p>
                        <p className="text-white">(website video link)</p>
                      </div>
                      <DriveFilePicker />
                    </div>
                    <div className="flex flex-1 items-center space-x-4">
                      <div className="flex flex-col">
                        <p className="text-white text-lg font-bold">Proposal:</p>
                      </div>
                      <DriveFilePicker />
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Dashboard */}
              <div className="bg-Darkblue p-6 rounded-lg flex flex-wrap w-full space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
                <div className="image h-[150px] w-full md:w-[280px]">
                  <img src={admin} className="w-full h-full rounded-lg object-cover" />
                  <div className="content text-White font-semibold mt-2">
                    <h1 className="text-xl font-bold text-Yellow underline">Admin Dashboard</h1>
                    <p className="text-center">An Admin dashboard designed using Figma</p>
                  </div>
                </div>
                <div className="w-full md:flex-1 space-y-6">
                  <h1 className="text-2xl font-bold text-Yellow text-center md:text-left">Admin Dashboard</h1>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-white text-lg font-semibold">GitHub Link:</p>
                      <input type="text" className="outline-none px-3 py-2 rounded-lg w-full" placeholder="Enter your project repo link" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-lg font-semibold">Figma Link:</p>
                      <input type="text" className="outline-none px-3 py-2 rounded-lg w-full" placeholder="Provide if you have deployed" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="flex flex-1 items-center space-x-4">
                      <div className="flex flex-col">
                        <p className="text-white text-lg font-bold">Working Model:</p>
                        <p className="text-white">(website video link)</p>
                      </div>
                      <DriveFilePicker />
                    </div>
                    <div className="flex flex-1 items-center space-x-4">
                      <div className="flex flex-col">
                        <p className="text-white text-lg font-bold">Proposal:</p>
                      </div>
                      <DriveFilePicker />
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
{/* <h1 className={`${isClick?" bg-Darkblue text-Yellow ":" bg-Yellow text-Darkblue "}`}></h1> */ }
export default HomeProfile;