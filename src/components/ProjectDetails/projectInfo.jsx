import "../shared/shared.css";
import "./details.css";

export default function ProjectInfoCard() {
  return (
    <div className="overflow-y-auto flex flex-col min-w-0 max-h-96 break-words w-full mb-6 shadow-lg rounded card-bg">
      <div className="rounded-t mb-0 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className=" w-full max-w-full flex-grow flex-1">
            <h6 className="font-project-heading uppercase text-white mb-1 text-xs font-semibold">
              Overview
            </h6>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto overflow-y-auto">
        <p></p>
      </div>
    </div>
  );
}
