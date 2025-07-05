import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ cart, setCart }) {
  const [product, setProduct] = useState([]);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const handleClick = (id) => {
    const cartProduct = product.find((data) => data.id === id);
    setCart([...cart, cartProduct]);
  };

  return (
    <div className="cart-container">
      <Link to={"/cart"}>
        <h1>CartItem ({cart.length})</h1>
      </Link>

      <h2 className="cart-title">Cart Products</h2>

      <div className="product-grid">
        {product.map((item) => (
          <div className="product-card" key={item.id}>
            <img className="product-image" src={item.image} alt={item.title} />
            <h3 className="product-title">{item.title}</h3>
            <p className="product-price">Price: ${item.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleClick(item.id)}
            >
              Add to View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
