import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./EditProfile.css";

function EditProfile({ editProfile, onClose, handleData1 }) {
  const [phone, setPhone] = useState("");
  const [FullName,SetfullName] = useState('')
  const [college, setCollege] = useState("");
  const [github, setGithub] = useState("");
  const [LinkedIn, SetLinkedIn] = useState("");
  const [Portfolio, SetPortfolio] = useState("");
  const [domain, setDomain] = useState("");
  const [profile, SetProfile] = useState(""); // State for profile picture
  const [imagePreview, setImagePreview] = useState(""); // State for image preview

  const handleData = (e) => {
    e.preventDefault();
    handleData1(FullName,phone, college, github, LinkedIn, Portfolio, profile, domain);
    onClose();
  };

  const convertToBase = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base = await convertToBase(file);
    SetProfile(base);
    setImagePreview(base); // Set preview
  };

  return (
    <>
      {editProfile ? (
        <div className="overlay">
          <div className="overLayEdit-background">
            <div className="overLayEdit-container">
              <div className="p-6 rounded-md bg-Darkblue text-white">
                <div className="flex justify-between">
                  <div className="flex">
                    <span>
                      <h1 className="text-lg font-bold text-Yellow">Edit Profile</h1>
                    </span>
                  </div>
                  <span onClick={onClose} className="cursor-pointer text-Yellow">
                    <IoClose size="25" />
                  </span>
                </div>

                <form className="space-y-4 text-white" onSubmit={handleData}>
                  
                <div>
                    <label className="block text-sm font-medium">
                      Full Name <span className="text-Yellow">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      onChange={(event) => SetfullName(event.target.value)}
                      className="mt-1 block w-full p-2 placeholder-black rounded-md text-Darkblue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">
                      Phone <span className="text-Yellow">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="+91"
                      onChange={(event) => setPhone(event.target.value)}
                      className="mt-1 block w-full p-2 placeholder-black rounded-md text-Darkblue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">
                      College/Institution <span className="text-Yellow">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your College"
                      onChange={(event) => setCollege(event.target.value)}
                      className="placeholder-black mt-1 block w-full p-2 rounded-md text-Darkblue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">
                      Domain Of Interest <span className="text-Yellow">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Preferred Domain"
                      onChange={(e) => setDomain(e.target.value)}
                      className="placeholder-black mt-1 block w-full p-2 rounded-md text-Darkblue"
                    />
                  </div>

                  <div className="flex md:space-x-2 max-sm:flex-col max-sm:space-y-2">
                    <div>
                      <label className="block text-sm font-medium">Github Link</label>
                      <input
                        type="text"
                        onChange={(e) => setGithub(e.target.value)}
                        className="placeholder-black mt-1 block w-full p-2 rounded-md text-Darkblue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">LinkedIn Profile</label>
                      <input
                        type="text"
                        onChange={(e) => SetLinkedIn(e.target.value)}
                        className="placeholder-black mt-1 block w-full p-2 rounded-md text-Darkblue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">Portfolio Link</label>
                      <input
                        type="text"
                        onChange={(e) => SetPortfolio(e.target.value)}
                        className="placeholder-black mt-1 block w-full p-2 rounded-md text-Darkblue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Change your profile picture</label>
                    <input
                      type="file"
                      accept=".jpeg,.png,.jpg"
                      onChange={(e) => handleFileUpload(e)}
                    />
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="Profile Preview"
                          className="h-24 w-24 object-cover mt-2 rounded-full"
                        />
                      </div>
                    )}
                  </div>

                  <button type="submit" className="w-full bg-Yellow text-Darkblue p-2 rounded-md mt-4">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default EditProfile;
