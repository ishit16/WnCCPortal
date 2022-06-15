import { Link } from "react-router-dom";
import "./shared.css";
import project1 from "../../assets/project1.png";

function ProjectCard() {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 project-card">
        <img src={project1} alt="project1" className="h-40" />
        <h2 className="text-center font-project-heading px-2">
          Dummy Project SOC
        </h2>
        <Link
          to={"/"}
          className="text-lg  font-para-home no-underline  text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium text-center p-3"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
