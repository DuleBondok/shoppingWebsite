import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function GranCanaria() {
  const [totalPrice, setTotalPrice] = useState(810);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("22.07. - 31.07.");
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value);
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 810);
  };

  const handleDateChange = (event) => {
    setStayDate(event.target.value);
  };

  const handleAddToCart = () => {
    const tripDetails = {
      destination: "GranCanaria",
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
          <img className="corfuImg1" src="/public/grancanaria1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/public/grancanaria2.jpg"></img>
            <img className="corfuImg3" src="/public/grancanaria3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">GRAN CANARIA 9 days</h1>
          <h1 className="corfuInfo">SEASIDE</h1>
          <h1 className="corfuInfo">FLIGHT</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/public/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">9 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/public/airplane1.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">FLIGHT</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">810$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Gran Canaria, part of Spain's Canary Islands, is a stunning
            destination known for its diverse landscapes and year-round mild
            climate. The island features beautiful beaches, from the golden
            sands of Maspalomas Beach to the rugged coastline of Agaete, making
            it a popular spot for sunbathing and water sports. Gran Canaria is
            often called a "miniature continent" due to its varying landscapes,
            which include lush green valleys, volcanic mountains, and vast sand
            dunes. The island’s capital, Las Palmas, offers a mix of urban
            culture, historic architecture, and a vibrant nightlife scene. The
            historic district of Vegueta in Las Palmas is home to cobbled
            streets, colonial buildings, and the impressive Santa Ana Cathedral.
            Nature lovers can explore the island's hiking trails, including
            routes through the mountainous interior, such as the Roque Nublo,
            offering breathtaking views.
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
              <option>22.07. - 31.07.</option>
              <option>02.08. - 11.08.</option>
              <option>16.08. - 25.08.</option>
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

export default GranCanaria;
