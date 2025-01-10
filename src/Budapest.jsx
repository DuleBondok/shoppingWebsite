import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Budapest() {
  const [totalPrice, setTotalPrice] = useState(180);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("18.11. - 22.11.");
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value);
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 180);
  };

  const handleDateChange = (event) => {
    setStayDate(event.target.value);
  };

  const handleAddToCart = () => {
    const tripDetails = {
      destination: "Budapest",
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
          <img className="corfuImg1" src="/public/budapest1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/public/budapest2.jpg"></img>
            <img className="corfuImg3" src="/public/budapest3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">BUDAPEST 4 days</h1>
          <h1 className="corfuInfo">MONUMENT</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/public/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">4 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/public/bus.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">BUS</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">180$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Budapest, the capital of Hungary, is a city of stunning beauty and
            rich history, split by the majestic Danube River. Known for its
            grand architecture, Budapest is home to iconic landmarks like the
            Hungarian Parliament Building, Buda Castle, and the Fisherman’s
            Bastion, which offer breathtaking views of the city. The city is
            also famous for its thermal baths, with historic spas like Széchenyi
            and Gellért providing a relaxing and unique experience. Budapest’s
            vibrant nightlife scene, including its famous ruin pubs, creates an
            exciting atmosphere for both locals and tourists. The city is a
            cultural hub, with numerous museums, galleries, and theaters
            showcasing Hungary's rich artistic heritage. The Chain Bridge, one
            of Budapest’s most recognizable symbols, connects the Buda and Pest
            sides of the city, each offering a distinct character and charm.
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
              <option>18.11. - 22.11.</option>
              <option>22.12. - 26.12.</option>
              <option>29.12. - 02.01.</option>
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

export default Budapest;
