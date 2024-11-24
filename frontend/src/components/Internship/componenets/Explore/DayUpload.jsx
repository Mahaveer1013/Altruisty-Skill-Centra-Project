import React, { useState } from 'react';
import axios from 'axios';
import api from '../../../../api/api';

function Upload({ value }) {
  const [tasks, setTasks] = useState({
    task1: '',
    task2: '',
    task3: '',
    task4: '',
    task5: '',
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTasks((prev) => ({
      ...prev,
      [name]: value, 
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/updateProgress", {
        tasks
      });
      if (res.status === 201) {
        alert("Tasks updated successfully!");
      }
      console.log(res)
    } catch (err) {
     console.log(err)
      alert("Failed to update tasks.");
    }
  };

  return (
    <div className='bg-[#D4CAAA] font-times'>
      <div className='flex justify-center items-center h-full'>
        <div className='bg-[#17212E] mb-10 md:w-[600px] rounded-md md:rounded-3xl'>
          <div className='flex justify-evenly p-10'>
            <button className='bg-[#F5CF6B] w-24 h-10 rounded-lg font-bold'>Upload</button>
            <h1 className='text-[#F5CF6B] mt-2 text-xl'>Submitted</h1>
          </div>
          <div className='flex flex-col mb-2 justify-between text-white md:px-6 p-3'>
            <h1 className='text-xl'>Task1-Drive Link</h1>
            <input
              type="text"
              name="task1"
              value={tasks.task1}
              onChange={handleInputChange}
              className='md:w-[300px] ml-2 rounded-lg text-black'
              placeholder='Enter the Drive Link'
            />
            <h1 className='text-xl'>Task2-Drive Link</h1>
            <input
              type="text"
              name="task2"
              value={tasks.task2}
              onChange={handleInputChange}
              className='md:w-[300px] ml-2 rounded-lg text-black'
              placeholder='Enter the Drive Link'
            />
            <h1 className='text-xl'>Task3-Drive Link</h1>
            <input
              type="text"
              name="task3"
              value={tasks.task3}
              onChange={handleInputChange}
              className='md:w-[300px] ml-2 rounded-lg text-black'
              placeholder='Enter the Drive Link'
            />
            <h1 className='text-xl'>Task4-Drive Link</h1>
            <input
              type="text"
              name="task4"
              value={tasks.task4}
              onChange={handleInputChange}
              className='md:w-[300px] ml-2 rounded-lg text-black'
              placeholder='Enter the Drive Link'
            />
            <h1 className='text-xl'>Task5-Drive Link</h1>
            <input
              type="text"
              name="task5"
              value={tasks.task5}
              onChange={handleInputChange}
              className='md:w-[300px] ml-2 rounded-lg text-black'
              placeholder='Enter the Drive Link'
            />
          </div>
          <div className='flex justify-center'>
            <button
              className='bg-[#F5CF6B] w-24 h-10 rounded-lg font-bold mt-4'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
