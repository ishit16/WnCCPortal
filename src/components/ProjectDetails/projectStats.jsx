import { FcBarChart } from "react-icons/fc";
import "./details.css";

export default function ProjectStats() {
  return (
    <div className="flex flex-col min-w-0 break-words card-bg rounded mb-6 xl:mb-0 shadow-lg">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="w-full pr-4 max-w-full flex-grow flex-1">
            <h5 className="text-red-500 uppercase font-bold text-xs">
              Total Registrations
            </h5>
            <span className="font-semibold text-xl text-red-500">43</span>
          </div>
          <div className="w-auto pl-4 flex-initial">
            <div
              className={
                "bg-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "
              }
            >
              <FcBarChart />
            </div>
          </div>
        </div>
        {/* <p className="text-sm text-blueGray-400 mt-4">
          <span className={statPercentColor + " mr-2"}>
            <i
              className={
                statArrow === "up"
                  ? "fas fa-arrow-up"
                  : statArrow === "down"
                  ? "fas fa-arrow-down"
                  : ""
              }
            ></i>{" "}
            {statPercent}%
          </span>
          <span className="whitespace-nowrap">{statDescripiron}</span>
        </p> */}
      </div>
    </div>
  );
}
