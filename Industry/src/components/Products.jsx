import React from "react";
import "./Products.css";
import purelead from "../assets/Pure Lead Ingots.jpg";
import refinedlead from "../assets/Refined Lead Ingots.jpg";
import Antimonylead from "../assets/Antimony Lead Alloy.jpg";
import seleniumlead from "../assets/Selenium Lead Alloy.jpg";
import calciumlead from "../assets/Calcium Lead Alloy.jpg";
import tinlead from "../assets/Tin Lead Alloy.jpg";
import customizedlead from "../assets/Customized Lead Products.jpg";

const products = [
  {
    name: "Pure Lead Ingots",
    image: purelead,
    desc: "Pure Lead Ingots are high-purity lead products used in various applications, including batteries and radiation shielding.",
  },

  {
    name: "Refined Lead Ingots",
    image: refinedlead,
    desc: "Refined Lead Ingots are processed lead products with reduced impurities, suitable for industrial applications.",
  },
  {
    name: "Antimony Lead Alloy",
    image: Antimonylead,
    desc: "Antimony Lead Alloy is a lead alloy with antimony, enhancing hardness and corrosion resistance, commonly used in batteries and soldering.",
  },

  {
    name: "Selenium Lead Alloy",
    image: seleniumlead,
    desc: "Selenium Lead Alloy is a lead alloy with selenium, improving electrical conductivity and corrosion resistance, used in batteries and electronics.",
  },

  {
    name: "Calcium Lead Alloy",
    image: calciumlead,
    desc: "Calcium Lead Alloy is a lead alloy with calcium, enhancing corrosion resistance and mechanical properties, commonly used in batteries and electrical applications.",
  },

  {
    name: "Tin Lead Alloy",
    image: tinlead,
    desc: "Tin Lead Alloy is a lead alloy with tin, improving solderability and corrosion resistance, widely used in electronics and soldering applications.",
  },
  {
    name: "Customized Lead Products",
    image: customizedlead,
    desc: "Customized Lead Products are tailored lead solutions designed to meet specific customer requirements, including various shapes and sizes for diverse applications.",
  },
];

const ProductCard = ({ name, image, desc }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h3 className="product-title">{name}</h3>
    <p className="product-desc">{desc}</p>
  </div>
);

const Products = () => (
  <div className="products-container">
    {products.map((product, index) => (
      <ProductCard
        key={index}
        name={product.name}
        image={product.image}
        desc={product.desc}
      />
    ))}
  </div>
);

export default Products;
