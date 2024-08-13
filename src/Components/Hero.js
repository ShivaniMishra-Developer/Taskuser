import React from 'react';
import bachaa from '../Components/Assets/bachaa.webp';
import './Styles/Hero.css';
const Hero = () => {
  return (
    <div className="hero-container">
      <img src={bachaa} alt="Bachaa" className="hero-image" />
      <div className="hero-text">
        Bridgefix comes back with the new technologies
      </div>
    </div>
  );
}

export default Hero;
