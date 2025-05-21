import Image from "../assets/image1.png";
import React, { useRef } from "react";
import "./CoreValues.css";
import { FaSyncAlt, FaUsers, FaRocket } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const CoreValues = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="corevaluesnew">
      <div className="herosection">
        <div className="textcontent">
          <p className="sectiontag">Our Pillars of Excellence</p>
          <h2>
            Driving Progress Through <br />
            Sustainability, Innovation & Trust
          </h2>
          <p className="desc">
            We believe true excellence lies in creating meaningful impact by
            embracing green practices, empowering people, and pushing boundaries
            through innovation.
          </p>
        </div>
        <div className="imagecontent">
          <img src={Image} alt="Industrial plant at sunset" />
        </div>
      </div>

      <div className="Sliderwrapper">
        <Slider ref={sliderRef} {...settings} className="pillarsSlider">
          <div className="pillar">
            <FaSyncAlt className="pillaricon" />
            <h3>Continuous Growth</h3>
            <p>
              Embracing change and consistently seeking better ways to deliver
              value — that's our mindset. From processes to people, improvement
              never stops.
            </p>
          </div>
          <div className="pillar">
            <FaUsers className="pillaricon" />
            <h3>Customer-First Thinking</h3>
            <p>
              We prioritize long-term trust over short-term gain. Listening,
              adapting, and exceeding expectations is at the heart of every
              decision.
            </p>
          </div>
          <div className="pillar">
            <FaRocket className="pillaricon" />
            <h3>Innovation Culture</h3>
            <p>
              We thrive on creative problem-solving and advanced technology to
              shape a future where efficiency and sustainability go
              hand-in-hand.
            </p>
          </div>
        </Slider>

        <button className="button" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CoreValues;
