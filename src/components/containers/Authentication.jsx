import { Button } from "antd";
import "./auth.css";
import { ReactComponent as ResoBinLogo } from "../../assets/logo.svg";

function AuthContainer() {
  return (
    <>
      <div className="auth-container">
        <h1 className="font-sans">Join the Force</h1>
        <ResoBinLogo width="5rem" alt="logo" />
        <div className="py-2 px-2 md:py-2 md:px-2 lg:py-2 lg:px-2 w-fit mx-auto my-auto">
          <button
            type="button"
            size="large"
            className="opacity-100 border-none focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <span className="text-white font-sans font-bold text-lg">
              Login with SSO
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default AuthContainer;
