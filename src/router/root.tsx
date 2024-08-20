import { useContext, useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import routeNames from "./routeNames";
import TOKEN from "../lib/token";
import { UserContext } from "../context/UserContext";
import { HomePage } from "../pages/Home";
import { EventsPage } from "../pages/Events";
import { AboutPage } from "../pages/About";
import ServicesPage from "../pages/Services";
import { ContactPage } from "../pages/Contact";

const publicRoutes = ["/login", "/reset-password"];

export const RootRouter = () => {
  const { user, isUserFetched, isUserAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();

  const isRoutePublic = useMemo(
    () => publicRoutes.includes(location.pathname),
    [location.pathname],
  );

  useEffect(() => {
    // if (!TOKEN.get() || (!isUserAuthenticated && isUserFetched)) {
    //   navigate(routeNames.home());
    // }
  }, [
    isRoutePublic,
    isUserAuthenticated,
    isUserFetched,
    location.pathname,
    navigate,
    user,
  ]);

  return (
    <Routes>
      <Route path={routeNames.home()} element={<HomePage />} />
      <Route path={routeNames.eventi()} element={<EventsPage />} />
      <Route path={routeNames.oNama()} element={<AboutPage />} />
      <Route path={routeNames.usluge()} element={<ServicesPage />} />
      <Route path={routeNames.kontakt()} element={<ContactPage />} />
    </Routes>
  );
};
