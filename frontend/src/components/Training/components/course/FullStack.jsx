import React, { useState } from 'react'
import Mentor from './Mentor'
import MaskGroup from "../../assets/images/Mask group.png"
import checkList from "../../assets/images/check_list.png"
import Notes from './Notes'
import AskMentor from './AskMentor'
import { FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ChatBox from './ChatBox'

const VideoCard = () => {
  return (
    <div className=" flex justify-center m-5 md:m-10 font-times">
      <div className="bg-gray-800 rounded-3xl  w-full overflow-hidden relative  h-52 md:h-96">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-8.707v3.414a1 1 0 001.707.707l2.293-2.293a1 1 0 000-1.414L9.707 8.293a1 1 0 00-1.707.707v3.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-lg font-semibold">Full Stack Development</p>
        </div>
      </div>
    </div>
  );
};


const DiscussionForum = () => {
  return (
    <div className='flex justify-center'>
    <div className="bg-white p-6  rounded-lg shadow-md w-[95%]">
      <h2 className="text-xl font-semibold mb-4">Discussion Forum</h2>
      <textarea className="w-full bg-gray-100 p-2 mb-4 border rounded-md" placeholder="Your Query" rows="7"></textarea>
      <button className="px-4 py-2 bg-[#17212E] text-white rounded-md mb-4">Submit</button>
      
      <h1 className='text-2xl font-semibold flex justify-center'>Commands</h1>
            
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-[#17212E] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
            R
          </div>
          
          <div className="flex-1">
            <p className="font-semibold">rohan123</p>
            <input  className="bg-gray-100 w-[80%] p-2 border rounded-md" type='text'/>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-[#17212E] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
            Y
          </div>
          <div className="flex-1 mb-2">
            <p className="font-semibold">You</p>
            <input className="bg-gray-100 w-[80%] p-2 border rounded-md " type='text' />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const Introduction = () => {

  const instruction =[{
    id:1,
    topic:"what you will learn"
  },{
    id:2,
    topic:"what you will learn"
  },{
    id:3,
    topic:"what you will learn"
  },{
    id:4,
    topic:"what you will learn"
  },{
    id:5,
    topic:"what you will learn"
  },{
    id:6,
    topic:"what you will learn"
  },{
    id:7,
    topic:"what you will learn"
  },]
  return(
    <div className='absolute  bg-[#F1F1F1] w-[230px] overflow-scroll  h-[400px] md:size-[400px]'>
       <h1 className='text-xl m-3'>Introduction</h1>
       <hr className='bg-black'/>
              <p className='my-3 ml-5 flex'>what will you learn <FaLock className='my-1 mx-3'/></p>
            
        <div>
         { instruction.map((title)=>(
            <div key={title.id}>
              <hr className='bg-black'/>
              <p className='my-3 ml-5 flex'>{title.topic} <FaLock className='my-1 mx-3'/></p>
            
            </div>
            
         ))
        }
       </div>
  </div>
  )
}

const Introduction2 = () => {

  const instruction =[{
    id:1,
    topic:"what you will learn"
  },{
    id:2,
    topic:"what you will learn"
  },{
    id:3,
    topic:"what you will learn"
  },{
    id:4,
    topic:"what you will learn"
  },{
    id:5,
    topic:"what you will learn"
  },{
    id:6,
    topic:"what you will learn"
  },{
    id:7,
    topic:"what you will learn"
  },]
  return(
    <div className='absolute  bg-[#F1F1F1] w-[230px] overflow-scroll  h-[400px] md:size-[400px]'>
       <h1 className='text-xl m-3'>Introduction</h1>
       <hr className='bg-black'/>
              <p className='my-3 ml-5 flex'>what will you learn <FaLock className='my-1 mx-3'/></p>
            
        <div>
         { instruction.map((title)=>(
            <div key={title.id}>
              <hr className='bg-black'/>
              <p className='my-3 ml-5 flex'>{title.topic} <FaLock className='my-1 mx-3'/></p>
            
            </div>
            
         ))
        }
       </div>
  </div>
  )
}

const Introduction3 = () => {

  const instruction =[{
    id:1,
    topic:"what you will learn"
  },{
    id:2,
    topic:"what you will learn"
  },{
    id:3,
    topic:"what you will learn"
  },{
    id:4,
    topic:"what you will learn"
  },{
    id:5,
    topic:"what you will learn"
  },{
    id:6,
    topic:"what you will learn"
  },{
    id:7,
    topic:"what you will learn"
  },]
  return(
    <div className='absolute  bg-[#F1F1F1] w-[230px] overflow-scroll  h-[400px] md:size-[400px]'>
       <h1 className='text-xl m-3'>Introduction</h1>
       <hr className='bg-black'/>
              <p className='my-3 ml-5 flex'>what will you learn <FaLock className='my-1 mx-3'/></p>
            
        <div>
         { instruction.map((title)=>(
            <div key={title.id}>
              <hr className='bg-black'/>
              <p className='my-3 ml-5 flex'>{title.topic} <FaLock className='my-1 mx-3'/></p>
            
            </div>
            
         ))
        }
       </div>
  </div>
  )
}

const Introduction4 = () => {

  const instruction =[{
    id:1,
    topic:"what you will learn"
  },{
    id:2,
    topic:"what you will learn"
  },{
    id:3,
    topic:"what you will learn"
  },{
    id:4,
    topic:"what you will learn"
  },{
    id:5,
    topic:"what you will learn"
  },{
    id:6,
    topic:"what you will learn"
  },{
    id:7,
    topic:"what you will learn"
  },]
  return(
    <div className='absolute  bg-[#F1F1F1] w-[230px] overflow-scroll overflow-x-hidden  h-[400px] md:size-[400px]'>
       <h1 className='text-xl m-3'>Introduction</h1>
       <hr className='bg-[#17212E]'/>
              <p className='my-3 ml-5 flex'>what will you learn <FaLock className='my-1 mx-3'/></p>
            
        <div>
         { instruction.map((title)=>(
            <div key={title.id}>
              <hr className='bg-[#17212E]'/>
              <p className='my-3 ml-5 flex'>{title.topic} <FaLock className='my-1 mx-3'/></p>
            
            </div>
            
         ))
        }
       </div>
  </div>
  )
}

const TableOfContents = () => {
    
   const [Drop,setDrop]= useState(false);
  
   const handleDropdown =() =>{
    setDrop(prevValue => !prevValue)
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
   }
   
   const [Drop1,setDrop1]= useState(false);
  
   const handleDropdown1 =() =>{
   setDrop1(prevValue => !prevValue)
    setDrop(false);
    setDrop2(false);
    setDrop3(false);
   }
   
  const [Drop2,setDrop2]= useState(false);
  
   const handleDropdown2 =() =>{
   setDrop2(prevValue => !prevValue)
   setDrop1(false);
    setDrop(false);
    setDrop3(false);}

   const [Drop3,setDrop3]= useState(false);
  
   const handleDropdown3 =() =>{
    setDrop3(prevValue => !prevValue)
    setDrop1(false);
    setDrop2(false);
    setDrop(false);}

  return (
    <div className='flex justify-center'>
    <div className="bg-white p-6 rounded-lg shadow-md w-[95%] ">
      <h2 className="text-xl font-semibold mb-4">Table Of Contents</h2>
      <ul className="space-y-2 mb-2">
          <li  className="border rounded-md p-4">
            <div className="flex justify-between items-center">
              <span>Introduction to Full Stack Development</span>
              {Drop ? <button onClick={handleDropdown} > &#9652;</button>: <button onClick={handleDropdown} >&#9662;</button>}
            </div>
            {Drop && 
           <Introduction /> }
            {Drop1 && 
           <Introduction2 /> }
            {Drop2 && 
           <Introduction3 /> }
            {Drop3 && 
           <Introduction4 /> }
           
            <div className="text-gray-600 text-sm mt-2">
              <p>10 Modules</p>
              <p>2 Assignments</p>
            </div>
          </li>
        {/* ))} */}
      </ul>

     

      <ul className="space-y-2 mb-2">
          <li  className="border rounded-md p-4">
            <div className="flex justify-between items-center">
              <span>Frontend Development</span>
              {Drop1 ? <button onClick={handleDropdown1} > &#9652;</button>: <button onClick={handleDropdown1} >&#9662;</button>}
            </div>
            <div className="text-gray-600 text-sm mt-2">
              <p>10 Modules</p>
              <p>2 Assignments</p>
            </div>
          </li>
      </ul>

      <ul className="space-y-2 mb-2">
          <li  className="border rounded-md p-4">
            <div className="flex justify-between items-center">
              <span>Backend Development</span>
              {Drop2 ? <button onClick={handleDropdown2} > &#9652;</button>: <button onClick={handleDropdown2} >&#9662;</button>}
            </div>
            <div className="text-gray-600 text-sm mt-2">
              <p>10 Modules</p>
              <p>2 Assignments</p>
            </div>
          </li>
        {/* ))} */}
      </ul>

      <ul className="space-y-2 ">
        {/* {['Introduction to Full Stack Development', 'Front End Development', 'Back End Development', 'Database'].map((item, index) => ( */}
          <li  className="border rounded-md p-4">
            <div className="flex justify-between items-center">
              <span>Database</span>
              {Drop3 ? <button onClick={handleDropdown3} > &#9652;</button>: <button onClick={handleDropdown3} >&#9662;</button>}
            </div>
            <div className="text-gray-600 text-sm mt-2">
              <p>10 Modules</p>
              <p>2 Assignments</p>
            </div>
          </li>
        {/* ))} */}
      </ul>
    </div>
    </div>
  );
};




function FullStack() {

  const [showDiscussion, setDiscussion] = useState(true);

  const handleDiscussion = () => {
    setIsClicked(!isClicked);
    setDiscussion(true);
    setChat_bot(false)
    setNotes(false)
    setAskMentor(false)
   };

  
   const [showNotes, setNotes] = useState(false);

   const handleNotes = () => {
     setNotes(true);
     setDiscussion(false);
     setChat_bot(false)
     setAskMentor(false)
    };

    const [showChat_bot, setChat_bot] = useState(false);

    const handleChat_bot = () => {
      setNotes(false);
      setDiscussion(false);
      setChat_bot(true)
      setAskMentor(false)
      };
  
  
     const [showAskMentor, setAskMentor] = useState(false);

     const handleAskMentor = () => {
      setNotes(false);
      setDiscussion(false);
      setChat_bot(false)
      setAskMentor(true)
     
      };
   
      const [isClicked, setIsClicked] = useState(false);

     
  return (
    <div className=''>
    <div className='bg-[#FFFBEF] '>
      <div className=' flex text-2xl '>
       <Link to={"/skill_center/full_stack/"}><input type="button" className='m-5 cursor-pointer -mr-0' value={`<`} /></Link>
       <h1  className='m-5 font-semibold'>Full Stack Development</h1>
      </div>
        <VideoCard />
        <div className='flex justify-evenly mx-2  md:mx-40 text-nowrap overflow-scroll md:overflow-hidden text-xl font-semibold'>
          <button onClick={handleDiscussion}  className={`${showDiscussion ? "border-b-4 " : ''} border-[#F5CF6B] mx-3 mb-5 `}>Discussion</button>
          <button onClick={handleNotes} className={`${showNotes ? "border-b-4 " : ''} mb-5 mx-3 border-[#F5CF6B]`}>Notes</button>
          <button onClick={handleChat_bot} className={`${showChat_bot? "border-b-4 " : ''} mb-5 mx-3 border-[#F5CF6B]`}>Chat Bot</button>
          <button onClick={handleAskMentor} className={`${showAskMentor ? "border-b-4 " : ''} mb-5 mx-3 border-[#F5CF6B]`}>Ask Mentor</button>
        </div>
        
        <div className=''>
          <div className='hidden md:block absolute h-full w-20'>
            <img src={MaskGroup}  className='size-14  m-3 mb-10' alt="" />
            <Link to={"/skill_center/Assignment/"}><img src={checkList}  className='size-14 mx-4 mb-5' alt="" /></Link> 
          </div>
           <div>
           <div className='grid grid-cols-1 md:grid-cols-2 mt-5 '>
       <div className='mb-5 md:ml-20'>
       {showDiscussion &&  
       <DiscussionForum className="mb-10"/>
       }
       {showNotes &&
       <Notes className="mb-10"/>}
       
       {showChat_bot &&
       <ChatBox className="mb-10"/>}
       {showAskMentor &&
       <AskMentor className="mb-10"/>}

       </div>
       <div className='md:mx-5 mb-10'>
        <TableOfContents />
       </div>
       
        </div>

           </div>
        </div>

            </div>
            <div className=' md:hidden flex justify-evenly bg-[#FFFBEF]  h-full w-full'>
            <img src={MaskGroup}  className='size-14  m-3 mb-10' alt="" />
            <Link to={"/skill_center/Assignment/"}><img src={checkList}  className='size-14 mt-1 mx-4 mb-5' alt="" /></Link> 
          </div>
          
      <Mentor className=""/>
    </div>
  )
}

export default FullStack