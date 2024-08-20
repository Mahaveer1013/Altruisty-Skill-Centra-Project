import ProjectCard from "./ProjectCard";
import thu from "./Course-thumb.png";

const AdvancedProjects = ({ openForm }) => {
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
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:mt-12 mt-12">
          <h2 className="md:text-5xl text-3xl font-bold text-gray-900 mb-6 text-nowrap text-jusity">
            Advanved Projects
          </h2>
          <div className="flex justify-center align-middle items-center ml-8">
            <p className="text-yellow-500 text-2xl md:text-5xl font-bold leading-normal">
              Take your skills to the next level with more challenging projects!
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

export default AdvancedProjects;
