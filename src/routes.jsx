import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";
import Error404 from "./pages/error404";
import LandingPage from "./pages/landingPage";

const Login = lazy(() => import("./pages/landingPage"));
const Home = lazy(() => import("./pages/home"));

export const DashboardRoutes = () => <Route path="/" element={<Home />} />;

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LandingPage />} />
    <Route path="/error" element={<Error404 />} />
    <Route
      path="*"
      element={<PrivateRoute component={Home} redirectTo="/login" />}
    />
  </Routes>
);
