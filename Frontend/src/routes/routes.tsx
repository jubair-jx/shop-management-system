import App from "@/App";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import LoginMain from "@/pages/Login/LoginMain";
import RegisterMain from "@/pages/Register/RegisterMain";
import { routeGenerators } from "@/utils/routeGenerators";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: routeGenerators(adminPaths),
  },

  {
    path: "/login",
    element: <LoginMain />,
  },

  {
    path: "/register",
    element: <RegisterMain />,
  },
]);

export default router;
