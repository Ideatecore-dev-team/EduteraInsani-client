// App.js
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== "/checkout-program-locked";

  return (
    <>
      <Navbar />
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
}

export default App;
