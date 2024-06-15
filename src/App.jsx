// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Curriculum from "./pages/Curriculum";
<<<<<<< HEAD
import BantuanUs from "./pages/BantuanUs";
=======
>>>>>>> 8abcb63ee97a2fa2c7cd13cc46750dd841f84f77

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
