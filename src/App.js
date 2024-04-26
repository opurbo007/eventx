import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./components/Bookings";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

import "./index.css";
import "./style.css";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
