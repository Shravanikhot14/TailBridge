import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import BrowsePets from "./pages/BrowsePets";
import PetDetails from "./pages/PetDetails";
import Login from "./pages/Login";
import UserRegistration from "./pages/UserRegistration";
import Favourites from "./pages/Favourites";
import MyApplications from "./pages/MyApplications";
import ReportRescue from "./pages/ReportRescue";
import MyRescueReports from "./pages/MyRescueReports";
import NgoRegistration from "./pages/NgoRegistration";
import NotFound from "./pages/NotFound";
import RegisterChoice from "./pages/RegisterChoice";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "browsepets",
        element: <BrowsePets />,
      },
      {
        path: "pets/:id",
        element: <PetDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register-choice",
        element: <RegisterChoice/>
      },
      {
        path: "user-registration",
        element: <UserRegistration/>,
      },
      {
        path: "ngo-registration",
        element: <NgoRegistration />,
      },

      

      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "my-applications",
        element: <MyApplications />,
      },
      {
        path: "report-rescue",
        element: <ReportRescue />,
      },
      {
        path: "my-rescue-reports",
        element: <MyRescueReports />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
