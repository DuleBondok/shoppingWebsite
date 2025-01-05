import Header from "./Header";
import { useState, useEffect } from "react";

function ListOf() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const idImg1 = 4825173;
  const idImg2 = 5487268;

  const PIXABAY_API_KEY = "40104432-dc1a4d1ee09039528f96981ac";

  const API_URLS = [
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg1}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg2}`,
  ];

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch the first image
        const response1 = await fetch(API_URLS[0]);
        const data1 = await response1.json();
        const img1 = data1.hits[0].largeImageURL;
        setImage1(img1);

        // Fetch the second image
        const response2 = await fetch(API_URLS[1]);
        const data2 = await response2.json();
        const img2 = data2.hits[0].largeImageURL;
        setImage2(img2);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <div className="listOfDestinationsDiv">
        <div className="countryDiv">
          <img src="/public/european-union.png" className="countryImg"></img>
          <h1 className="countryNames">EU Capitals</h1>
        </div>
        <div className="countryDiv">
          <img src="/public/greece.png" className="countryImg"></img>
          <h1 className="countryNames">Greece</h1>
        </div>
        <div className="countryDiv">
          <img src="/public/italy.png" className="countryImg"></img>
          <h1 className="countryNames">Italy</h1>
        </div>
        <div className="countryDiv">
          <img src="/public/spain.png" className="countryImg"></img>
          <h1 className="countryNames">Spain</h1>
        </div>
        <div className="countryDiv">
          <img src="/public/montenegro.png" className="countryImg"></img>
          <h1 className="countryNames">Montenegro</h1>
        </div>
        <div className="countryDiv">
          <img src="/public/turkey.png" className="countryImg"></img>
          <h1 className="countryNames">Turkiye</h1>
        </div>
        <div className="countryDiv">
          <img src="/public/egypt.png" className="countryImg"></img>
          <h1 className="countryNames">Egypt</h1>
        </div>
      </div>
      <h1 className="listHeader">ALL DESTINATIONS</h1>
      <div className="shoppingListDiv">
        <div className="greeceDestination">
          {image1 ? (
            <img src={image1} alt="Image 1" className="greekImg" />
          ) : (
            <p>Loading Image 1...</p>
          )}
          <div className="signDiv">
            <img src="/public/vacations.png" className="signIcon"></img>
            <h1 className="signHeader">SEASIDE</h1>
          </div>
          <h1 className="destinationName">CORFU 10 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">10 DAYS</h1>
            </div>
            <div className="transportDiv">
              <img src="/public/bus.png" className="transportIcon"></img>
              <h1 className="transportName">BUS</h1>
            </div>
          </div>
          <div className="foodDiv">
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">BREAKFAST INCLUDED</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 740$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
      </div>
    </>
  );
}

export default ListOf;
