import React,{PureComponent, useState} from "react";
import { CgProfile } from "react-icons/cg";
import { LuFiles } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./EditProfile.css";


function AddProject({ addProject, onClose,handleFormSubmit,handleInputChange,newProject }) {
  
  
  
  
  const handleProject1=(e)=>{   //handleSubmit function that gets the data from the form
    
    handleFormSubmit();
    
    onClose();

  }

  return (
    <>

      {addProject ? (
        <div className="overlay">
        <div className="overLayEdit-background" >
        <div className="overLayEdit-container ">
        <div className=" p-6  rounded-md bg-Darkblue text-white">
          <div className="flex justify-between">
            <div className="flex">
              <span className="">
                <h1 className="text-lg font-bold text-Yellow">Edit Profile</h1>
                {/* <p className="text-gray-400">50 mins ago</p> */}
              </span>
            </div>
            <span onClick={onClose } className="cursor-pointer text-Yellow">
              <IoClose size="25" />
            </span>
          </div>

        <form className="space-y-4 text-white" onSubmit={handleProject1}>
        <div>
            <label className="block text-sm font-medium text-white">Project Name <span className="text-Yellow">*</span></label>
            <input type="text"
              id="name"
              name="ProjectName"
              value={newProject.ProjectName}
              onChange={handleInputChange} placeholder="Enter your Project Name"  className="mt-1 block w-full p-2 placeholder-black rounded-md text-Darkblue  " />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Project description <span className="text-Yellow">*</span></label>
            <input type="text" id="description"
              name="ProjectDescription"
              value={newProject.ProjectDescription}
              onChange={handleInputChange} placeholder="Enter your Project description"  className="mt-1 block w-full p-2 placeholder-black rounded-md text-Darkblue  " />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Project Github Link <span className="text-Yellow">*</span></label>
            <input type="url"
              id="githubLink"
              name="ProjectGithub"
              value={newProject.ProjectGithub}
              onChange={handleInputChange} placeholder="Enter your Project Github Link"  className="mt-1 block w-full p-2 placeholder-black rounded-md text-Darkblue  " />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Project Website Link <span className="text-Yellow">*</span></label>
            <input type="url"
              id="driveLink"
              name="ProjectLink"
              value={newProject.ProjectLink}
              onChange={handleInputChange} placeholder="Enter your Project Website Link"  className="mt-1 block w-full p-2 placeholder-black rounded-md text-Darkblue  " />
          </div>
          
            
          <button type="submit" className="w-full bg-Yellow text-Darkblue p-2 rounded-md mt-4">submit</button>
        </form>
          





         
        </div>
        
        
        </div></div></div>
      ) : null}
    </>
  );
}

export default AddProject;