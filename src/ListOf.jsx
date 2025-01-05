import Header from "./Header";
import { useState, useEffect } from "react";

function ListOf() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const idImg1 = 4825173;
  const idImg2 = 1776226;
  const idImg3 = 2182384;
  const idImg4 = 6676128;
  const idImg5 = 632851;
  const idImg6 = 4741433;
  const idImg7 = 776031;

  const PIXABAY_API_KEY = "40104432-dc1a4d1ee09039528f96981ac";

  const API_URLS = [
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg1}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg2}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg3}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg4}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg5}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg6}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg7}`,
  ];

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response1 = await fetch(API_URLS[0]);
        const data1 = await response1.json();
        const img1 = data1.hits[0].largeImageURL;
        setImage1(img1);

        const response2 = await fetch(API_URLS[1]);
        const data2 = await response2.json();
        const img2 = data2.hits[0].largeImageURL;
        setImage2(img2);

        const response3 = await fetch(API_URLS[2]);
        const data3 = await response3.json();
        const img3 = data3.hits[0].largeImageURL;
        setImage3(img3);

        const response4 = await fetch(API_URLS[3]);
        const data4 = await response4.json();
        const img4 = data4.hits[0].largeImageURL;
        setImage4(img4);

        const response5 = await fetch(API_URLS[4]);
        const data5 = await response5.json();
        const img5 = data5.hits[0].largeImageURL;
        setImage5(img5);

        const response6 = await fetch(API_URLS[5]);
        const data6 = await response6.json();
        const img6 = data6.hits[0].largeImageURL;
        setImage6(img6);

        const response7 = await fetch(API_URLS[6]);
        const data7 = await response7.json();
        const img7 = data7.hits[0].largeImageURL;
        setImage7(img7);
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
        <div className="greeceDestination">
          {image2 ? (
            <img src={image2} alt="Image 2" className="greekImg" />
          ) : (
            <p>Loading Image 2...</p>
          )}
          <div className="signDiv">
            <img src="/public/vacations.png" className="signIcon"></img>
            <h1 className="signHeader">SEASIDE</h1>
          </div>
          <div className="signDivSecond">
            <img src="/public/airplaneWhite.png" className="signIcon"></img>
            <h1 className="signHeader">FLIGHT</h1>
          </div>
          <h1 className="destinationName">ZAKYNTHOS 8 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">8 DAYS</h1>
            </div>
            <div className="transportDiv">
              <img
                src="/public/airplane1.png"
                className="transportIconAirplane"
              ></img>
              <h1 className="transportName">FLIGHT</h1>
            </div>
          </div>
          <div className="foodDiv" style={{ marginLeft: "-0.5vw" }}>
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">ALL INCLUSIVE</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 910$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div className="greeceDestination">
          {image3 ? (
            <img src={image3} alt="Image 3" className="greekImg" />
          ) : (
            <p>Loading Image 3...</p>
          )}
          <div className="signDiv">
            <img src="/public/monument.png" className="signIcon"></img>
            <h1 className="signHeader">CULTURAL</h1>
          </div>
          <div className="signDivSecond">
            <img src="/public/airplaneWhite.png" className="signIcon"></img>
            <h1 className="signHeader">FLIGHT</h1>
          </div>
          <h1 className="destinationName">ROME 4 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">4 DAYS</h1>
            </div>
            <div className="transportDiv">
              <img
                src="/public/airplane1.png"
                className="transportIconAirplane"
              ></img>
              <h1 className="transportName">FLIGHT</h1>
            </div>
          </div>
          <div className="foodDiv">
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">BREAKFAST INCLUDED</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 190$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div className="greeceDestination">
          {image4 ? (
            <img src={image4} alt="Image 4" className="greekImg" />
          ) : (
            <p>Loading Image 4...</p>
          )}
          <div className="signDiv">
            <img src="/public/monument.png" className="signIcon"></img>
            <h1 className="signHeader">CULTURAL</h1>
          </div>
          <h1 className="destinationName">PRAGUE 5 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">5 DAYS</h1>
            </div>
            <div className="transportDiv">
              <img
                src="/public/bus.png"
                className="transportIconAirplane"
              ></img>
              <h1 className="transportName">BUS</h1>
            </div>
          </div>
          <div className="foodDiv" style={{ marginLeft: "-0.5vw" }}>
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">NO BREAKFAST</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 150$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div className="greeceDestination">
          {image5 ? (
            <img src={image5} alt="Image 5" className="greekImg" />
          ) : (
            <p>Loading Image 5...</p>
          )}
          <div className="signDivDown">
            <img src="/public/monument.png" className="signIcon"></img>
            <h1 className="signHeader">CULTURAL</h1>
          </div>
          <h1 className="destinationName">BUDAPEST 4 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">4 DAYS</h1>
            </div>
            <div className="transportDiv">
              <img
                src="/public/bus.png"
                className="transportIconAirplane"
              ></img>
              <h1 className="transportName">BUS</h1>
            </div>
          </div>
          <div className="foodDiv">
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">BREAKFAST INCLUDED</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 180$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div className="greeceDestination">
          {image6 ? (
            <img src={image6} alt="Image 6" className="greekImg" />
          ) : (
            <p>Loading Image 6...</p>
          )}
          <div className="signDivDown">
            <img src="/public/vacations.png" className="signIcon"></img>
            <h1 className="signHeader">SEASIDE</h1>
          </div>
          <div className="signDivSecondDown">
            <img src="/public/airplaneWhite.png" className="signIcon"></img>
            <h1 className="signHeader">FLIGHT</h1>
          </div>
          <h1 className="destinationName">SICILY 11 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">11 DAYS</h1>
            </div>
            <div className="transportDiv">
              <img
                src="/public/airplane1.png"
                className="transportIconAirplane"
              ></img>
              <h1 className="transportName">FLIGHT</h1>
            </div>
          </div>
          <div className="foodDiv">
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">ULTRA ALL INCLUSIVE</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 1100$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div className="greeceDestination">
          {image7 ? (
            <img src={image7} alt="Image 7" className="greekImg" />
          ) : (
            <p>Loading Image 7...</p>
          )}
          <div className="signDivDown">
            <img src="/public/monument.png" className="signIcon"></img>
            <h1 className="signHeader">CULTURAL</h1>
          </div>
          <div className="signDivSecondDown">
            <img src="/public/airplaneWhite.png" className="signIcon"></img>
            <h1 className="signHeader">FLIGHT</h1>
          </div>
          <h1 className="destinationName">BARCELONA 4 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">4 DAYS</h1>
            </div>
            <div className="transportDiv">
              <img
                src="/public/airplane1.png"
                className="transportIconAirplane"
              ></img>
              <h1 className="transportName">FLIGHT</h1>
            </div>
          </div>
          <div className="foodDiv">
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">BREAKFAST INCLUDED</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 720$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
      </div>
    </>
  );
}

export default ListOf;
