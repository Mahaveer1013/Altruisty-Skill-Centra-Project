import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Upload from './Upload';
import About from './About';
import Header from './Header';

const CircularChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("section 1");
  const navigate = useNavigate();
  const periods = ["section 1", "section 2", "section 3"];

  // Handle section selection
  const handleSectionClick = (period) => {
    setSelectedPeriod(period);
  };

  // Render content for the selected section
  const renderSectionContent = () => {
    switch (selectedPeriod) {
      case "section 1":
        return (
          <div
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "#F5CF6B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Content for Section 1
          </div>
        );
      case "section 2":
        return (
          <div
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "#17212E",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Content for Section 2
          </div>
        );
      case "section 3":
        return (
          <div
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "#D4CAAA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Content for Section 3
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header component */}
      <Header />
      {/* About component */}
      <About />

      <div className="flex flex-col items-center font-times justify-center bg-[#D4CAAA]">
        {/* Buttons for selecting periods */}
        <div className="px-2 flex md:space-x-4 pt-10 md:text-xl font-bold mb-8">
          {periods.map((period) => (
            <button
              key={period}
              className={`py-2 px-4 rounded-lg ${
                selectedPeriod === period
                  ? "bg-[#17212E] text-[#F5CF6B]"
                  : "bg-transparent text-[#17212E]"
              }`}
              onClick={() => handleSectionClick(period)}
            >
              {period !== "section 1" ? period : period}
            </button>
          ))}
        </div>

        {/* Render content for the selected section */}
        <div className="section-content my-10">{renderSectionContent()}</div>

        {/* Upload component */}
        <Upload value={selectedPeriod} />
      </div>
    </div>
  );
};

export default CircularChart;
