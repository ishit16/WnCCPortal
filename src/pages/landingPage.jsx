import { Button } from "antd";
import { Helmet } from "react-helmet";
import { AuthButton } from "../components/buttons/Authentication";
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
          <button class="mt-16 text-lg w-96 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none">
            Login with SSO
          </button>
        </main>
        <footer className="text-lg container mx-auto p-6 flex flex-col md: flex-row items-center justify-between">
          <p className="font-sans">Built with {`\u2764`} by Ishit Garg</p>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
