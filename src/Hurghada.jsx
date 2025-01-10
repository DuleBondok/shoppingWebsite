import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Hurghada() {
  const [totalPrice, setTotalPrice] = useState(960);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("12.07. - 22.07.");
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value);
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 960);
  };

  const handleDateChange = (event) => {
    setStayDate(event.target.value);
  };

  const handleAddToCart = () => {
    const tripDetails = {
      destination: "Hurghada",
      stayDate,
      numberOfPersons,
      totalPrice,
    };
    addToCart(tripDetails);

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      <Header></Header>
      <div className="mainCorfuDiv">
        <div className="corfuImagesDiv">
          <img className="corfuImg1" src="/public/hurghada1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/public/hurghada2.jpg"></img>
            <img className="corfuImg3" src="/public/hurghada3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">HURGHADA 10 days</h1>
          <h1 className="corfuInfo">SEASIDEL</h1>
          <h1 className="corfuInfo">FLIGHT</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/public/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">10 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/public/airplane1.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">FLIGHT</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">960$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Hurghada, located on the Red Sea coast of Egypt, is a popular resort
            town known for its pristine beaches, crystal-clear waters, and
            vibrant coral reefs. The town offers excellent opportunities for
            water activities, including snorkeling, diving, and kite surfing,
            attracting tourists from around the world. Hurghada’s warm, sunny
            climate makes it a year-round destination, with pleasant
            temperatures even in winter. The town is home to a range of
            luxurious resorts, spas, and restaurants, making it ideal for
            relaxation and indulgence. Hurghada's Marina Boulevard is lined with
            cafes, shops, and restaurants, offering a lively atmosphere for both
            locals and visitors.
          </h1>
        </div>
        <div className="corfuReservationDiv">
          <div className="datesDiv">
            <label className="chooseDateLabel">Choose stay dates:</label>
            <select
              id="stayDate"
              name="stayDate"
              className="stayDateSelect"
              onChange={handleDateChange}
            >
              <option>12.07. - 22.07.</option>
              <option>22.08. - 02.09.</option>
              <option>03.09. - 13.09.</option>
            </select>
          </div>
          <div className="personsDiv">
            <label className="chooseDateLabel">Number of persons:</label>
            <select
              id="stayDate"
              name="stayDate"
              className="stayDateSelect"
              onChange={handlePersonsChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <div className="totalPriceDiv">
          <h1 className="totalPriceHeader">Total price:</h1>
          <h1 className="totalPriceState">{totalPrice}$</h1>
        </div>
        <button className="addToCartBtn" onClick={handleAddToCart}>
          Add to cart
        </button>
        {showNotification && (
          <div className={`notification ${showNotification ? "show" : "hide"}`}>
            Trip added to cart!
          </div>
        )}
      </div>
    </>
  );
}

export default Hurghada;
