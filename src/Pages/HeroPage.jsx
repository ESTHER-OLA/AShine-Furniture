import React from "react";
import soferSet from "../assets/images/interior-design.png";

const HeroPage = () => {
  return (
    <div className="">
      <section className="hero" id="">
        <div className="hero-text">
          <h1 className="textHead">
            Transform Your Space with Timeless Elegance
          </h1>
          <p>
            Discover our exquisite range of modern and classic furniture to
            transform your home. From chic sofas to elegant dining sets, find
            the perfect pieces to create your dream living space.
          </p>
        </div>
        <div className="hero-col2">
          <div className="hero-btn">
            <a href="#product">
              <button type="button">Shop Below</button>
            </a>
          </div>
          <div className="hero-img">
            <img src={soferSet} alt="sofer set" className="sofer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
