import React from "react";

const Card = ({ cardData }) => {
  return (
    <div className="card">
      <div className="container-card bg-blue-box">
        <p className="card-title">{cardData.countryName}</p>
        <p>
          <span className="card-description">Capital:</span>
          {cardData.capital}
        </p>
        <p>
          <span className="card-description">population:</span>
          {cardData.population}
        </p>
        <p>
          <span className="card-description">Interesting Facts:</span>
          {cardData.interestingFact}
        </p>
      </div>
    </div>
  );
};

export default Card;
