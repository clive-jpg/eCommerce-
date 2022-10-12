import React from "react";
import "./Cards.css";
import CardItem from "./CardItems";
import cardImg1 from "./watchImage/watch1.png"
import cardImg2 from "./watchImage/watch2.png"
import cardImg3 from "./watchImage/watch3.png"
import cardImg4 from "./watchImage/watch4.png"
import cardImg5 from "./watchImage/watch5.png"


function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Watches!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={cardImg1}
              text="Sea Master Perfect For the Ocean"
              label="Omega"
              path="/product1"
            />
            <CardItem
              src={cardImg2}
              text="Speed Master Your Need For Speed"
              label="Omega"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={cardImg3}
              text="Constellation Gaze For The Stars"
              label="Omega"
              path="/services"
            />
            <CardItem
              src={cardImg4}
              text="Smaller Sea Master for Thinner Wrists"
              label="Omega"
              path="/products"
            />
            <CardItem
              src={cardImg5}
              text="Speed Master Black Edition,  Dark But Sharp"
              label="Omega"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
