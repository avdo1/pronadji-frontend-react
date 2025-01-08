import { Route, Routes } from "react-router-dom";
import routeNames from "./routeNames";
import { HomePage } from "../pages/Home";
import { EventsPage } from "../pages/Events";
import { AboutPage } from "../pages/About";
import ServicesPage from "../pages/Services";
import { ContactPage } from "../pages/Contact";
import { AdminPage } from "../pages/Admin";
import { MainLocals } from "../pages/MainLocals";
import { Category } from "../pages/Category";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={routeNames.admin()} element={<AdminPage />} />
      <Route
        path={routeNames.adminLocal({ id: ":id" })}
        element={<AdminPage />}
      />
      <Route path={routeNames.home()} element={<HomePage />} />
      <Route path={routeNames.mainLocals()} element={<MainLocals />} />
      <Route path={routeNames.category()} element={<Category />} />
      <Route path={routeNames.eventi()} element={<EventsPage />} />
      <Route path={routeNames.oNama()} element={<AboutPage />} />
      <Route path={routeNames.usluge()} element={<ServicesPage />} />
      <Route path={routeNames.kontakt()} element={<ContactPage />} />
    </Routes>
  );
};
