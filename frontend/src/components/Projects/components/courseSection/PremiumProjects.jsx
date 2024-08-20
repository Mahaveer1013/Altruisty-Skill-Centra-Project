import ProjectCard from "./ProjectCard";
import thu from "./Course-thumb.png";

const PremiumProjects = ({ openForm }) => {
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
    <div className="py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:mt-12 mt-12">
          <h2 className="text-3xl md:text-5xl md:ml-4 font-bold text-gray-900 mb-6 ">
            Premium Projects
          </h2>
          <div className="flex justify-center align-middle items-center ml-8">
            <p className=" text-yellow-500 text-2xl md:text-5xl font-bold leading-normal">
              Exclusive projects and resources for premium members!
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

export default PremiumProjects;
