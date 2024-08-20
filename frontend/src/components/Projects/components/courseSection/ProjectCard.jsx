import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  buttonText,
  imageData,
  openForm,
}) => (
  <div className="Project-card">
    <div className="max-w-screen-sm rounded-3xl shadow-md overflow-hidden bg-[#F5CF6B] md:w-fit]">
      <Link to="fullstack">
        <div className="p-4">
          <div className="mb-4">
            <img src={imageData} className="w-full rounded-3xl" alt={title} />
          </div>
          <div className="">
            <h3 className="text-2xl text-center font-bold text-[#17212E] mb-2">
              {title}
            </h3>
            <p className="text-black text-xl font-bold w-10/12 mb-4 text-justify ">
              {description}
            </p>
            <div className="flex justify-center">
              <button
                className="bg-[#17212E] text-white text-xl rounded-full font-bold py-2 px-4"
                onClick={openForm}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default ProjectCard;
