import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Corfu() {
  const [totalPrice, setTotalPrice] = useState(720);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("23.05. - 03.06.");
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value);
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 720);
  };

  const handleDateChange = (event) => {
    setStayDate(event.target.value);
  };

  const handleAddToCart = () => {
    const tripDetails = {
      destination: "Corfu",
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
          <img className="corfuImg1" src="/corfu1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/corfu2.jpg"></img>
            <img className="corfuImg3" src="/corfu3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">CORFU 10 days</h1>
          <h1 className="corfuInfo">SEASIDE</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">10 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/bus.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">BUS</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">740$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Corfu, also known as Kerkyra, is a captivating island in the Ionian
            Sea, celebrated for its lush landscapes and rich history. Its
            coastline boasts some of the most beautiful beaches in Greece, from
            the serene coves of Paleokastritsa to the golden sands of Glyfada.
            Corfu Town, a UNESCO World Heritage Site, is a blend of Venetian,
            French, and British influences, with narrow cobblestone streets,
            elegant arcades, and historic landmarks like the Old Fortress. The
            island’s countryside is equally enchanting, dotted with olive
            groves, cypress trees, and picturesque villages such as Pelekas,
            famous for its stunning sunsets. Visitors can explore cultural gems
            like the Achilleion Palace, a neoclassical retreat built by Empress
            Elisabeth of Austria, or stroll through the Mon Repos Estate,
            steeped in aristocratic history. Corfu’s cuisine is a highlight,
            offering unique local dishes like sofrito and pastitsada, often
            paired with the island's excellent wines.
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
              <option>23.05. - 03.06.</option>
              <option>01.06. - 11.06.</option>
              <option>15.06. - 25.06.</option>
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

export default Corfu;
