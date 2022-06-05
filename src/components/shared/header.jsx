import { ReactComponent as ResoBinLogo } from "../../assets/logo.svg";

function Header() {
  return (
    <>
      <div className="sticky z-10 flex items-center justify-center h-12 bg-slate-900 shadow-md -my-2 -mx-2">
        <ResoBinLogo width="32" />
        <div className="text-white underline decoration-4 font-semibold text-2xl font-sans absolute flex justify-center left-2">
          SOC Portal
        </div>
        <div className="mx-1 text-white underline decoration-4 font-semibold text-2xl font-sans absolute flex justify-center right-2">
          WnCC
        </div>
      </div>
    </>
  );
}

export default Header;
