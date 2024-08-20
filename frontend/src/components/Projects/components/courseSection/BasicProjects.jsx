import ProjectCard from "./ProjectCard";
import thu from "./Course-thumb.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BasicProjects = ({ openForm }) => {
  const projects = [
    {
      title: "Full Stack Development",
      description:
        "Master data science and transform raw data into actionable insights.",
      buttonText: "Enroll now",
      ImageData: thu,
    },
    {
      title: "UI/UX Design",
      description:
        "Master data science and transform raw data into actionable insights.",
      buttonText: "Enroll now",
      ImageData: thu,
    },
    {
      title: "Robotics",
      description:
        "Master data science and transform raw data into actionable insights.",
      buttonText: "Enroll now",
      ImageData: thu,
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Master data science and transform raw data into actionable insights.",
      buttonText: "Enroll now",
      ImageData: thu,
    },
    {
      title: "Machine Learning",
      description:
        "Master data science and transform raw data into actionable insights.",
      buttonText: "Enroll now",
      ImageData: thu,
    },
  ];

  return (
    // <Slider {...settings}>
    <div className="py-10 px-4 grid grid-flow-row">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:mt-12 mt-12">
          <h2 className=" text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-wrap text-center">
            Basic Projects
          </h2>
          <div className="flex justify-center items-center ml-8">
            <p className="text-yellow-500 text-2xl md:text-5xl text-wrap font-bold leading-normal">
              Simple and realtime projects to elevate your knowledge!
            </p>
          </div>
        </div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            buttonText={project.buttonText}
            imageData={project.ImageData}
            openForm={openForm}
          />
        ))}
      </div>
    </div>
  );
};

export default BasicProjects;

{
  /* <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              imageData={project.ImageData}
              openForm={openForm}
            /> */
}
