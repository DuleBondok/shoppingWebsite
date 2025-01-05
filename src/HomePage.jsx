import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const idImg1 = 5039256;
  const idImg2 = 1707191;
  const idImg3 = 6514351;

  const PIXABAY_API_KEY = "40104432-dc1a4d1ee09039528f96981ac";
  const API_URLS = [
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg1}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg2}`,
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&id=${idImg3}`,
  ];

  const descriptions = [
    "European Capitals",
    "Visit Tuscany in Spring",
    "Greek paradise 2025",
  ];

  const descriptiveParagraphs = [
    "Visit the most beautiful European cities and make your dreams come true.",
    "The most picturesque part of Italy, famous for vines and beautiful landscape.",
    "You like sandy beaches and colorful cocktails? Greece is waiting for you!",
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        const fetchedImages = await Promise.all(
          API_URLS.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Failed to fetch images");
            }
            const data = await response.json();
            if (data.hits && data.hits.length > 0) {
              return data.hits[0].webformatURL;
            } else {
              throw new Error("No images found for a query");
            }
          })
        );

        setImages(fetchedImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="imageContainer">
        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            className="homePageImg"
            alt={`Image ${currentIndex + 1}`}
          />
        )}
      </div>
      <div className="descriptionDiv">
        <h1 className="descriptionHeader">{descriptions[currentIndex]}</h1>
        <p className="descriptionParagraph">
          {descriptiveParagraphs[currentIndex]}
        </p>
        <Link to="/listOf">
          <button className="bookNowBtn">BOOK NOW</button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
