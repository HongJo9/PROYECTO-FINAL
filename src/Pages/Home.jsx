import React from "react";
import { ListaProductos } from "../components/ListaProductos";
import "./General.css";

export default function Home({
  carrito,
  setCarrito,
  total,
  contador,
  setContador,
  setTotal,
}) {
  return (
    <>
      <div className="home">
      <div>
        Hola
    </div>
        <ListaProductos
          carrito={carrito}
          setCarrito={setCarrito}
          total={total}
          setTotal={setTotal}
          contador={contador}
          setContador={setContador}
        />
      </div>
    </>
  );
}
