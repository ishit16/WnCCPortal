import { ReactComponent as ResoBinLogo } from "../../assets/logo.svg";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, selectIsAuthenticated } from "../../store/authSlice";
import useDevice from "../../hooks/useDevice";
import LogoutButton from "./logoutButton";
import "./shared.css";
import ProfileIcon from "./avatar";

const Header = ({ disable = [], children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const handleLogout = async () => dispatch(logoutAction());
  const { isPhone } = useDevice();

  return (
    <div className="z-10 sticky top-0 flex items-center justify-center h-12 bg-slate-900 shadow-md w-full left-0 right-0">
      <ResoBinLogo width="32" />
      <div className="text-white underline decoration-4 font-semibold text-2xl font-sans absolute flex justify-center left-3">
        {!isPhone && <ProfileIcon />}
      </div>
      {loading}
      {isAuthenticated ? (
        <LogoutButton />
      ) : (
        <div className="text-white underline decoration-4 font-semibold text-2xl font-sans absolute flex justify-center right-3">
          {!isPhone && <>WnCC</>}
        </div>
      )}
    </div>
  );
};

export default Header;
