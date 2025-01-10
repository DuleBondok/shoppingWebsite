import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

function Header() {
  const { cart } = useContext(CartContext); // Access the cart from context
  return (
    <>
      <div className="mainHeaderDiv">
        <Link to="/home">
          <div className="logoDiv">
            <img src="./public/airplane.png" className="airplaneImage"></img>
            <div className="logoHeaderDiv">
              <h1 className="mainHeaderText">TravelBuddy</h1>
              <h1 className="mainHeaderParagraph">
                Your chance to travel the world!
              </h1>
            </div>
          </div>
        </Link>
        <div className="destinationsDiv">
          <h1 className="destinationHeader">SPRING 2025</h1>
          <h1 className="destinationHeader">SUMMER 2025</h1>
        </div>
        <div className="shoppingCartDiv">
          <Link to="/home">
            <h1 className="homeBtn">HOME</h1>
          </Link>
          <div className="shoppingCartIconDiv">
            <img src="/shopping.png" className="shoppingImg"></img>
            {cart.length > 0 && <h1 className="cartCount">{cart.length}</h1>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
