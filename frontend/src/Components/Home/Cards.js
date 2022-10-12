import React from "react";
import "./Cards.css";
import CardItem from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Watches!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./watchImages/watch1.png"
              text="Sea Master Perfect For the Ocean"
              label="Omega"
              path="/product1"
            />
            <CardItem
              src="./watchImages/watch2.png"
              text="Speed Master Your Need For Speed"
              label="Omega"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./watchImages/watch3.png"
              text="Constellation Gaze For The Stars"
              label="Omega"
              path="/services"
            />
            <CardItem
              src="./watchImages/watch4.png"
              text="Smaller Sea Master for Thinner Wrists"
              label="Omega"
              path="/products"
            />
            <CardItem
              src="./watchImages/watch5.png"
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
