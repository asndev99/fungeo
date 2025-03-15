import React from "react";
import countryData from "../api/countryData.json";
import Card from "../components/UI/Card";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the interesting facts
        <br />
        We are proud of
      </h2>
      <div className="gradient-cards">
        {countryData.length &&
          countryData.map((item) => {
            return <Card cardData = {item} />;
          })}
      </div>
    </section>
  );
};

export default About;
