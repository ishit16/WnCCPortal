import Helmet from "react-helmet";
import ChooseRoll from "../components/home/ChooseRole";
import "react-toastify/dist/ReactToastify.css";

function Home() {
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
