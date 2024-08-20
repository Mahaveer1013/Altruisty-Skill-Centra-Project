// src/components/FullScreenCarousel.js
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Class from "../../assets/images/children_class.jpg"


const FullScreenCarousel = () => {

  const Image =[{
    id:1,
    URL:Class,
  },]

  return (
    <div >
      {/* if you add more content in the json then uncommand the slider tag to set us an slide */}
      {/* <Slider {...settings}> */}
         {
          Image.map((image)=>(
             
        <div key={image.id} className="h-[300px] md:h-[550px]">
        <img src={image.URL} className='h-full w-full' alt="" />
        </div>
          ))
         }

      {/* </Slider> */}
    </div>
  );
};

export default FullScreenCarousel;
