import Slider from "react-slick";
import { useState } from "react";

import fullstack_img from "../../Images/fullstack.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thumbsup from "../../Images/thumbsup.png";
import avatar from "../../Images/avatar1.png";
import RegistorForm from "../RegistorForm";
import { Link } from "react-router-dom";

const Fullstack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [isFormOpen, SetFormOpen] = useState(false);

  const openForm = () => {
    SetFormOpen(!isFormOpen);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-row bg-[#17212E]">
        {/*left part */}
        <div className="w-1/2 font-bold text-white ml-8 md:mt-14 mt-5 pb-7">
          <h1 className="md:text-7xl text-2xl md:mt-14 md:mb-5">Full Stack</h1>
          <h1 className="md:text-7xl md:ml-36 text-2xl">Developement</h1>
          <div className="bg-[#F5CF6B] text-lg w-fit rounded-xl md:mx-auto md:mt-14 mt-4 px-4 py-2">
            <Link to="adv/id">
              <button className="md:px-5 md:py-2 text-black md:text-xl">
                Explore now
              </button>
            </Link>
          </div>
        </div>

        {/* right part */}
        <div className="w-1/2">
          <img
            src={fullstack_img}
            className="object-cover w-[100%] h-[100%]"
            alt="header_img"
          />
        </div>
      </div>

      {/* Overview */}
      <div className="py-14">
        <h1 className="text-3xl font-bold ml-6">OVERVIEW</h1>
      </div>
      {/* Slick Card */}
      <div className="container md:max-w-screen md:mx-auto">
        <Slider {...settings}>
          <div className=" card bg-slate-500 h-80 w-screen">
            <h3></h3>
          </div>
          <div className=" card bg-lime-700 h-80 w-screen">
            <h3></h3>
          </div>
          <div className=" card bg-blue-700 h-80 w-screen">
            <h3></h3>
          </div>
        </Slider>
      </div>

      {/* Paragraph */}
      <div>
        <h1 className="md:text-2xl text-xl  md:mt-8 font-semibold md:px-36 px-4 md:pt-20 pt-12">
          The Fullstack Training Class is an immersive, interactive program
          designed to transform you into a proficient fullstack developer.
          Covering both front-end and back-end development, the course includes
          HTML, CSS, JavaScript, React.js, Node.js, Express.js, SQL, NoSQL, and
          deployment strategies. Through live sessions with industry experts,
          hands-on projects, and collaborative learning, you’ll gain practical
          experience and build a portfolio of real-world work.{" "}
        </h1>
        <h1 className="md:text-2xl text-xl  font-semibold md:px-36 px-4 pt-12">
          With access to mentorship, comprehensive learning materials, and
          career support, this program is ideal for aspiring developers,
          professionals transitioning to tech, and those wanting to expand their
          web development skills.
        </h1>
      </div>

      {/* thumbsup box */}
      <div className="mt-20 md:h-2/3 bg-gradient-to-r from-[#F5CF6B] to-[#A88B42] flex md:flex-row flex-col justify-center items-center">
        <div className="md:w-1/3 w-1/2 md:py-10 py-4 mx-auto">
          <h1 className="md:text-5xl md:ml-16 text-3xl font-semibold text-[#17212E] ">
            What are you
          </h1>
          <h1 className="md:text-5xl md:ml-16 text-3xl font-semibold md:mt-3 text-[#17212E]">
            waiting for?
          </h1>
          <h1 className="md:text-6xl text-2xl md:ml-14 md:mt-12 mt-6 font-semibold text-[#17212E] ">
            Register Now!
          </h1>
        </div>
        <div className="md:w-1/3 w-3/4">
          <img src={thumbsup} alt="thumbsup" />
        </div>
        <div className="md:w-1/3 py-8 mx-auto">
          <div className="bg-[#17212E] h-[80%] w-[80%] border border-[#F5CF6B] rounded-xl mt-7">
            <h1 className="p-5 text-3xl text-center mt-5 text-white">
              Full Stack Developement
            </h1>
            <div className="flex justify-center p-7">
              <button
                className="text-[#17212E] font-bold bg-[#F5CF6B] px-4 py-2 rounded-lg "
                onClick={openForm}
              >
                Register Now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mentors */}
      <div className="mb-60">
        <h1 className="text-4xl text-center mt-36 font-bold">Our Mentors</h1>
        <div className=" flex md:flex-row flex-col">
          <div className="md:w-1/2 w-screen p-6 h-8">
            <div className="bg-[#F5CF6B] md:py-12 py-6 md:px-10 px-3 rounded-lg">
              <div className="flex md:flex-row flex-col ">
                <div className="mx-auto md:mx-0">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="rounded-full w-36 object-cover object-center justify-center"
                  />
                </div>
                <div className="md:ml-5 mt-2 md:mt-8 flex flex-col justify-center">
                  <h1 className="md:text-4xl text-xl font-semibold">
                    Mentor Name
                  </h1>
                  <h1>Company, Position</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-screen p-6 h-8 mt-64 md:mt-0">
            <div className="bg-[#F5CF6B] py-12 px-10 rounded-lg">
              <div className="flex md:flex-row flex-col">
                <img
                  src={avatar}
                  alt="avatar"
                  className="rounded-full w-36 object-cover object-center"
                />
                <div className="md:ml-5 mt-2 md:mt-8">
                  <h1 className="md:text-4xl text-xl font-semibold">
                    Mentor Name
                  </h1>
                  <h1>Company, Position</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Register Form */}

      {isFormOpen && (
        <RegistorForm isFormOpen={isFormOpen} SetFormOpen={SetFormOpen} />
      )}
      <div className="w-full h-20 mt-16 bg-white"></div>
    </div>
  );
};

export default Fullstack;
