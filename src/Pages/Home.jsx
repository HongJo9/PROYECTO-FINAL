import React from "react";
import { ListaProductos } from "../components/ListaProductos";
import "./General.css";
import "./Home.css";
import PortadasHome from "../components/PortadasHome";
import Envios from "../components/Envios";

export default function Home({}) {
  return (
    <>
      <div className="home">
        <PortadasHome/>
        <Envios/>
        <ListaProductos />
      </div>
    </>
  );
}
