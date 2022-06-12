import ProjectCard from "../components/shared/projectCard";
import "./auth.css";
function ApprovedProjects() {
  return (
    <div>
      <div className="md:ml-36">
        <h1 className="font-bold font-sans text-white text-xl text-center md:text-3xl md:mt-12 mb-4">
          Check out the <span className="text-red-500">Projects</span> of this
          year
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
