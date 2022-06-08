import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import error404 from "../assets/error404.jpg";
import { ReactComponent as ResoBinLogo } from "../assets/logo.svg";

import "./auth.css";
function Error404() {
  return (
    <>
      <div className="min-h-screen flex flex-col text-white">
        <main className="container mx-auto px-6  flex-1 text-center">
          <div className="my-auto box-class">
            <img className="error-class" src="src/assets/flaterror.png"></img>
            <p className="text-2xl font-sans font-bold ">Page not Found!</p>
          </div>
        </main>
      </div>
    </>
  );
}

export default Error404;
