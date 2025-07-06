import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="hero1">
        <h1>Pure Lead Ingots & Alloys for Industrial Excellence</h1>
        <p>Providing High-Quality Lead Metal Products for Over 50 Years</p>
        <button className="herobtn" onClick={() => navigate("/products")}>
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
