import React from "react";
import { ListaProductos } from "../components/ListaProductos";
import "./General.css";
import "./Home.css";
import PortadasHome from "../components/PortadasHome";
import Envios from "../components/Envios";
import Comentarios from "../components/Comentarios";
import Marcas from "../components/Marcas";

export default function Home({}) {
  return (
    <>
      <div className="home">
        <PortadasHome />
        <Envios />
        <img className="banner2-home" src="BANNER-PROMOCIONAL1.png" alt="" />
        <ListaProductos />
        <img className="banner2-home" src="BANNER-PROMOCIONAL2.png" alt="" />
        <Comentarios/>
        
      </div>
      <Marcas/>
    </>
  );
}
