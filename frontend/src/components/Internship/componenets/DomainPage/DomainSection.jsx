import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import DomainCard from './DomainCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import App from '../CoursePlans/CoursePlans';
import api from '../../../../api/api';
import { useNavigate } from 'react-router-dom';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }} // Adjust the position as needed
      onClick={onClick}
    >
      <GrPrevious style={{ color: 'black', fontSize: '24px' }} /> {/* Customize the icon */}
    </div>
  );
};



// Custom right arrow


const DomainSlider = () => {
  const navigate = useNavigate();
  const domains = [
    {
      id:1,
      title: 'Web Development',
      description: 'Web development internship that provides practical work experience and an introduction to crafting and enhancing web-based systems. This opportunity offers engaging challenges.',
      registered: 47,
      availableSlots: 3,
    },
    {
      id:2,
      title: 'UI / UX Design',
      description: 'UI/UX Design internship that provides practical work experience and an introduction to crafting and enhancing user experiences. This opportunity offers engaging challenges.',
      registered: 47,
      availableSlots: 3,
    },
    {
      id:2,
      title: 'Data Science',
      description: 'Data Science internship offering practical work experience in data analysis and machine learning.',
      registered: 50,
      availableSlots: 5,
    },
    // Add more domains as needed
  ];
  const [selectedId,setSelectedId] = useState('')
  const [data,Setdata] = useState([])
  const [loading, setLoading] = useState(true);
  const getDomainData = async()=>
    {
      try
      {
        const res = await api.get('/getDomains')
        console.log(res);
        Setdata(res.data);
        setLoading(false);
        
      }
      catch(err)
      {
        console.error(err);
      }
    }
    useEffect(()=>
    {
      getDomainData()
    },[])
  const handleDomain = (id,title)=>
    {
      setSelectedId(id)
      console.log(id)
      navigate(`/Internships/InternDetails/DomainPage/CoursePlans/${id}`)
      
     
    }
  const CustomArrowSmall = ({ onClick }) => (
    <div onClick={onClick} style={styles.arrow}>
      <GrPrevious size={30} /> {/* Custom left arrow icon */}
    </div>
  );
  
  const CustomArrow = ({ onClick }) => (
    <div onClick={onClick} style={style.arrow}>
      <GrPrevious size={30} /> {/* Custom left arrow icon */}
    </div>
  );
  const styles = {
    arrow: {
      display: "block",
      zIndex: 1,
      position: "absolute",
      left: "-30px",
      padding:"10px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
    },
  };

  const style = {
    arrow: {
      display: "block",
      zIndex: 1,
      position: "absolute",
      left: "-30px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
    },
  };
  
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrowSmall style={{ display: "none" }} />, // Right arrow will be hidden
    prevArrow: <CustomArrowSmall /> // Left arrow with custom icon
  };

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <CustomArrow style={{ display: "none" }} />, // Right arrow will be hidden
      prevArrow: <CustomArrow /> // Left arrow with custom icon
    };
    if (loading) {
      return <div>Loading...</div>; // Show loading spinner or placeholder
    }
  
    if (!data.length) {
      return <div>No domains available</div>; // Handle case when data is empty
    }
  return (
    <div className="my-10 mx-5 bg-[#D4CAAA] text-[#17212E] font-times">

      {/* <h2 className="text-2xl md:text-4xl font-semibold text-[#17212E] md:ml-5 mb-4">View Domain</h2> */}
      
      <div className='hidden md:block'>
      <div className='text-center '>
        <h1 className='text-4xl font-bold'>In-Demand Domains</h1>
      </div>
      <div className='md:p-10 '>
    
    <Slider {...settings} className="flex items-center ">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> {/* Adding padding here controls the gap */}
          <div className="w-full h-full"> {/* Ensures card maintains its size */}
            <DomainCard
            id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div>
  
    {/* <div className='text-3xl text-center font-bold'>
      <h1>
        Trending Domains
      </h1>
    </div> */}
    
    {/* <div className='md:p-10'>
    <Slider {...settings} className="flex items-center">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div> */}

    
    
    {/* <div className='text-3xl text-center font-bold'>
      <h1>
        Explore Popular Domain
      </h1>
    </div>
    <div className='md:p-10'>
    <Slider {...settings} className="flex items-center">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div> */}

    
    {/* <div className='text-3xl text-center font-bold'>
      <h1>
      Featured Domains
      </h1>
    </div>
    <div className='md:p-10'>
    <Slider {...settings} className="flex items-center">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div>
 */}
    
    {/* <div className='text-3xl text-center font-bold'>
      <h1>
      Top Domains to Explore
      </h1>
    </div>
    <div className='md:p-10'>
    <Slider {...settings} className="flex items-center">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div> */}

    </div>


    <div className='md:hidden'>
    
    
    {/* <div className='text-center p-2'>
        <h1 className='text-3xl font-bold'>In-Demand Domains</h1>
      </div>
      <div className='md:p-10 '>
    
    <Slider {...setting} className="flex items-center ">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div> */}
  
    {/* <div className='text-3xl p-2 text-center font-bold'>
      <h1>
        Trending Domains
      </h1>
    </div>
    <div className='md:p-10'>
    <Slider {...setting} className="flex items-center">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div>

    
    
    <div className='text-3xl p-2 text-center font-bold'>
      <h1>
        Explore Popular Domain
      </h1>
    </div>
    <div className='md:p-10'>
    <Slider {...setting} className="flex items-center">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div>

    
    <div className='text-3xl p-2 text-center font-bold'>
      <h1>
      Featured Domains
      </h1>
    </div>
    <div className='md:p-10'>
    <Slider {...setting} className="flex items-center">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div>

    
    <div className='text-3xl p-2 text-center font-bold'>
      <h1>
      Top Domains to Explore
      </h1>
    </div>
    <div className='md:p-10'>
    <Slider {...setting} className="flex items-center">
      {data.map((domain, index) => (
        <div key={index} className="px-2  mb-10"> 
          <div className="w-full h-full"> 
            <DomainCard
             id={domain._id}
              title={domain.title}
              description={domain.description}
              registered={domain.registered}
              availableSlots={domain.availableSlots}
              handleDomain={handleDomain}
            />
          </div>
        </div>
      ))}
    </Slider>

    </div> */}
 
      </div>
      
    </div>
  );
};

export default DomainSlider;