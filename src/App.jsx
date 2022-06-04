import Helmet from "react-helmet";
import { Suspense } from "react";

import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import { selectAuthLoading } from "./store/authSlice";
function App() {
  const authLoading = useSelector(selectAuthLoading);

  return (
    <>
      <Helmet>
        <title>Seasons of Code</title>
        <meta name="description" content="WnCC's SOC Portal" />
      </Helmet>
      <Suspense>
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;
