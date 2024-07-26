import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Curriculum from "../pages/Curriculum";
import Bantuan from "../pages/BantuanUs";
import DetailClass from "../pages/DetailCalss";
import OurProgram from "../pages/OurProgram";
import CheckoutProgramLocked from "../pages/CheckoutProgramLocked";
import Login from "../pages/Login";

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
        path: "/login",
        element: <Login />,
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
      {
        path: "/ourprogram",
        element: <OurProgram />,
      },
      {
        path: "/detail-class",
        element: <DetailClass />,
      },
      {
        path: "/checkout-program-locked",
        element: <CheckoutProgramLocked />,
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
