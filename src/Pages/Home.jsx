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
          <img className="rounded-3xl" src="portada general.jpg" alt="" />
        </div>
        <div>
        <div className="flex">
            <div><img className="rounded-3xl " src="portada general.jpg" alt="" /></div>
            <div className="w-1/4"><img className="rounded-3xl" src="portada general.jpg" alt="" /></div>
            <div className="w-1/2"><img className="rounded-3xl" src="portada general.jpg" alt="" /></div>
          </div>
          <div className="flex">
            <div className="w-1/2"><img className="rounded-3xl" src="portada general.jpg" alt="" /></div>
            <div className="w-1/4"><img className="rounded-3xl" src="portada general.jpg" alt="" /></div>
            <div className="w-1/4"><img className="rounded-3xl" src="portada general.jpg" alt="" /></div>
          </div>
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
