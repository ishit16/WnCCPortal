import ProjectCard from "../components/shared/projectCard";
import "./auth.css";
function ApprovedProjects() {
  return (
    <div>
      <div className="md:ml-36">
        <h1 className="font-bold font-heading-home text-white text-xl text-center md:text-4xl md:mt-12 mb-4">
          Endeavours of the <span className="text-red-500">Jedi</span> Order
        </h1>
        <div className="flex flex-wrap justify-center md:all-projects">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default ApprovedProjects;
