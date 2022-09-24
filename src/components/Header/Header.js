import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="headerNavigation">
        <div className="logo">
          <h2 className="text-logo">
            My <span>Demy</span>
          </h2>
        </div>
        <div className="menu">
          <a href="./shop">Shop</a>
          <a href="./product">Product</a>
          <a href="./cart">Cart</a>
          <a href="./details">Checkout</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
