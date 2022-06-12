import ProjectImageCard from "../components/ProjectDetails/projectImage";
import ProjectInfoCard from "../components/ProjectDetails/projectInfo";

export default function ProjectDetails() {
  return (
    <>
      <div className="relative md:ml-36 min-h-screen">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
            <ProjectInfoCard />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <ProjectImageCard />
          </div>
        </div>
      </div>
    </>
  );
}
