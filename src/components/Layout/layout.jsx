import Menu from "../menu/menu";
import { MenuItem } from "../menu/menuItem";
import Header from "../shared/header";
import { useLocation } from "react-router-dom";

function AppContainer({ children }) {
  const pathName = window.location.pathname;
  const location = useLocation();

  return (
    <div>
      <Header />
      {location.pathname != "/login" && <Menu />}
      {children}
      <footer className="text-lg container mx-auto flex flex-col items-center justify-between py-4">
        <p className="font-bold font-sans text-white">
          Built with {`\u2764`} by Ishit Garg
        </p>
      </footer>
    </div>
  );
}

export default AppContainer;
