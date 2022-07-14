import React from "react";
import HeroImage from "../images/Group77.png";
import "../style.css";

function Hero() {
  return (
    <section className="hero">
      <img src={HeroImage} className="hero--photo" alt="photoGrid" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
export default Hero;
