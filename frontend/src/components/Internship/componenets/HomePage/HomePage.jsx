import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import ProcedureSteps from './ProcedureSteps';
import "./homepage.css";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../../api/api';
import { useAuth } from '../../../../AuthContext';

function HomePage() {
  const [data, SetData] = useState([]);
  const navigate = useNavigate()
  const {setFlash} = useAuth()

  const handleRegister = async () => {
    try {
      const res = await api.get('/getInternDetails');
      SetData(res.data);
      if(res.data.verification === true)
      {
        navigate('/RegisterForm')

      }
      else
      {
        setFlash(['Please Complete two Months Training Internship and then proceed','error'])
      }

      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ProcedureSteps />
      <div className='flex justify-center bg-[#D4CAAA]'>
        
          <button  
            onClick={handleRegister}
            className='w-32 h-12 bg-[#17212E] text-white hover:bg-[#F5CF6B] hover:text-[#17212E] my-10 rounded-lg'
          >
            Apply now
          </button>
        
      </div>
    </div>
  );
}

export default HomePage;
