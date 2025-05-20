import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     setIsOpen(false);
  //   }
  // };

  return (
    <header className="navbar">
      <div className="navbarlogo">LeadEx</div>

      <nav className={`navlinks ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/company" onClick={() => setIsOpen(false)}>
          Company
        </Link>
        <Link to="/solution">Solutions</Link>
        <Link to="/products">Products</Link>
        <Link to="/news">News</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </nav>

      {/* <nav className={`navlinks ${isOpen ? "open" : ""}`}>
        <a href="Home">Home</a>
        <a href="Company">Company</a>
        <a href="Solution">Solutions</a>
        <a href="Products">Products</a>
        <a href="News">News</a>
        <a href="Contact">Contact</a>
      </nav> */}
      {/* 
      <nav className={`navlinks ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => scrollToSection("home")}>
          Home
        </a>
        <a href="#company" onClick={() => scrollToSection("company")}>
          Company
        </a>
        <a href="#solution">Solutions</a>
        <a href="#products">Products</a>
        <a href="#news">News</a>
        <a href="#contact" onClick={() => scrollToSection("contact")}>
          Contact
        </a>
      </nav> */}

      <div className="navbaricons">
        <FaShoppingCart className="icon" />
        <FaSearch className="icon" />
        <div className="menuicon" onClick={toggleMenu}>
          <GrAppsRounded size={24} color="#333" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
