import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  return (
    <div>
      <Link to="/">
        <h1>Back to Products</h1>
      </Link>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.title} width="50" />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
