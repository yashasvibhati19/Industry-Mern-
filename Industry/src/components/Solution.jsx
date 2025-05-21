import React from "react";
import { FaIndustry, FaRecycle, FaShieldAlt, FaTruck } from "react-icons/fa";
import "./Solution.css";

const solutions = [
  {
    icon: <FaIndustry />,
    title: "Industrial Applications",
    description:
      "Our lead alloys power industrial machinery and heavy-duty operations worldwide with unmatched reliability.",
  },
  {
    icon: <FaRecycle />,
    title: "Recycling Solutions",
    description:
      "We offer eco-conscious recycling systems to recover and reuse lead, reducing environmental impact.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Radiation Shielding",
    description:
      "Our lead products provide effective radiation protection for medical, scientific, and nuclear sectors.",
  },
  {
    icon: <FaTruck />,
    title: "Custom Logistics",
    description:
      "We ensure timely delivery with tailored logistics solutions for your industrial lead requirements.",
  },
];

const Solutions = () => {
  return (
    <div className="solutionsContainer">
      <h2 className="sectionTitle">Our Solutions</h2>
      <div className="solutionsGrid">
        {solutions.map((item, index) => (
          <div key={index} className="solutionCard">
            <div className="iconWrapper">{item.icon}</div>
            <h3 className="solutionTitle">{item.title}</h3>
            <p className="solutionDesc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
