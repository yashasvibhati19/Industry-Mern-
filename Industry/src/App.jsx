import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Solution from "./components/Solution";
import News from "./components/News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      {/* <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="company">
        {" "}
        <CoreValues />
      </div>
      <div id="contact">
        {" "}
        <Contact />
        <Footer />
      </div> */}

      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              </>
            }
          />
          <Route
            path="/company"
            element={
              <>
                <CoreValues />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Products />
              </>
            }
          />
          <Route
            path="/solution"
            element={
              <>
                <Solution />
              </>
            }
          />
          <Route
            path="/news"
            element={
              <>
                <News />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
