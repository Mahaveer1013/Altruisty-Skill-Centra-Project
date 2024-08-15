import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import community from "./community.jpeg";
import { IoIosSend } from "react-icons/io";
import Slider from "react-slick";
import { FaImage } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import Post1 from "./Post1.webp";
import { Link } from "react-router-dom";

import "./HomeCommunity.css";
import Comments from "./Comments";
import Share from "./Share";
function HomeCommunity() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // screens larger than 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // screens larger than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  const [like, setLike] = useState(false);
  console.log(like);
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [isshareOpen, setshareOpen] = useState(false);

  return (
    <div className="w-[100%] h-full m-2 mt-10 font-times bg-[#f7d883] ">
      {/* middle */}

      <div className="container mx-auto mb-[30px] rounded-lg max-sm:mx-[20px] ">
        <Slider {...settings}>
          <div className="middle text-white">
            <div className="flex flex-col items-center w-full h-full justify-end space-y-[10px] pb-[10px]">
              <h1 className="text-4xl font-bold ">Webinar</h1>
              <div>
                <button className="border-Yellow border-2px rounded text-lg font-bold bg-Yellow text-Darkblue w-[200px] h-[40px]">
                  Claim your spot now
                </button>
              </div>
              <p className="text-center">*Limited Registrations Only.Register befor we're filled</p>
            </div>
          </div>

          <div className="middle text-white">
            <div className="flex flex-col items-center w-full h-full justify-end space-y-[10px] pb-[10px]">
              <h1 className="text-4xl font-bold ">Webinar</h1>
              <div>
                <button className="border-Yellow border-2px rounded text-lg font-bold bg-Yellow text-Darkblue w-[200px] h-[40px]">
                  Claim your spot now
                </button>
              </div>
              <p  className="text-center">*Limited Registrations Only.Register befor we're filled</p>
            </div>
          </div>
          <div className="middle text-white">
            <div className="flex flex-col items-center w-full h-full justify-end space-y-[10px] pb-[10px]">
              <h1 className="text-4xl font-bold ">Webinar</h1>
              <div>
                <button className="border-Yellow border-2px rounded text-lg font-bold bg-Yellow text-Darkblue w-[200px] h-[40px]">
                  Claim your spot now
                </button>
              </div>
              <p  className="text-center">*Limited Registrations Only.Register befor we're filled</p>
            </div>
          </div>
        </Slider>
      </div>
      {/* messages */}

      <div className="w-[11/12] max-sm:w-[92%]  bg-white rounded-lg p-2 mb-[20px] max-sm:mx-[10px]">

        <div className="flex ">
          <CgProfile size="50" />
          <span className="ml-[20px]">
            <h1 className="text-lg font-bold">John Doe</h1>
            <p className="text-gray-400">50 mins ago</p>
          </span>
        </div>

        <p className="mb-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eum unde distinctio laboriosam doloremque quidem corporis, iusto
          molestiae commodi! Totam veniam quibusdam nisi reiciendis eveniet
          incidunt vitae, repellat voluptatem maiores?
        </p>
        <hr />
        <div className="w-full flex justify-between mt-[10px] lg:px-[100px]">
          <span className=" flex hover:text-Yellow cursor-pointer ">
            <BiLike size="30" />
            <p className="">Like</p>
          </span>
          <span className=" flex hover:text-Yellow cursor-pointer text-Darkblue"  onClick={() => setOverlayOpen(!isOverlayOpen)}>
            <FaRegComments size="30" />
            <p>Comments</p>
          </span>
          <span className=" flex hover:text-Yellow cursor-pointer text-Darkblue" onClick={() =>setshareOpen(!isshareOpen)}>
            <RiShareForwardLine size="30" />
            <p>share</p>
          </span>
        </div>
      </div>

      <div className="w-[11/12] max-sm:mx-[10px] max-sm:w-[92%]  bg-white rounded-lg p-2 mb-[20px]">
        <div className="flex ">
          <CgProfile size="50" />
          <span className="ml-[20px]">
            <h1 className="text-lg font-bold">John Doe</h1>
            <p className="text-gray-400">50 mins ago</p>
          </span>
        </div>
        <p className="mb-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eum unde distinctio laboriosam doloremque quidem corporis, iusto
          molestiae commodi! Totam veniam quibusdam nisi reiciendis eveniet
          incidunt vitae, repellat voluptatem maiores?
        </p>
        <div className="mb-[10px]">
          <img src={Post1} alt="" className="" />
        </div>
        <hr />
        <div className="w-full flex justify-between mt-[10px] lg:px-[100px]">
          <span
            className="text-gray-400 flex hover:text-Yellow cursor-pointer items-center"
            
          >
            <BiLike size="30" />
            <p>Like</p>
          </span>


          <span
            className="text-gray-400 flex hover:text-Yellow 
          cursor-pointer"
            onClick={() => setOverlayOpen(!isOverlayOpen)}
          >
            <FaRegComments size="30" />
            <p>Comments</p>
          </span>

          <span className="text-gray-400 flex hover:text-Yellow cursor-pointer" onClick={() =>setshareOpen(!isshareOpen)}>
            <RiShareForwardLine size="30" />
            <p>share</p>
          </span>
        </div>
      </div>
      <Comments
        isOpen={isOverlayOpen}
        onClose={() => setOverlayOpen(!isOverlayOpen)}
      />
      <Share isOpen={isshareOpen} onClose={()=>setshareOpen(!isshareOpen)} />

      {/* end */}
      {/* <div className="mt-[40px] ml-[40px] ">
        <input
          type="text"
          placeholder="Start Posting..."
          className="h-[60px] w-11/12 p-2 pl-[40px] rounded-2xl border-2px border-gray shadow-xl relative"
        />
        <span className="absolute right-[120px] mt-[10px]">
          {" "}
          <FaImage size="40" />
        </span>

        <span className="absolute mt-[10px] ml-[10px] cursor-pointer">
          <IoIosSend size="40" />
        </span>
      </div> */}
      <div className="w-[100%] max-sm:w-[90%] flex justify-between space-x-6 mt-[40px] max-sm:pb-[10px] max-sm:ml-[10px]">
        <form action="" className="w-[100%] ">
          <div className="relative flex items-center text-gray-400 text-lg font-semibold focus-within:text-gray-600">
            {/* <IoSearchOutline size="20" className="absolute pointer-events-none ml-2"/> */}
            <input
              text="text"
              name="search"
              placeholder="Start Posting"
              autoComplete="off"
              className="w-full h-[50px] px-3 pl-8 py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-2xl shadow-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
            <FaImage size="40" className="absolute right-[10px] ml-2" />
          </div>
        </form>
        <span>
          <IoIosSend size="40" />
        </span>
      </div>
    </div>
  );
}

export default HomeCommunity;
