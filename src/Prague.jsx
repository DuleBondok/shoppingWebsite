import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Prague() {
  const [totalPrice, setTotalPrice] = useState(150);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("13.03. - 18.03.");
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value);
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 150);
  };

  const handleDateChange = (event) => {
    setStayDate(event.target.value);
  };

  const handleAddToCart = () => {
    const tripDetails = {
      destination: "Prague",
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
          <img className="corfuImg1" src="/prague1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/prague2.jpg"></img>
            <img className="corfuImg3" src="/prague3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">PRAGUE 5 days</h1>
          <h1 className="corfuInfo">MONUMENT</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">5 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/bus.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">BUS</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">150$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Prague, the capital of the Czech Republic, is a captivating city
            known for its stunning medieval architecture and rich history. Often
            referred to as the "City of a Hundred Spires," it is adorned with
            beautiful Gothic, Baroque, and Romanesque buildings that line its
            picturesque streets. The heart of the city is the Old Town Square,
            where visitors can marvel at the Astronomical Clock and explore
            narrow cobblestone streets filled with charming shops and cafés. One
            of Prague's most iconic landmarks is Prague Castle, the largest
            ancient castle in the world, offering breathtaking views of the city
            and housing significant cultural and historical artifacts. The
            Charles Bridge, with its statues of saints, connects the Old Town to
            the Lesser Town and offers stunning views of the Vltava River. The
            city is also home to a vibrant arts scene, with numerous galleries,
            theaters, and concert halls.
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
              <option>13.03. - 18.03.</option>
              <option>03.04. - 08.04.</option>
              <option>11.04. - 16.04.</option>
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

export default Prague;
