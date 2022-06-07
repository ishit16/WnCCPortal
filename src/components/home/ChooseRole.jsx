import { Link } from "react-router-dom";
import "../../pages/auth.css";

function ChooseRoll() {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-16 md:mt-32  w-2/3 home-color rounded-xl mx-auto">
        <section className="wrapper">
          <header className="text-center p-2">
            <h2 className="pt-4 text-2xl md:text-4xl text-white font-heading-home">
              Join the Force
            </h2>
            <p className="text-white font-sans">
              Do or do not. There is no try
            </p>
          </header>
          <div className="max-w-6xl p-3 mx-auto">
            <div className="row-soc mx-auto">
              <div className=" grid col-span-6 md:col-span-12 text-center p-3 mx-auto">
                <section>
                  <img className="major-soc" src="src\assets\light-siber.svg" />
                  <h3 className="text-white font-sans text-lg md:text-3xl font-heading-home">
                    Master
                  </h3>
                  <p className="text-white font-sans md:text-lg font-para-home">
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
                      <span className="text-white font-sans font-bold text-lg md:text-2xl">
                        Master
                      </span>
                    </button>
                  </Link>
                </section>
              </div>

              <div className=" grid col-span-6 md:col-span-12 text-center p-3 mx-auto">
                <section>
                  <img
                    className="major-soc"
                    src="src\assets\light-siber-one.svg"
                  />
                  <h3 className="text-white font-sans text-lg md:text-3xl font-heading-home">
                    Padawan
                  </h3>
                  <p className="text-white font-sans md:text-lg font-para-home">
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
                      <span className="text-white font-sans font-bold text-lg md:text-2xl">
                        Padawan
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
export default ChooseRoll;
