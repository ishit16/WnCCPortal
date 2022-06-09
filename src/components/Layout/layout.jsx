import Menu from "../menu/menu";
import Header from "../shared/header";

function AppContainer({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer className="text-lg container mx-auto flex flex-col md: flex-row items-center justify-between py-4">
        <p className="font-bold font-sans text-white">
          Built with {`\u2764`} by Ishit Garg
        </p>
      </footer>
    </>
  );
}

export default AppContainer;
