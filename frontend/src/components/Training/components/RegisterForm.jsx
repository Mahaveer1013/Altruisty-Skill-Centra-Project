import React from 'react';

const RegisterForm = () => {

  
  return (
    <div className="min-h-screen flex items-center mt-4 justify-center bg-gray-100">
      <div className="bg-beige p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-6">Registration Form</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md h-20"></textarea>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Country</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block mb-2">City</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Country code</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block mb-2">Phone no</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Domain</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Graduating year</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">College/University</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Why we Need To Hire You</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md h-20"></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Skills</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Department</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block mb-2">Year</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">LinkedIn Profile</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block mb-2">GitHub URL</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Duration</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Resume Upload</label>
            <input type="file" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button className="w-full bg-navy text-white p-2 rounded-md mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
