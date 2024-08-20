import React from 'react';
import Person_with_laptop from "../../assets/images/man and woman working at table with laptop.png"
import Man_with_heart from "../../assets/images/man showing a heart above his head with his arms.png"
import Two_man from "../../assets/images/two men working with a laptop.png"
import Three_young_people from "../../assets/images/three young people with gadgets.png"
import Man_and_women from "../../assets/images/man and woman working at table with laptop.png"
import Graduated from "../../assets/images/graduated student holding diploma.png"
import GrilwithPc from "../../assets/images/recruiter sitting in front of laptop and searching for new employees.png"



const StepCard = ({ step }) => (
  <div className="flex justify-center items-center hover:scale-105">
  <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-[#17212E]  p-6">
  <h2 className="text-xl font-bold text-center text-[#F5CF6B] mb-2">{step.title}</h2>
      <div className='flex justify-center my-2 '>
      <img src={step.image} className='h-72 w-60' alt="" />
    
      </div>
    <div className="p-6">
      <p className="text-white text-sm ">
     {step.description} </p>
    </div>
  </div>
</div>
);

const StepCard2 = ({ step }) => (
  <div className="flex justify-center  hover:scale-105 ">
  <div className="w-[600px] rounded-3xl   shadow-lg bg-[#17212E]  p-6">
  <h2 className="text-xl font-bold text-center text-[#F5CF6B] mb-2">{step.title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex justify-center align-middle my-2 '>
           <img src={step.image} className='h-72 w-52' alt="" />
      
        </div>
      <div className="p-6  md:mt-5">
      <p className="text-white text-sm ">
     {step.description} </p>
    </div> 
      </div>
   
  </div>
</div>
);


const ProcedureSteps = () => {
  const steps = [
    { id:1,title: "Real world experience", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: Man_with_heart},
    { id:2,title: "Skill Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: GrilwithPc},
    { id:3,title: "Hands on training", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: Man_and_women },
    // Add more steps as needed
  ];

  const content = [
    { id:1,title: "Connect with Industry Professionals", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure", image: Three_young_people},
    { id:2,title: "Certification for compleltion ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure", image: Graduated},
    { id:3,title: "Connect with Industry Professionals", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure", image: Person_with_laptop},
    { id:4,title: "Connect with Industry Professionals", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure", image: Two_man},
    // Add more steps as needed
  ];

  

  return (
    <section className="bg-[#D4CAAA] p-3 md:p-8">
      <h2 className="text-center text-2xl font-bold mb-8">The following internship procedure </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
      <div className='mt-10'>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-20">
        {content.map((step, index) => (
          <StepCard2 key={index} step={step} />
        ))}
      </div>
    </section>
  );
};

export default ProcedureSteps;
