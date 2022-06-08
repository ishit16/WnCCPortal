import Helmet from "react-helmet";
import ChooseRoll from "../components/home/ChooseRole";
import Header from "../components/shared/header";

function Home() {
  return (
    <>
      <Helmet>
        <title>Seasons of Code</title>
      </Helmet>
      {/* <Header /> */}
      <div>
        <ChooseRoll />
      </div>
    </>
  );
}
export default Home;
