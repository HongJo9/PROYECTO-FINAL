import React, { useState } from 'react';
import "./Marca.css";

export default function Marcas() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const marcas = [
    "marca1.png",
    "marca2.png",
    "marca3.png",
    "marca4.png",
    "marca5.png",
    "marca6.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === marcas.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? marcas.length - 1 : prev - 1));
  };

  return (
    <div className='carousel-container'>
      <button className='prev' onClick={prevSlide}>Prev</button>
      <div className='carousel-slide'>
        <img className='w-40' src={marcas[currentSlide]} alt={`Marca ${currentSlide + 1}`} />
      </div>
      <button className='next' onClick={nextSlide}>Next</button>
    </div>
  );
}
