import Helmet from "react-helmet";
import ChooseRoll from "../components/home/ChooseRole";

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
