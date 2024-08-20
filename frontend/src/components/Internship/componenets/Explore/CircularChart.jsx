import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Sector, ResponsiveContainer, Text } from 'recharts';
import Upload from './Upload';
import About from './About';
import Header from './Header';

const CircularChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("15 Days");
  const [currentChart, setCurrentChart] = useState(0);
  const periods = ["15 Days", 1, 2, 3];
  const [completedDays, setCompletedDays] = useState(1);
  const totalDays = 15;
  const navigate = useNavigate();
  
  const totalMonths = selectedPeriod === "15 Days" ? 1 : selectedPeriod;
  const totalPeriods = totalMonths * 2;

  const data = Array.from({ length: totalDays }, (_, i) => ({
    name: `Day ${i + 1 + currentChart * 15}`,
    value: 1,
    completed: i < completedDays,
  }));

 

  const COLORS = [currentChart === 0 ? "#F5CF6B" : "#17212E", "#17212E"];

  const renderActiveShape = (props) => {
    const { cx, cy, startAngle, endAngle, innerRadius, outerRadius, fill } = props;
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 25}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
      </g>
    );
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <Text
        x={x}
        y={y}
        fill={index < completedDays && currentChart === 0 ? "white" : "#F5CF6B"}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`Day ${index + 1 + currentChart * 15}`}
      </Text>
    );
  };

  const SmallrenderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <Text
        x={x}
        y={y}
        fill={index < completedDays ? "white" : "#F5CF6B"}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`D  ${index + 1 + currentChart * 15}`}
      </Text>
    );
  };

  const handleNext = () => {
    if (currentChart < totalPeriods - 1) {
      setCurrentChart(currentChart + 1);
      setCompletedDays(1);
    }
  };

  const handlePrevious = () => {
    if (currentChart > 0) {
      setCurrentChart(currentChart - 1);
      setCompletedDays(1);
    }
  };

  const handleDayClick = (index) => {
    const selectedDay = index + 1;
    if (selectedDay > completedDays) {
      setCompletedDays(selectedDay); // Update completedDays to the selected day
    }

    // Navigate to day details if you want
  
      navigate(`/day/${selectedDay}`);
    
  };

  return (
  <div>
    <Header/>
    <About />
  <div className="flex flex-col items-center font-times justify-center bg-[#D4CAAA]">
      <div className="px-2 flex md:space-x-4 pt-10 md:text-xl font-bold mb-8">
        {periods.map((period) => (
          <button
            key={period}
            className={`py-2 px-4 rounded-lg ${
              selectedPeriod === period
                ? "bg-[#17212E] text-[#F5CF6B]"
                : "bg-transparent text-[#17212E]"
            }`}
            onClick={() => {
              setSelectedPeriod(period);
              setCurrentChart(0);
              setCompletedDays(1);
            }}
          >
            {period !== "15 Days" ? period + " Month" : period}
          </button>
        ))}
      </div>

      <div className="hidden md:block -mt-10">
        <ResponsiveContainer  width={600} height={600}>
          <PieChart >
            <Pie
              className="shadow-2xl shadow-black"
              activeIndex={completedDays-1}
              activeShape={currentChart === 0 ? renderActiveShape : ""}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={220}
              startAngle={90}
              endAngle={450}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
              onClick={(_, index) => handleDayClick(index)}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.completed ? COLORS[0] : COLORS[1]} 
                  stroke="none" // Hide the slice lines
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="md:hidden p-2">
        <ResponsiveContainer width={350} height={350}>
          <PieChart>
            <Pie
              activeIndex={completedDays - 1}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={140}
              startAngle={90}
              endAngle={450}
              fill="#17212E"
              dataKey="value"
              label={SmallrenderCustomizedLabel}
              labelLine={false}
              onClick={(_, index) => handleDayClick(index)}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.completed ? COLORS[0] : COLORS[1]} 
                  stroke="none" // Hide the slice lines
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {selectedPeriod !== "15 Days" && (
        <div className="flex mb-20">
          <button
            className="text-white w-24 h-10 bg-[#17212E] px-4 py-2 mx-2 rounded-lg"
            onClick={handlePrevious}
            disabled={currentChart === 0}
          >
            Previous
          </button>
          <button
            className="text-white w-24 h-10 bg-[#17212E] px-4 py-2 mx-2 rounded-lg"
            onClick={handleNext}
            disabled={currentChart >= totalPeriods - 1}
          >
            Next
          </button>
        </div>
      )}
      <Upload value={selectedPeriod}/>
    </div>

    </div>
    );
};

export default CircularChart;
