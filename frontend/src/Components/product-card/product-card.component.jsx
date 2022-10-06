import "./product-card.style.scss";
import React from 'react';

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
  <div className="product-card-container">
    <img src={imageUrl} alt={`${name}`} />
    <div className="footer"></div>
    <span className="name">{name}</span>
    <span className="price">{price}</span>
    <Button buttonType="inverted"> Add to Cart</Button>
    </div>
  )
};

export default ProductCard;
