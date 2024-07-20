import "./General.css";
import React from "react";
import Portada from "../components/Portada";

const Nosotros = () => {
  const nosotros = "Nosotros";
  return (
    <div className="nosotros">
      <div>
        <Portada props={nosotros} />
      </div>
      <h1>NOSOTROS</h1>
      <p>Welcome to our store!</p>
    </div>
  );
};

export default Nosotros;
