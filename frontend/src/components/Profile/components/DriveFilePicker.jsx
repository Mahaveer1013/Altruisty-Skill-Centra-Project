import React, { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker';
import gdrive from "../assets/gdrive.webp";

function DriveFilePicker({ Resume, SetResume }) {
  const [openPicker, data, authResponse] = useDrivePicker();
  const [previousResumeData, setPreviousResumeData] = useState([]);

  const handleClick = () => {
    console.log(process.env.REACT_APP_DRIVE_CLIENT_ID);
    console.log(process.env.REACT_APP_DEVELOPER_KEY);
    openPicker({
      clientId: process.env.REACT_APP_DRIVE_CLIENT_ID,
      developerKey: process.env.REACT_APP_DEVELOPER_KEY,
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === 'picked') {
          console.log('Files picked:', data.docs);
          SetResume(data.docs); // Update the state
        } else if (data.action === 'cancel') {
          console.log('User canceled the picker');
        }
        console.log(data);
      },
    });
  };

  // UseEffect to act on Resume changes
  useEffect(() => {
    // Only show the alert if the actual file data changes
    if (Resume && Resume.length > 0 && !areArraysEqual(Resume, previousResumeData)) {
      console.log('Keys of Resume objects:', Object.keys(Resume[0]));
      
      setPreviousResumeData(Resume);  // Update the previous state to the current Resume data
    }
  }, [Resume]);  

  const areArraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) return false;
    return array1.every((item, index) => 
      JSON.stringify(item) === JSON.stringify(array2[index])
    );
  };

  return (
    <div>
      <button
        onClick={() => handleClick()}
        className="px-4 py-2 rounded-md bg-white flex justify-center items-center pt-[2px]"
      >
        <img src={gdrive} className="w-[40px] max-sm:w-[50px]" />
      </button>
    </div>
  );
}

export default DriveFilePicker;
