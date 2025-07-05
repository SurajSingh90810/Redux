import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} />} />
    </Routes>
  );
}

export default App;
