import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Barcelona() {
  const [totalPrice, setTotalPrice] = useState(720);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("11.04. - 15.04.");
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
      destination: "Barcelona",
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
          <img className="corfuImg1" src="/barcelona1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/barcelona2.jpg"></img>
            <img className="corfuImg3" src="/barcelona3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">BARCELONA 4 days</h1>
          <h1 className="corfuInfo">CULTURAL</h1>
          <h1 className="corfuInfo">FLIGHT</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">4 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/airplane1.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">FLIGHT</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">720$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Barcelona, the vibrant capital of Catalonia in Spain, is a city that
            seamlessly blends modernist architecture with historical charm. One
            of its most famous landmarks is the Sagrada Família, the
            awe-inspiring basilica designed by architect Antoni Gaudí, which has
            been under construction for over a century. The city's bustling
            streets, particularly Las Ramblas, are lined with shops, cafés, and
            street performers, creating an energetic atmosphere that attracts
            visitors from around the world. Barcelona is also home to beautiful
            parks, such as the colorful Park Güell, another of Gaudí's
            masterpieces, offering panoramic views of the city. The Gothic
            Quarter, with its narrow medieval streets and hidden squares, takes
            visitors on a journey through the city's rich history. The city's
            beaches, like Barceloneta Beach, offer a perfect spot for
            relaxation, while the Mediterranean climate ensures year-round
            sunshine.
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
              <option>11.04. - 15.04.</option>
              <option>22.04. - 26.04.</option>
              <option>03.05. - 07.05.</option>
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

export default Barcelona;
