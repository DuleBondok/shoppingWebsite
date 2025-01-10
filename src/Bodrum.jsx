import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Bodrum() {
  const [totalPrice, setTotalPrice] = useState(1200);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("16.06. - 27.06.");
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value);
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 1200);
  };

  const handleDateChange = (event) => {
    setStayDate(event.target.value);
  };

  const handleAddToCart = () => {
    const tripDetails = {
      destination: "Bodrum",
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
          <img className="corfuImg1" src="/public/bodrum1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/public/bodrum2.jpg"></img>
            <img className="corfuImg3" src="/public/bodrum3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">BODRUM 11 days</h1>
          <h1 className="corfuInfo">SEASIDE</h1>
          <h1 className="corfuInfo">FLIGHT</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/public/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">11 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/public/airplane1.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">FLIGHT</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">1200$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Bodrum, located on the southwest coast of Turkey, is a glamorous
            resort town known for its stunning beaches, lively nightlife, and
            rich history. The town is home to the ancient Mausoleum of
            Halicarnassus, one of the Seven Wonders of the Ancient World,
            offering a glimpse into its illustrious past. The Bodrum Castle,
            built by the Knights of St. John in the 15th century, is a prominent
            landmark with breathtaking views of the Aegean Sea and houses the
            Museum of Underwater Archaeology. Bodrum's vibrant marina is lined
            with luxurious yachts, cafes, and shops, providing a chic atmosphere
            for visitors. The town’s whitewashed houses, narrow streets, and
            bougainvillea-filled alleys create a picturesque setting that
            attracts artists and travelers alike. Bodrum is also known for its
            excellent dining scene, featuring fresh seafood, local mezes, and
            the famous Turkish drink, raki.
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
              <option>16.06. - 27.06.</option>
              <option>01.07. - 12.07.</option>
              <option>15.07. - 26.07.</option>
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

export default Bodrum;
