import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./News.css";

const newsItems = [
  {
    title: "LeadEx Launches Eco-Friendly Refining Unit",
    date: "April 10, 2025",
    description:
      "LeadEx expands its sustainability efforts with a new refining unit focused on zero waste and low emissions.",
  },
  {
    title: "Lead Market Trends 2025",
    date: "March 22, 2025",
    description:
      "The global lead market is projected to grow by 4.6% in 2025, led by demand from batteries and shielding industries.",
  },
  {
    title: "New Partnership with Automotive Giant",
    date: "February 15, 2025",
    description:
      "LeadEx partners with a leading car manufacturer to supply high-quality lead alloys for electric vehicle components.",
  },
];

const News = () => {
  return (
    <div className="newsContainer">
      <h2 className="sectionTitle">Latest News</h2>
      <div className="newsGrid">
        {newsItems.map((item, index) => (
          <div key={index} className="newsCard">
            <div className="newsDate">
              <FaCalendarAlt className="calendarIcon" /> {item.date}
            </div>
            <h3 className="newsTitle">{item.title}</h3>
            <p className="newsDescription">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
