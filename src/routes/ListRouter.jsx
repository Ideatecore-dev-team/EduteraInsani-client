import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Curriculum from "../pages/Curriculum";
import Bantuan from "../pages/BantuanUs";

const ListRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/curriculum",
        element: <Curriculum />,
      },
      {
        path: "/help",
        element: <Bantuan />,
      },
    ],
  },
  //   add errors elements
  //   {
  //     path: "*",
  //     element: <div>404 Not Found</div>,
  //   },
]);

export { ListRouter };
