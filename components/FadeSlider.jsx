import React, { useState, useEffect } from 'react';
import './FadeSlider.css'; // CSS file

const images = [
  '../src/assets/school1.jpg',
  '../src/assets/school2.jpg',
  '../src/assets/library.jpg'
];

const FadeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade in
      }, 100); // Wait for fade out to complete
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slider-container">
      <img
        src={`Slide ${images[currentIndex + 1]}`}
        alt=""
        className={`fade-image ${fade ? 'fade-in' : 'fade-out'}`}
      />
    </div>
  );
};

export default FadeSlider;
