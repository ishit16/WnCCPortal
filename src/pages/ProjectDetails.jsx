import ProjectImageCard from "../components/ProjectDetails/projectImage";
import ProjectInfoCard from "../components/ProjectDetails/projectInfo";
import ProjectStats from "../components/ProjectDetails/projectStats";

export default function ProjectDetails() {
  return (
    <>
      <div className="overflow-x-hidden lg:ml-36 py-12 min-h-screen">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
              <ProjectInfoCard />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <ProjectImageCard />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <ProjectStats></ProjectStats>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <ProjectStats></ProjectStats>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <ProjectStats></ProjectStats>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
