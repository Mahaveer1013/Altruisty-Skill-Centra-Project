import React, { useState, useEffect } from "react";
import CourseDetails from "../CourseDetails/CourseDetails";
import { Link } from "react-router-dom";
import image from "./assets/background.png";

const options = [
  {
    label: "15 Days",
    imgSrc: image,
    content: "Rs. 199/-",
  },
  {
    label: "1 Month",
    imgSrc: image,
    content: "Rs. 299/-",
  },
  {
    label: "2 Months",
    imgSrc: image,
    content: "Rs. 399/-",
  },
  {
    label: "3 Months",
    imgSrc: image,
    content: "Rs. 499/-",
  },
];

const DetailedCoursePlans = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isVisible, setIsVisible] = useState(true); // State to toggle overlay visibility
  const [price, setPrice] = useState("199");
  const [duration, SetDuration] = useState(1);
  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setPrice(option.price);
    SetDuration(option.duration);
  };
  useEffect(() => {
    console.log('Updated Price:', price);
    console.log('Updated Duration:', duration);
  }, [price, duration]);
/* 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const domain = id;
      const res = await api.post("/registerIntern", { price, duration, domain, transactionId });
      console.log(res.data);
      window.alert("You will get an email after some hours.");
      navigate('/Internships/Homepage/InternDetails/DomainPage')
    } catch (err) {
      console.error(err);
    }
  }; */
  // useEffect(() => {
  //   const handleResize = () => {
  //     // Optional: Check if the viewport width has changed significantly
  //     if (window.innerWidth < 768) {
  //       // Example: Automatically refresh on viewport width change
  //       window.location.reload();
  //     }
  //   }});

  const handleCloseClick = () => {
    // Close the overlay when the "X" button is clicked
    setIsVisible(false);
    window.location.reload();
  };

  if (!isVisible) return null; // Do not render anything if the overlay is not visible

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 font-inter">
      <div className="relative bg-gray-200 p-8 rounded shadow-lg w-4/5 max-w-2xl">
        {/* Close Button */}
        <Link to={"/Internships/Homepage/InternDetails/DomainPage/CourseDetails"}>
          <button
            onClick={handleCloseClick}
            className="absolute top-2 right-6 text-red-600 hover:text-red-800 text-3xl"
            aria-label="Close"
          >
            &times;
          </button>
        </Link>
        <br></br>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(option)}
              className={`py-2 px-9 rounded ${
                selectedOption.label === option.label
                  ? "bg-[rgb(234_179_8/var(--tw-bg-opacity))] text-black font-bold font-Inter"
                  : "bg-blue-900 text-white hover:bg-blue-800 font-bold font-Inter"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Image */}
        <div className="mb-4">
          <img
            src={selectedOption.imgSrc}
            alt={selectedOption.label}
            className="w-full h-auto"
          />
          <p className="text-center">Scan this QR code to pay*</p>
        </div>

        {/* Content */}
        <div className="mb-4 text-center font-bold bg-[rgb(234_179_8/var(--tw-bg-opacity))] p-3 rounded-md">
          <p>{selectedOption.content}</p>
        </div>
        <h3>Enter the Transaction ID After the Successful Payment:</h3>

        {/* Input Field and Submit Button */}
        <div>
          <input
            type="text"
            placeholder="Enter Tramsaction ID..."
            className="border border-gray-300 px-4 py-2 rounded w-full mb-2"
          />
          <div className="flex justify-center">
          <button className="bg-[rgb(234_179_8/var(--tw-bg-opacity))]  text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // You can include this component in your main App or other component as needed
  return (
    <div className="relative">
      <div>
        <CourseDetails />
      </div>
      {/* Render the CoursePlans component here */}
      <DetailedCoursePlans />
    </div>
  );
};

export default App;