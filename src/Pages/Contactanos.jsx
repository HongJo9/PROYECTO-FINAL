import './General.css'
import React from 'react';
import Portada from "../components/Portada";

const Contactanos = () => {
  const contactanos = "Contactanos"
  return (
    <div className='contactanos'>
      <Portada props={contactanos}/>
      <h1>cONTACTANOS</h1>
      <p>Welcome to our store!</p>
    </div>
  );
};

export default Contactanos;
