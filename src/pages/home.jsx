import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/shared/header";
import "./auth.css";
function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Seasons of Code</title>
      </Helmet>
      <Header />
      <div className="w-2/3 home-color rounded-xl mx-auto mt-16">
        <section className="wrapper">
          <header className="text-center p-2">
            <h2 className="pt-4 text-3xl text-white font-sans">
              Join the Force
            </h2>
            <p className="text-white font-sans">
              Do or do not. There is no try
            </p>
          </header>
          <div className="max-w-6xl p-3 mx-auto">
            <div className="row mx-auto">
              <div className="col-md-2 col-sm-12 text-center p-3">
                <section>
                  <img className="major-soc" src="src\assets\light-siber.svg" />
                  <h3 className="text-white">Master</h3>
                  <p className="text-white">
                    I can feel you code. <br /> It gives you focus. It makes you
                    stronger. <br /> Use the Force <br /> and someday you will
                    be the most powerful Jedi ever.
                  </p>
                  <Link to={"/"}>
                    <button
                      type="button"
                      size="large"
                      className="opacity-100 border-none focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      <span className="text-white font-sans font-bold text-lg">
                        Login with SSO
                      </span>
                    </button>
                  </Link>
                </section>
              </div>

              <div className="col-md-6 col-sm-12 text-center p-3 mx-auto">
                <section>
                  <img
                    className="major-soc"
                    src="src\assets\light-siber-one.svg"
                  />
                  <h3 className="text-white">Padawan</h3>
                  <p className="text-white">
                    The Force is strong with you. <br />
                    Train yourself to let go of everything you fear to loose.{" "}
                    <br /> The Force will be with you always. <br /> Ready are
                    you?
                  </p>
                  <Link to={"/"}>
                    <button
                      type="button"
                      size="large"
                      className="opacity-100 border-none focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      <span className="text-white font-sans font-bold text-lg">
                        Login with SSO
                      </span>
                    </button>
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
