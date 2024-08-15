// src/components/FullScreenCarousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Class from "../../assets/images/children_class.jpg"

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 25 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 25, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const FullScreenCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

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
