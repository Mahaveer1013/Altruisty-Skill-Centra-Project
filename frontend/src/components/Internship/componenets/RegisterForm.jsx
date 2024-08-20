import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const RegisterForm = () => {
  // State variables for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [domain, setDomain] = useState('');
  const [graduatingYear, setGraduatingYear] = useState('');
  const [college, setCollege] = useState('');
  const [reason, setReason] = useState('');
  const [skills, setSkills] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [duration, setDuration] = useState('');
  const [resume, setResume] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with all the form data
    const formData = {
      name,
      email,
      address,
      country,
      city,
      countryCode,
      phoneNo,
      domain,
      graduatingYear,
      college,
      reason,
      skills,
      department,
      year,
      linkedin,
      github,
      duration,
      resume,
    };

    // TODO: Send formData to the backend database
    console.log(formData);
    // You can use fetch or axios to send the data to the backend
    // Example:
    // fetch('/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // }).then(response => response.json())
    // .then(data => console.log(data));
  };

  return (
    <div>
      <div className='flex justify-between '>
        <div className='m-6 text-xl font-times font-bold'>
         <Link to={"/HomePage"}> <h1>{" <  "} &nbsp;back</h1>
         </Link></div>
        <div>
          <img src={logo} alt="" className='h-20 mr-3' />
        </div>
      </div>
      <div className="min-h-screen p-8 font-bold font-times text-[#1C2540] flex items-center justify-center bg-[#D4CAAA]">
        <div className="bg-white p-8 rounded-md shadow-lg w-full md:w-[660px]">
          <h2 className="text-center text-xl font-semibold mb-6">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 bg-[#1C2540] text-white rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                required
                type="email"
                className="w-full p-2 border border-gray-300 bg-[#1C2540] text-white rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block mb-2">Address</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md h-20 bg-[#1C2540] text-white"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Country and City */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Country</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            {/* Country Code and Phone No */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Country code</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">Phone no</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
            </div>

            {/* Domain */}
            <div className="mb-4">
              <label className="block mb-2">Domain</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
            </div>

            {/* Graduating Year */}
            <div className="mb-4">
              <label className="block mb-2">Graduating year</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                value={graduatingYear}
                onChange={(e) => setGraduatingYear(e.target.value)}
              />
            </div>

            {/* College/University */}
            <div className="mb-4">
              <label className="block mb-2">College/University</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>

            {/* Why we Need To Hire You */}
            <div className="mb-4">
              <label className="block mb-2">Why we Need To Hire You</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md h-20 bg-[#1C2540] text-white"
                value={reason}
                required
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <label className="block mb-2">Skills</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

            {/* Department and Year */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Department</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">Year</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#1C2540] text-white p-2 border border-gray-300 rounded-md"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>

            {/* LinkedIn and GitHub */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">LinkedIn Profile</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 bg-[#1C2540] text-white rounded-md"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">GitHub URL</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </div>
            </div>

            {/* Duration */}
            <div className="mb-4">
              <label className="block mb-2">Duration</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            {/* Resume Upload */}
            <div className="mb-4">
              <label className="block mb-2">Resume Upload</label>
              <input
                type="file"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white"
                onChange={(e) => setResume(e.target.files[0])}
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#17212E] text-white hover:bg-[#F5CF6B] hover:text-[#17212E] p-2 rounded-md mt-4">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
