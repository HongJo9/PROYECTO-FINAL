import "./General.css";
import { ListaProductos } from "../components/ListaProductos";
import React from "react";
import Portada from "../components/Portada";
import "./Tiendas.css";

const Tienda = ({}) => {
  const tienda = "Tienda";
  return (
    <>
      <div className="tienda ">
        <div>
          <Portada props={tienda} />
        </div>
        <div className="grid grid-cols-[20%_auto] py-5">
          <div className="filtro">
            <div className="bg-white p-6 rounded-2xl shadow-lg ">
              <h2 className="font-bold text-2xl">Filtros de Productos</h2>
              <h3 className="font-medium text-2xl text-red-600">Colores</h3>
              <ul className="space-y-2 ">
                <li className="p-2 bg-gray-100 rounded">Rojo</li>
                <li className="p-2 bg-gray-100 rounded">Azul</li>
                <li className="p-2 bg-gray-100 rounded">Negro</li>
              </ul>
              <h3 className="font-medium text-2xl text-red-600">Modelos</h3>
              <ul className="space-y-2 ">
                <li className="p-2 bg-gray-100 rounded">Inalambricos</li>
                <li className="p-2 bg-gray-100 rounded">Alambricos</li>
                <li className="p-2 bg-gray-100 rounded">Airphones</li>
              </ul>
              <h3 className="font-medium text-2xl text-red-600">Marcas</h3>
              <ul className="space-y-2 ">
                <li className="p-2 bg-gray-100 rounded">JBL</li>
                <li className="p-2 bg-gray-100 rounded">EWTTO</li>
                <li className="p-2 bg-gray-100 rounded">REDD</li>
              </ul>
            </div>
          </div>

          <ListaProductos/>
        </div>
      </div>
    </>
  );
};

export default Tienda;
