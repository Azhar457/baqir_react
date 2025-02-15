import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "aos/dist/aos.css"; // Impor file CSS AOS
import AOS from "aos"; // Impor AOS
import "./index.css";

AOS.init({
  duration: 1700,
});
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);
