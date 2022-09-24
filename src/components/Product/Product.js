import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;

  return (
    <div className="product-card">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <p>seller: {seller}</p>
      <h2>price $ {price}</h2>
      <p>
        <small>ratings: {ratings}</small>
      </p>
      <button
        onClick={() => props.handelAddToCart(props.product)}
        className="cartButton"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
