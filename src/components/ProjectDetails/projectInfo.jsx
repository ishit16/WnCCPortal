export default function ProjectInfoCard() {
  return (
    <div className="overflow-y-auto relative flex flex-col min-w-0 max-h-96 break-words w-full mb-6 shadow-lg rounded bg-slate-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-white mb-1 text-xs font-semibold">
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
