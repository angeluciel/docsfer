import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import Sharing from "../pages/SharingPage";

export const ROUTES = [
  {
    path: "/",
    element: <Login />,
    label: "Login",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    label: "Dashboard",
  },
  {
    path: "/sharing",
    element: <Sharing />,
    label: "Sharing", 
  },
];

export type RouteLabel = (typeof ROUTES)[number]["label"];
