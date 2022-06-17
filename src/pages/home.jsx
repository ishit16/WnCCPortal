import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import ChooseRoll from "../components/home/ChooseRole";
import { selectIsAuthenticated } from "../store/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import localStorage from "redux-persist/es/storage";

function Home() {
  const [visible, setVisible] = useState(true);
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hello!");
  }, []);
  const notify = () => {};

  return (
    <>
      <Helmet>
        <title>Seasons of Code</title>
      </Helmet>
      <div>
        <ChooseRoll />
      </div>
    </>
  );
}
export default Home;
