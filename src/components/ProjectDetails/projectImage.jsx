import "./details.css";

export default function ProjectImageCard() {
  return (
    <>
      <div className="flex card-bg flex-col min-w-0 break-words w-full mb-6 z-5 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"></h6>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto"></div>
      </div>
    </>
  );
}
