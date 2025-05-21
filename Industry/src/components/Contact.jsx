import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responsemsg, setResponsemsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setResponsemsg("Please fill all fields.");
      return;
    }

    setIsLoading(true);
    setResponsemsg("");

    try {
      const res = await axios.post(
        "http://localhost:3000/user/contact",
        formData

      );

      if (res.status === 200) {
        setResponsemsg("Message sent successfully!");
      } else {
        setResponsemsg("Something went Wrong, Try again");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResponsemsg("message failed to send ");
    } finally {
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contactsection">
      <h2>Contact Us</h2>
      <form className="contactform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {responsemsg && (
        <p
          className={`response-message ${
            responsemsg.includes("success") ? "success" : "error"
          }`}
        >
          {responsemsg}
        </p>
      )}
    </section>

    //     <section className="contactsection">
    //       <p className="section-tag">Get In Touch</p>
    //       <h2>We'd Love to Hear from You</h2>

    //       <div className="contactcards">
    //         <div className="contactcard">
    //           <i className="fa-solid fa-phone"></i>
    //           <h3>Phone</h3>
    //           <p>+91 9876543210</p>
    //           <p>+91 1234567890</p>
    //         </div>
    //         <div className="contactcard">
    //           <i className="fa-solid fa-envelope"></i>
    //           <h3>Email</h3>
    //           <p>hello@industry.com</p>
    //         </div>
    //         <div className="contactcard">
    //           <i className="fa-solid fa-location-dot"></i>
    //           <h3>Location</h3>
    //           <p>102 Tech Park, Jaipur, Rajasthan, 302017</p>
    //         </div>
    //       </div>
    //     </section>
  );
};

export default Contact;
