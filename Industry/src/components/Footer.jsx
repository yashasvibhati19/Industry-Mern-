import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footercontent">
        <div className="footersection about">
          <h2>LeadEx</h2>
          <p>Providing High-Quality Lead Metal Products for Over 50 Years</p>
        </div>

        <div className="footersection contact">
          <h3>Contact Us</h3>
          <p>
            <FaEnvelope /> leadEx@example.com
          </p>
          <p>
            <FaPhoneAlt /> +91 5235174221
          </p>
          <p>
            <FaMapMarkerAlt /> Jodhpur, Rajasthan, India
          </p>
        </div>

        <div className="footersection social">
          <h3>Follow Us</h3>
          <div className="socialicons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footerbottom">
        <p>&copy; {new Date().getFullYear()} LeadEx. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
