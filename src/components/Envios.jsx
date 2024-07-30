import React, { useState } from "react";
import './Envios.css'; // Asegúrate de importar el archivo CSS

export default function Envios() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      img: "envio1.png",
      title: "Envios",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing."
    },
    {
      img: "envio2.png",
      title: "Envios",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing."
    },
    {
      img: "envio3.png",
      title: "Envios",
      desc: "Lorem, ipnum dolor sit amet consectetur adipisicing."
    },
    {
      img: "envio4.png",
      title: "Envios",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing."
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-previous" onClick={handlePrevious}>a</button>
      <div
        className="slider-wrapper flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="slider-item flex gap-10 items-center p-5">
            <div>
              <img src={item.img} width="80px" alt={item.title} />
            </div>
            <div>
              <h5 className="font-bold text-2xl">{item.title}</h5>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-next" onClick={handleNext}>a</button>
    </div>
  );
}
