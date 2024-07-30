import "./General.css";
import React from "react";
import Portada from "../components/Portada";

const Nosotros = () => {
  const nosotros = "Nosotros";
  return (
    <div className="nosotros">
      <div className="portada-nosotros">
        <h1 className="text-white text-6xl font-bold">Sobre Nosotros</h1>
      </div>
      <h1>NOSOTROS</h1>
      <p>Welcome to our store!</p>
    </div>
  );
};

export default Nosotros;
