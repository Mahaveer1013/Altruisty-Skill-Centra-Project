import React from 'react'
import useDrivePicker from 'react-google-drive-picker'
import gdrive from "../assets/gdrive.webp";
function DriveFilePicker() {
    
  const [openPicker,data,authResponse]=useDrivePicker();

  const handleClick=()=>{
    openPicker({
      clientId: "286309906436-1mhnk8b933efuina84sro4q61prji0p4.apps.googleusercontent.com",
      developerKey: "AIzaSyCqPjSxsDb7xCmnkKP9Q6eomvLfdAIC2LY",
      viewId: "DOCS",
    //   token: "Rec1oc3Wftd569TcLQj5P8UpoWF2", // pass oauth token in case you already ha?ve one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
    

  }
   
  return (
    <div>
      <button onClick={()=>handleClick()} className='px-4 py-2 rounded-md bg-white flex justify-center items-center pt-[2px]'><img src={gdrive} className=" w-[40px]  max-sm:w-[50px] " /></button>
    </div>
  )
}

export default DriveFilePicker