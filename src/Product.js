import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="product">
      <img
        src={props.image}
        alt=""
      />
      <div className="product_info">
        <p>{props.title}</p>
        <div className="product_rating">
            {Array(props.rating).fill().map((_,i) => (
                <p style={{ color: "orange" }}>★</p>
            ))}
          
        </div>
        <p className="product_price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
