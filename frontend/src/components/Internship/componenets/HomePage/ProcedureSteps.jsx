import React from 'react';
import Person_with_laptop from "../../assets/images/Man_with_lap.png"
import Card1 from "../../assets/images/Rectangle 27.png"
import Card2 from "../../assets/images/Rectangle 27 (1).png"
import Card3 from "../../assets/images/Rectangle 27 (2).png"
import Card4 from "../../assets/images/Rectangle 27 (3).png"
import Card5 from "../../assets/images/Rectangle 27 (4).png"
import Card6 from "../../assets/images/Rectangle 27 (5).png"



const StepCard = ({ step }) => (
  <div className="flex justify-center items-center hover:scale-105">
  <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-[#101929] p-6">
    <img src={step.image} alt="" />
    <div className="p-6">
      <h2 className="text-xl font-bold text-[#fdbb30] mb-2">{step.title}</h2>
      <p className="text-white text-sm ">
     {step.description} </p>
    </div>
    <div className="px-6 flex justify-end">
      <span className="inline-block border-2 border-[#fdbb30] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 ">
        {step.id}
      </span>
    </div>
  </div>
</div>
);

const ProcedureSteps = () => {
  const steps = [
    { id:1,title: "Apply to internship", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: Card1 },
    { id:2,title: "Skilled will get confirm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: Card2 },
    { id:3,title: "Interview will be condected", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: Card3 },
    { id:4,title: "Completed task", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: Card4 },
    { id:5,title: "Offer Letter", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: Card5 },
    { id:6,title: "Completion certificate", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam dolore eu fugiat nulla pariatur.", image: Card6 },
    // Add more steps as needed
  ];

  return (
    <section className="bg-[#D4CAAA] p-3 md:p-8">
      <h2 className="text-center text-2xl font-bold mb-8">The following internship procedure </h2>
      <div className='h-52 md:h-full'>
      <img className='w-full mb-10  md:w-[90%] md:m-20  rounded-3xl' src={Person_with_laptop} alt="" />
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </section>
  );
};

export default ProcedureSteps;
