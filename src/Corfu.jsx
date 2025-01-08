import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import "./App.css";

function Corfu() {
  const [totalPrice, setTotalPrice] = useState(720); // Initial price for 1 person
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  // Handler for changing the number of persons
  const handlePersonsChange = (event) => {
    const selectedPersons = parseInt(event.target.value); // Convert to number
    setNumberOfPersons(selectedPersons);
    setTotalPrice(selectedPersons * 720); // Update the total price
  };

  return (
    <>
      <Header></Header>
      <div className="mainCorfuDiv">
        <div className="corfuImagesDiv">
          <img className="corfuImg1" src="/public/corfu1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/public/corfu2.jpg"></img>
            <img className="corfuImg3" src="/public/corfu3.jpg"></img>
          </div>
        </div>
        <div className="corfuHeaderDiv">
          <h1 className="corfuHeader">CORFU 10 days</h1>
          <h1 className="corfuInfo">SEASIDE</h1>
        </div>
        <div className="infoAboutDiv">
          <div className="corfuHorizontalDiv">
            <div className="corfuDateDiv">
              <img src="/public/calendar.png" className="corfuCalender"></img>
              <h1 className="corfuNumberOfDays">10 days</h1>
            </div>
            <div className="corfuTravelDiv">
              <img src="/public/bus.png" className="corfuBusImg"></img>
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
            <select id="stayDate" name="stayDate" className="stayDateSelect">
              <option>23.05 - 30.05</option>
              <option>01.06 - 09.06</option>
              <option>15.06 - 23.06</option>
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
        <button className="addToCartBtn">Book this trip</button>
      </div>
    </>
  );
}

export default Corfu;
