import Helmet from "react-helmet";
import ChooseRoll from "../components/home/ChooseRole";
import Header from "../components/shared/header";

function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Seasons of Code</title>
      </Helmet>
      <Header />
      <ChooseRoll />
    </div>
  );
}
export default Home;
