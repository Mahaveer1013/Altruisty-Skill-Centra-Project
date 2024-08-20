import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import ProcedureSteps from './ProcedureSteps';
import "./homepage.css"
import { Link } from 'react-router-dom';
function HomePage() {
  
  return (
    <div>
    <div>
      <Header />
      <Hero />
      <About />
      <ProcedureSteps />
      <div className='flex justify-center bg-[#D4CAAA]'>
          <Link to={'/RegisterForm'}>
             <button  className='w-32 h-12 bg-[#17212E] text-white hover:bg-[#F5CF6B] hover:text-[#17212E] my-10 rounded-lg'>Apply now</button>
          </Link>
      </div>
      
    </div>
    </div>
  );
}

export default HomePage;
