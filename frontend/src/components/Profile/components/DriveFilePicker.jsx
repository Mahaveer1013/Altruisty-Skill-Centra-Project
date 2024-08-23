import React from 'react'
import useDrivePicker from 'react-google-drive-picker'
import gdrive from "../assets/gdrive.webp";
function DriveFilePicker() {
    
  const [openPicker,data,authResponse]=useDrivePicker();

  const handleClick=()=>{
    openPicker({
      clientId: process.env.REACT_APP_DRIVE_CLIENT_ID,
      developerKey: process.env.REACT_APP_DEVELOPER_KEY,
      viewId: "DOCS",
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