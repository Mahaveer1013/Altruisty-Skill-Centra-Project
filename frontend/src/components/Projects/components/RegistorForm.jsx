import React, { useState } from "react";
// import axios from "axios"; // Assuming you will use axios for sending data to the backend

const RegistorForm = ({ isFormOpen, SetFormOpen }) => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    domain: "",
    plan: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Sending the form data to the backend
  //     const response = await axios.post("/api/register", formData);
  //     if (response.status === 200) {
  //       alert("Registration successful!");
  //     } else {
  //       alert("Failed to register.");
  //     }
  //   } catch (error) {
  //     console.error("Error registering user:", error);
  //     alert("An error occurred while submitting the form.");
  //   }
  // };
  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="w-1/2 p-4 mx-auto text-center z-50">
      <div
        className={`fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center`}
      >
        {isFormOpen && (
          <div>
            <div className="flex justify-center align-middle mx-3 md:-m-0 items-center min-h-screen ">
              <div className="bg-white p-6 md:p-8 rounded-2xl w-full max-w-md border border-2 border-[#F5CF6B]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-center">
                    Register Now!
                  </h2>
                  <button
                    onClick={() => SetFormOpen(false)}
                    className="text-gray-500"
                  >
                    ✕
                  </button>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email ID"
                      className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your Name"
                      className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      className="mt-1 block w-full p-2 placeholder-black rounded-md bg-[#FAF2DE]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Domain Of Interest <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      placeholder="Enter your Preferred Domain"
                      className="placeholder-black mt-1 block w-full p-2 bg-[#FAF2DE] rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Choose Your Plan <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["3 Months", "6 Months", "9 Months", "12 Months"].map(
                        (plan, index) => (
                          <div
                            key={index}
                            className={`flex-1 bg-[#FAF2DE] p-2 text-center text-sm border border-gray-300 rounded-md cursor-pointer ${
                              formData.plan === plan ? "border-yellow-400" : ""
                            }`}
                            onClick={() => setFormData({ ...formData, plan })}
                          >
                            <p className="font-semibold">{plan}</p>
                            <p className="font-bold">Rs: 6000</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-white p-2 rounded-md mt-4"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistorForm;
