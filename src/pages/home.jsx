import Helmet from "react-helmet";
import Header from "../components/shared/header";

function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Seasons of Code</title>
      </Helmet>
      <Header />
    </div>
  );
}
export default Home;
