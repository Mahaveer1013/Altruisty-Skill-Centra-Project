import React,{ useState} from "react";
import { IoClose } from "react-icons/io5";
import "./EditProfile.css";


function EditProfile({ editProfile, onClose,handleData1 }) {
  
  
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [college,setCollege]=useState("");
  
  const handleData=(e)=>{   //handleSubmit function that gets the data from the form
    e.preventDefault();
    handleData1(name,email,phone,college);
    onClose();

  }

  return (
    <>

      {editProfile ? (
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

          <form className="space-y-4 text-white" onSubmit={handleData}>

          <div>
            <label className="block text-sm font-medium text-white">Email <span className="text-Yellow">*</span></label>
            <input type="email" placeholder="Enter your email ID" onChange={(event)=>setEmail(event.target.value)} className="mt-1 block w-full p-2 placeholder-black rounded-md text-Darkblue  " />
          </div>

          <div>
            <label className="block text-sm font-medium ">Name <span className="text-Yellow">*</span></label>
            <input type="text" placeholder="Enter your Name" onChange={(event)=>setName(event.target.value)} className="mt-1 block w-full  p-2  placeholder-black  rounded-md text-Darkblue " />
          </div>

          <div>
            <label className="block text-sm font-medium ">Phone <span className="text-Yellow">*</span></label>
            <input type="text" placeholder="+91" onChange={(event)=>setPhone(event.target.value)} className="mt-1 block w-full p-2 placeholder-black rounded-md text-Darkblue" />
          </div>

          <div>
            <label className="block text-sm font-medium ">College/Instuition <span className="text-Yellow">*</span></label>
            <input type="text" placeholder="Enter your College" onChange={(event)=>setCollege(event.target.value)} className="placeholder-black mt-1 block w-full p-2  rounded-md text-Darkblue" />
          </div>

          <div>
            <label className="block text-sm font-medium ">Domain Of Interest <span className="text-Yellow">*</span></label>
            <input type="text" placeholder="Enter your Preferred Domain" className="placeholder-black mt-1 block w-full p-2  rounded-md text-Darkblue" />
          </div>

        <div className="flex md:space-x-2 max-sm:flex-col max-sm:space-y-2">
          <div>
            <label className="block text-sm font-medium ">Github Link </label>
            <input type="text"  className="placeholder-black mt-1 block w-full p-2  rounded-md text-Darkblue" />
          </div>

          <div>
            <label className="block text-sm font-medium ">LinkedIn Profile </label>
            <input type="text"  className="placeholder-black mt-1 block w-full p-2  rounded-md text-Darkblue" />
          </div>
         
          <div>
            <label className="block text-sm font-medium ">Portfolio Link </label>
            <input type="text"  className="placeholder-black mt-1 block w-full p-2  rounded-md text-Darkblue" />
          </div>
        </div> 

        <div>
        <label className="block text-sm font-medium ">Change your profile picture </label>
        <input type="file" />
        </div>


        
        


          
          <button type="submit" className="w-full bg-Yellow text-Darkblue p-2 rounded-md mt-4">Register</button>
        </form>
          





         
        </div>
        
        
        </div></div></div>
      ) : null}
    </>
  );
}

export default EditProfile;