import { Link } from "react-router-dom";
import "./shared.css";

function ProjectCard() {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 project-card">
        <img src="src/assets/project1.png" alt="project1" className="h-40" />
        <h2 className="text-center px-2">Dummy Project SOC</h2>
        <Link
          to={"/"}
          className=" font-sans no-underline text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium text-center p-3"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
