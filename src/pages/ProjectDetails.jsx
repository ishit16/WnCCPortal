import ProjectImageCard from "../components/ProjectDetails/projectImage";
import ProjectInfoCard from "../components/ProjectDetails/projectInfo";
import ProjectStats from "../components/ProjectDetails/projectStats";

export default function ProjectDetails() {
  return (
    <>
      <div className="px-4 lg:ml-36 py-12 min-h-screen">
        <div className="mx-auto w-full">
          <div className="flex flex-wrap">
            <div className="px-4 w-full xl:w-7/12 mb-12 xl:mb-0">
              <ProjectInfoCard />
            </div>
            <div className="px-4 w-full xl:w-4/12">
              <ProjectImageCard />
            </div>
          </div>
        </div>
        <div className="mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="px-4 w-full lg:w-6/12 xl:w-3/12">
                <ProjectStats></ProjectStats>
              </div>
              <div className="px-4 w-full lg:w-6/12 xl:w-3/12">
                <ProjectStats></ProjectStats>
              </div>
              <div className="px-4 w-full lg:w-6/12 xl:w-3/12">
                <ProjectStats></ProjectStats>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
