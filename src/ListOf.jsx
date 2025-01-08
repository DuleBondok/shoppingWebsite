import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  const idImg8 = 4404726;
  const idImg9 = 4360002;
  const idImg10 = 4055410;
  const idImg11 = 2519509;
  const idImg12 = 315122;

  const PIXABAY_API_KEY = "40104432-dc1a4d1ee09039528f96981ac";

  const API_URLS = [
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg1}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg2}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg3}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg4}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg5}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg6}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg7}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg8}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg9}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg10}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg11}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg12}`,
  ];

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const [image9, setImage9] = useState(null);
  const [image10, setImage10] = useState(null);
  const [image11, setImage11] = useState(null);
  const [image12, setImage12] = useState(null);

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

        const response8 = await fetch(API_URLS[7]);
        const data8 = await response8.json();
        const img8 = data8.hits[0].largeImageURL;
        setImage8(img8);

        const response9 = await fetch(API_URLS[8]);
        const data9 = await response9.json();
        const img9 = data9.hits[0].largeImageURL;
        setImage9(img9);

        const response10 = await fetch(API_URLS[9]);
        const data10 = await response10.json();
        const img10 = data10.hits[0].largeImageURL;
        setImage10(img10);

        const response11 = await fetch(API_URLS[10]);
        const data11 = await response11.json();
        const img11 = data11.hits[0].largeImageURL;
        setImage11(img11);

        const response12 = await fetch(API_URLS[11]);
        const data12 = await response12.json();
        const img12 = data12.hits[0].largeImageURL;
        setImage12(img12);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const [mainHeader, setMainHeader] = useState("ALL DESTINATIONS");

  const [hiddenDestinations, setHiddenDestinations] = useState({
    greece: false,
    italyCapital: false,
    capital: false,
    italy: false,
    spain: false,
    montenegro: false,
    turkey: false,
    turkeyCapital: false,
    egypt: false,
  });

  // This function hides the destinations
  const handleCapitalClick = () => {
    setHiddenDestinations({
      greece: true,
      italy: true,
      spain: true,
      montenegro: true,
      turkey: true,
      egypt: true,
    });
    setMainHeader("EU CAPITALS");
  };

  const handleGreeceClick = () => {
    setHiddenDestinations({
      italyCapital: true,
      capital: true,
      italy: true,
      spain: true,
      montenegro: true,
      turkey: true,
      turkeyCapital: true,
      egypt: true,
    });
    setMainHeader("GREECE");
  };

  const handleAllClick = () => {
    setHiddenDestinations({
      greece: false,
      italyCapital: false,
      capital: false,
      italy: false,
      spain: false,
      montenegro: false,
      turkey: false,
      turkeyCapital: false,
      egypt: false,
    });
    setMainHeader("ALL DESTINATIONS");
  };

  const handleItalyClick = () => {
    setHiddenDestinations({
      greece: true,
      italyCapital: false,
      capital: true,
      italy: false,
      spain: true,
      montenegro: true,
      turkey: true,
      turkeyCapital: true,
      egypt: true,
    });
    setMainHeader("ITALY");
  };

  const handleSpainClick = () => {
    setHiddenDestinations({
      greece: true,
      italyCapital: true,
      capital: true,
      italy: true,
      spain: false,
      montenegro: true,
      turkey: true,
      turkeyCapital: true,
      egypt: true,
    });
    setMainHeader("SPAIN");
  };

  const handleMontenegroClick = () => {
    setHiddenDestinations({
      greece: true,
      italyCapital: true,
      capital: true,
      italy: true,
      spain: true,
      montenegro: false,
      turkey: true,
      turkeyCapital: true,
      egypt: true,
    });
    setMainHeader("MONTENEGRO");
  };

  const handleTurkeyClick = () => {
    setHiddenDestinations({
      greece: true,
      italyCapital: true,
      capital: true,
      italy: true,
      spain: true,
      montenegro: true,
      turkey: false,
      turkeyCapital: false,
      egypt: true,
    });
    setMainHeader("TURKIYE");
  };

  const handleEgyptClick = () => {
    setHiddenDestinations({
      greece: true,
      italyCapital: true,
      capital: true,
      italy: true,
      spain: true,
      montenegro: true,
      turkey: true,
      turkeyCapital: true,
      egypt: false,
    });
    setMainHeader("EGYPT");
  };

  return (
    <>
      <Header />
      <div className="listOfDestinationsDiv">
        <div className="countryDiv" onClick={handleAllClick}>
          <img src="/public/list.png" className="countryImg"></img>
          <h1 className="countryNames">ALL DESTINATIONS</h1>
        </div>
        <div className="countryDiv" onClick={handleCapitalClick}>
          <img src="/public/european-union.png" className="countryImg"></img>
          <h1 className="countryNames">EU Capitals</h1>
        </div>
        <div className="countryDiv" onClick={handleGreeceClick}>
          <img src="/public/greece.png" className="countryImg"></img>
          <h1 className="countryNames">Greece</h1>
        </div>
        <div className="countryDiv" onClick={handleItalyClick}>
          <img src="/public/italy.png" className="countryImg"></img>
          <h1 className="countryNames">Italy</h1>
        </div>
        <div className="countryDiv" onClick={handleSpainClick}>
          <img src="/public/spain.png" className="countryImg"></img>
          <h1 className="countryNames">Spain</h1>
        </div>
        <div className="countryDiv" onClick={handleMontenegroClick}>
          <img src="/public/montenegro.png" className="countryImg"></img>
          <h1 className="countryNames">Montenegro</h1>
        </div>
        <div className="countryDiv" onClick={handleTurkeyClick}>
          <img src="/public/turkey.png" className="countryImg"></img>
          <h1 className="countryNames">Turkiye</h1>
        </div>
        <div className="countryDiv" onClick={handleEgyptClick}>
          <img src="/public/egypt.png" className="countryImg"></img>
          <h1 className="countryNames">Egypt</h1>
        </div>
      </div>
      <h1 className="listHeader">{mainHeader}</h1>
      <div className="shoppingListDiv">
        <div
          className="greeceDestination"
          style={{ display: hiddenDestinations.greece ? "none" : "block" }}
        >
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
          <Link to="/corfu">
            <button className="viewDetailsBtn">VIEW DETAILS</button>
          </Link>
        </div>
        <div
          className="greeceDestination"
          style={{ display: hiddenDestinations.greece ? "none" : "block" }}
        >
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
        <div
          className="italyCapitalDestination"
          id="italyCapitalDestination"
          style={{
            display: hiddenDestinations.italyCapital ? "none" : "block",
          }}
        >
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
        <div
          className="capitalDestination"
          style={{ display: hiddenDestinations.capital ? "none" : "block" }}
        >
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
        <div
          className="capitalDestination"
          style={{ display: hiddenDestinations.capital ? "none" : "block" }}
        >
          {image5 ? (
            <img src={image5} alt="Image 5" className="greekImg" />
          ) : (
            <p>Loading Image 5...</p>
          )}
          <div className="mainDownDiv">
            <div className="signDivDown">
              <img src="/public/monument.png" className="signIcon"></img>
              <h1 className="signHeader">CULTURAL</h1>
            </div>
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
        <div
          className="italyDestination"
          id="italyDestination"
          style={{ display: hiddenDestinations.italy ? "none" : "block" }}
        >
          {image6 ? (
            <img src={image6} alt="Image 6" className="greekImg" />
          ) : (
            <p>Loading Image 6...</p>
          )}
          <div className="mainDownDiv">
            <div className="signDivDown">
              <img src="/public/vacations.png" className="signIcon"></img>
              <h1 className="signHeader">SEASIDE</h1>
            </div>
            <div className="signDivSecondDown">
              <img src="/public/airplaneWhite.png" className="signIcon"></img>
              <h1 className="signHeader">FLIGHT</h1>
            </div>
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
        <div
          className="spainDestination"
          style={{ display: hiddenDestinations.spain ? "none" : "block" }}
        >
          {image7 ? (
            <img src={image7} alt="Image 7" className="greekImg" />
          ) : (
            <p>Loading Image 7...</p>
          )}
          <div className="mainDownDiv">
            <div className="signDivDown">
              <img src="/public/monument.png" className="signIcon"></img>
              <h1 className="signHeader">CULTURAL</h1>
            </div>
            <div className="signDivSecondDown">
              <img src="/public/airplaneWhite.png" className="signIcon"></img>
              <h1 className="signHeader">FLIGHT</h1>
            </div>
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
        <div
          className="montenegroDestination"
          id="montenegroDestination"
          style={{
            display: hiddenDestinations.montenegro ? "none" : "block",
          }}
        >
          {image8 ? (
            <img src={image8} alt="Image 8" className="greekImg" />
          ) : (
            <p>Loading Image 8...</p>
          )}
          <div className="mainDownDiv">
            <div className="signDivDown">
              <img src="/public/vacations.png" className="signIcon"></img>
              <h1 className="signHeader">SEASIDE</h1>
            </div>
          </div>
          <h1 className="destinationName">BUDVA 8 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">8 DAYS</h1>
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
            <h1 className="priceParagraph"> 600$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div
          className="spainDestination"
          style={{ display: hiddenDestinations.spain ? "none" : "block" }}
        >
          {image9 ? (
            <img src={image9} alt="Image 9" className="greekImg" />
          ) : (
            <p>Loading Image 9...</p>
          )}
          <div className="mainDownDiv">
            <div className="signDivDown">
              <img src="/public/vacations.png" className="signIcon"></img>
              <h1 className="signHeader">SEASIDE</h1>
            </div>
            <div className="signDivSecondDown">
              <img src="/public/airplaneWhite.png" className="signIcon"></img>
              <h1 className="signHeader">FLIGHT</h1>
            </div>
          </div>
          <h1 className="destinationName">GRAN CANARIA 9 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">9 DAYS</h1>
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
            <h1 className="priceParagraph"> 180$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div
          className="turkeyCapitalDestination"
          id="turkeyCapitalDestination"
          style={{
            display: hiddenDestinations.turkeyCapital ? "none" : "block",
          }}
        >
          {image10 ? (
            <img src={image10} alt="Image 10" className="greekImg" />
          ) : (
            <p>Loading Image 10...</p>
          )}
          <div className="mainDownDiv">
            <div className="signDivDown">
              <img src="/public/monument.png" className="signIcon"></img>
              <h1 className="signHeader">CULTURAL</h1>
            </div>
          </div>
          <h1 className="destinationName">ISTANBUL 5 DAYS</h1>
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
          <div className="foodDiv">
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">BREAKFAST INCLUDED</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 140$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div
          className="turkeyDestination"
          id="turkeyDestination"
          style={{ display: hiddenDestinations.turkey ? "none" : "block" }}
        >
          {image11 ? (
            <img src={image11} alt="Image 11" className="greekImg" />
          ) : (
            <p>Loading Image 11...</p>
          )}
          <div className="mainDownDiv">
            <div className="signDivDown">
              <img src="/public/vacations.png" className="signIcon"></img>
              <h1 className="signHeader">SEASIDE</h1>
            </div>
            <div className="signDivSecondDown">
              <img src="/public/airplaneWhite.png" className="signIcon"></img>
              <h1 className="signHeader">FLIGHT</h1>
            </div>
          </div>
          <h1 className="destinationName">BODRUM 11 DAYS</h1>
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
            <h1 className="priceParagraph"> 1200$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
        <div
          className="egyptDestination"
          id="egyptDestination"
          style={{ display: hiddenDestinations.egypt ? "none" : "block" }}
        >
          {image12 ? (
            <img src={image12} alt="Image 12" className="greekImg" />
          ) : (
            <p>Loading Image 12...</p>
          )}
          <div className="mainDownDiv">
            <div className="signDivDown">
              <img src="/public/vacations.png" className="signIcon"></img>
              <h1 className="signHeader">SEASIDE</h1>
            </div>
          </div>
          <h1 className="destinationName">HURGHADA 10 DAYS</h1>
          <div className="mainDescriptionDiv">
            <div className="calenderDiv">
              <img src="/public/calendar.png" className="calendarIcon"></img>
              <h1 className="numberOfDays">10 DAYS</h1>
            </div>
            <div className="transportDiv">
              <img
                src="/public/airplane1.png"
                className="transportIconAirplane"
              ></img>
              <h1 className="transportName">BUS</h1>
            </div>
          </div>
          <div className="foodDiv" style={{ marginLeft: "-0.5vw" }}>
            <img src="/public/breakfast.png" className="foodIcon"></img>
            <h1 className="foodHeader">ALL INCLUSIVE</h1>
          </div>
          <div className="priceDiv">
            <h1 className="priceHeader">Starting from </h1>
            <h1 className="priceParagraph"> 960$</h1>
            <h1 className="priceHeader"> per person.</h1>
          </div>
          <button className="viewDetailsBtn">VIEW DETAILS</button>
        </div>
      </div>
    </>
  );
}

export default ListOf;
