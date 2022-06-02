import { Button } from "antd";
import { Helmet } from "react-helmet";
import "./auth.css";
import { ReactComponent as ResoBinLogo } from "../assets/logo.svg";

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Login - Seasons of Code</title>
      </Helmet>

      <div className="min-h-screen flex flex-col text-white">
        <main className="container mx-auto px-6 pt-16 flex-1 text-center">
          <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl uppercase">
            Welcome to
          </h2>
          <h1 className="font-sans text-3xl md:text-4xl lg:text-6xl font-extrabold uppercase mb-8">
            Seasons of Code Portal
          </h1>

          <div className="text-lg md:text-2xl lg:text-3xl py-2 px-2 md:py-2 md:px-2 lg:py-2 lg:px-2 bg-white bg-opacity-10 w-fit mx-auto my-auto rounded-full">
            <img
              className="object-scale-down py-2 h-12 w-48"
              src="src/pages/images/logo.png"
            />
          </div>
          <div className="auth-container">
            <h1 className="font-sans">Join the Force</h1>
            <ResoBinLogo width="5rem" alt="logo" />
            <div className="py-2 px-2 md:py-2 md:px-2 lg:py-2 lg:px-2 w-fit mx-auto my-auto">
              <button
                type="button"
                size="large"
                class="opacity-100 border-none focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                <span className="text-white font-sans font-bold text-lg">
                  Login with SSO
                </span>
              </button>
            </div>
          </div>
        </main>
        <footer className="text-lg container mx-auto p-6 flex flex-col md: flex-row items-center justify-between">
          <p className="font-bold font-sans">
            Built with {`\u2764`} by Ishit Garg
          </p>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
