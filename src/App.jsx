// App.js
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Curriculum from "./pages/Curriculum";
<<<<<<< HEAD
import BantuanUs from "./pages/BantuanUs";
=======
>>>>>>> 8abcb63ee97a2fa2c7cd13cc46750dd841f84f77
=======
>>>>>>> 809e607b03b189f3581de02165c027d15af1b46c

function App() {
  return (
    <>
<<<<<<< HEAD
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/curriculum" element={<Curriculum />} />
<<<<<<< HEAD
          <Route path="/help" element={<BantuanUs />} />
=======
>>>>>>> 8abcb63ee97a2fa2c7cd13cc46750dd841f84f77
        </Routes>
        <Footer />
      </Router>
=======
      <Navbar />
      <Outlet />
      <Footer />
>>>>>>> 809e607b03b189f3581de02165c027d15af1b46c
    </>
  );
}

export default App;
