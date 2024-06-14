// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Curriculum from "./pages/Curriculum";
import Bantuan from "./pages/Bantuan";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/help" element={<Bantuan />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
