// App.js
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== "/checkout-program-locked";
  const showFooter2 = location.pathname !== "/daftar-trial";

  return (
    <>
      <Navbar />
      <Outlet />
      {showFooter && showFooter2 && <Footer />}
    </>
  );
}

export default App;
