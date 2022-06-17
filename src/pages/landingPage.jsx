import { Helmet } from "react-helmet";
import "./auth.css";
import { ReactComponent as ResoBinLogo } from "../assets/logo.svg";
import { getLoginURL, SSO } from "../config/sso";
import useQueryString from "../hooks/useQueryString";
import { getAuthStatusAction } from "../store/authSlice";
import CSRFToken from "../helpers/csrftoken";
import { loginAction } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { deleteQueryString, getQueryString } = useQueryString();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  useEffect(() => {
    // * isAuthenticated === true => already authenticated => redirect away from login
    // * isAuthenticated === null => auth status unknown => check with backend server
    // * isAuthenticated === false => not authenticated => check if auth is possible

    if (isAuthenticated) {
      console.log("Fuck you, I am not logged in!");
      const state = JSON.parse(getQueryString("state")) ?? "/";
      navigate(state, { replace: true });
    } else if (isAuthenticated === null) {
      console.log("Do I look like a null!?");
      dispatch(getAuthStatusAction());
    } else {
      console.log("Ahhh! finally");
      const code = getQueryString("code");
      if (code) {
        console.log(code);

        const loginUser = async (params) => {
          try {
            console.log("success");

            const response = await dispatch(loginAction({ params }));
            toast("Logged in Successfully.", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
          } catch (error) {
            toast.error(error);
          }
        };

        const params = { code, redir: SSO.BASE_REDIRECT_URI };
        deleteQueryString("code");
        console.log("failure");

        loginUser(params);
      }

      // ? If SSO login is unsuccessfull, an error param appears in the query string
      const error = getQueryString("error");
      if (error) {
        toast({ status: "error", content: `Error: ${error}` });
        deleteQueryString("error");
      }
    }
  }, [dispatch, navigate, getQueryString, deleteQueryString, isAuthenticated]);

  const redirectLogin = () => {
    window.location.href = getLoginURL(location.state?.from);
  };
  return (
    <>
      <Helmet>
        <title>Login - Seasons of Code</title>
      </Helmet>
      <CSRFToken />
      <div className="min-h-screen flex flex-col text-white">
        {/* <Header /> */}
        <main className="container mx-auto pt-16 flex-1 text-center">
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

            {/* Change the Logo with SOC Logo later */}

            <ResoBinLogo width="5rem" alt="logo" />
            <div className="py-2 px-2 md:py-2 md:px-2 lg:py-2 lg:px-2 w-fit mx-auto my-auto">
              <button
                type="button"
                size="large"
                className="opacity-100 border-none focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={redirectLogin}
              >
                <span className="text-white font-sans font-bold text-lg">
                  Login with SSO
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LandingPage;
