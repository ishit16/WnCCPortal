import { StrictMode, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import initSentry from "./config/sentry";
import { store, persistor } from "./store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");

const StrictApp = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </Router>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<StrictApp />, rootElement);
} else {
  ReactDOM.render(<StrictApp />, rootElement);
}
