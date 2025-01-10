import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Istanbul() {
  const [totalPrice, setTotalPrice] = useState(140);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stayDate, setStayDate] = useState("11.04. - 16.04.");
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value);
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 140);
  };

  const handleDateChange = (event) => {
    setStayDate(event.target.value);
  };

  const handleAddToCart = () => {
    const tripDetails = {
      destination: "Istanbul",
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
          <img className="corfuImg1" src="/istanbul1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/istanbul2.jpg"></img>
            <img className="corfuImg3" src="/istanbul3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">ISTANBUL 5 days</h1>
          <h1 className="corfuInfo">CULTURAL</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">4 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/bus.png" className="corfuBusImg"></img>
              <h1 className="corfuNumberOfDays">BUS</h1>
            </div>
          </div>
          <div className="corfuPriceDiv">
            <h1 className="corfuPriceSmallHeader">from</h1>
            <h1 className="corfuPriceBigHeader">140$</h1>
            <h1 className="corfuPriceSmallHeader">per person.</h1>
          </div>
        </div>
        <div className="corfuDescriptionDiv">
          <h1 className="corfuDescriptionHeader">
            Istanbul, Turkey's largest city, is a captivating blend of history,
            culture, and modernity, straddling the divide between Europe and
            Asia. Its iconic skyline is dominated by the magnificent Hagia
            Sophia, a former church and mosque, now a museum that reflects the
            city’s diverse heritage. The Blue Mosque, with its striking minarets
            and intricate blue tiles, stands as another symbol of Istanbul’s
            architectural splendor. The historic Sultanahmet Square is home to
            the ancient Hippodrome, where chariot races once took place, while
            the Grand Bazaar offers a maze of shops selling everything from
            spices to jewelry. Istanbul’s Bosphorus Strait connects the Black
            Sea and the Sea of Marmara, offering stunning views and boat tours.
            The city's rich history as Byzantium and Constantinople is evident
            in landmarks like the Topkapi Palace, home to Ottoman sultans for
            centuries.
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
              <option>11.04. - 16.04.</option>
              <option>22.04. - 27.04.</option>
              <option>03.05. - 08.05.</option>
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

export default Istanbul;
