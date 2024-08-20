// src/components/Notes.jsx
import React from 'react';
import Full_stack_notes from "../../assets/PDF/Full Stack Development-Digital Notes.pdf"
const Notes = () => {
  const notes = [
    { id: 1,title:"Full Stack Development", label: 'PDF',pdf_url:Full_stack_notes },
    { id: 2,title:"Backend Development", label: 'PDF',pdf_url:Full_stack_notes},
    { id: 3,title:"Frontend Development", label: 'PDF',pdf_url:Full_stack_notes },
    { id: 4,title:"Database", label: 'PDF',pdf_url:Full_stack_notes },
  ];

  return (
    <div className='flex justify-center text-[#17212E]  h-full md:h-[540px] font-times'>
    <div className="bg-white   rounded-lg shadow-md w-[96%] overflow-y-auto md:w-[95%] ">
      <h2 className="text-xl bg-[#17212E] h-12  text-[#F5CF6B]  font-semibold mb-4"><p className='px-4 py-2'>Notes</p></h2>
      <div className="space-y-4 p-4 md:space-y-20">
        {notes.map(note => (
          <div key={note.id} className="">
            <div className='flex  px-5'>
                 <h1 className='text-xl w-52'>{note.title}</h1>
           <div className=''><a href={Full_stack_notes} download={Full_stack_notes}> <div className="bg-red-500 text-white w-10 -mt-2 ml-5 h-10 rounded-full flex items-center justify-center">
              <span>{note.label}</span>
            </div></a></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Notes;
