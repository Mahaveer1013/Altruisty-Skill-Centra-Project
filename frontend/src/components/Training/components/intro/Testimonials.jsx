import React from 'react';
import man1 from "../../assets/images/man1.jpeg"
import man2 from "../../assets/images/man2.jpeg"
import man3 from "../../assets/images/man3.jpeg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    image: man1 ,
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: man2,
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: man3,
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  
];

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


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  
  
    const setting = {
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
  
  
  return (
    <section className="bg-[#17212E] text-white py-12 font-times">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold">Testimonials</h2>
     <center>
     <hr className='w-40 mt-3 mb-5 border border-2' />
      
     </center>
      <p className="text-center text-xl mt-2 mb-8">What our customers are saying</p>
    </div>
    <section className="bg-[#17212E]  flex justify-center text-white ">
      <div className="w-[1050px] overflow-hidden hidden md:block ">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mt-12 border-8 hover:scale-105 border-[#17212E] w-40 flex justify-center rounded-2xl bg-white    items-center">
              <div className='flex justify-center h-96 w-80 '>
              <img src={testimonial.image} className='rounded-full  -mt-10 z-10   size-48' alt="" />
            
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </section>

    <section className="bg-[#17212E] md:hidden flex justify-center text-white ">
      <div className="w-[950px] overflow-hidden">
        <Slider {...setting}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className=" border-8 border-[#17212E]  flex justify-center bg-white  rounded-2xl  items-center">
              <div className='flex justify-center h-96 w-80 '>
              <img src={testimonial.image} className='absolute rounded-full z-10 p-10 size-72' alt="" />
            
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </section>
  );
};

export default Testimonials;
