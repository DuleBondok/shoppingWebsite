import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Zakynthos() {
  const [totalPrice, setTotalPrice] = useState(910);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("26.07. - 04.08.");
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value);
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 910);
  };

  const handleDateChange = (event) => {
    setStayDate(event.target.value);
  };

  const handleAddToCart = () => {
    const tripDetails = {
      destination: "Zakynthos",
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
          <img className="corfuImg1" src="/public/zakynthos1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/public/zakynthos2.jpg"></img>
            <img className="corfuImg3" src="/public/zakynthos3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">ZAKYNTHOS 8 days</h1>
          <h1 className="corfuInfo">SEASIDE</h1>
          <h1 className="corfuInfo">FLIGHT</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/public/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">8 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/public/airplane1.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">FLIGHT</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">910$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Zakynthos, also known as Zante, is a stunning island located in the
            Ionian Sea, famous for its crystal-clear waters, lush landscapes,
            and dramatic cliffs. The island is renowned for its picturesque
            beaches, particularly Navagio Beach, often referred to as Shipwreck
            Beach, which is accessible only by boat. The turquoise waters and
            towering limestone cliffs create a breathtaking landscape that
            attracts visitors from around the world. Zakynthos is also home to a
            rich cultural heritage, with charming villages, Venetian-style
            architecture, and historic churches dotting the landscape. The
            island's vibrant nightlife and local tavernas offering delicious
            Greek cuisine make it an ideal destination for both relaxation and
            entertainment. Zakynthos is famous for its sea turtle population,
            particularly the endangered Caretta Caretta, which nests on the
            island’s beaches.
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
              <option>26.07. - 04.08.</option>
              <option>12.08. - 20.08.</option>
              <option>23.08. - 01.09.</option>
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

export default Zakynthos;
