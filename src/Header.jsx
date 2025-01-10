import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { useState } from "react";

function Header() {
  const { cart, setCart } = useContext(CartContext);
  const [showCartDetails, setShowCartDetails] = useState(false);

  const toggleCartDetails = () => {
    setShowCartDetails((prev) => !prev);
  };

  const handleDeleteItem = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <>
      <div className="mainHeaderDiv">
        <Link to="/home">
          <div className="logoDiv">
            <img src="/airplane.png" className="airplaneImage"></img>
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
          <div className="shoppingCartIconDiv" onClick={toggleCartDetails}>
            <img src="/shopping.png" className="shoppingImg"></img>
            {cart.length > 0 && <h1 className="cartCount">{cart.length}</h1>}
          </div>
        </div>
      </div>
      {showCartDetails && (
        <div className="cartDetailsDiv">
          {cart.length === 0 ? (
            <p className="emptyCartMessage">Your cart is empty.</p>
          ) : (
            <div className="cartItemsList">
              {cart.map((item, index) => (
                <div key={index} className="cartItem">
                  <p>{item.destination}</p>
                  <p>{item.stayDate}</p>
                  <p>{item.numberOfPersons}</p>
                  <p>{item.totalPrice}$</p>
                  <img
                    src="/remove.png"
                    className="deleteImg"
                    onClick={() => handleDeleteItem(index)}
                  ></img>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
