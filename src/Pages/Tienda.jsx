import "./General.css";
import { data } from "../Data";
import React, { useContext, useState } from "react";
import "./Tiendas.css";
import proveedor from "../context/proveedor";

const Tienda = () => {
  const { carrito, setCarrito, total, setTotal, contador, setContador } =
    useContext(proveedor);

  // Estados para los filtros múltiples
  const [filtroColor, setFiltroColor] = useState(null);
  const [filtroModelo, setFiltroModelo] = useState(null);
  const [filtroMarca, setFiltroMarca] = useState(null);

  // Estado para la paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  const agregarProducto = (producto) => {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
      const productosActualizados = carrito.map((item) =>
        item.id === producto.id ? { ...item, cantCarrito: item.cantCarrito + 1 } : item
      );
      setCarrito(productosActualizados);
    } else {
      setCarrito([...carrito, producto]);
    }

    setTotal((prevTotal) => prevTotal + producto.precio);
    setContador((prevCount) => prevCount + 1);
  };

  const toggleFiltro = (filtro, setFiltro, valor) => {
    setFiltro(filtro === valor ? null : valor);
  };

  // Filtrar los productos basados en los filtros seleccionados
  const productosFiltrados = data.filter((producto) => {
    return (
      (!filtroColor || filtroColor === producto.color) &&
      (!filtroModelo || filtroModelo === producto.modelo) &&
      (!filtroMarca || filtroMarca === producto.marca)
    );
  });

  // Calcular el índice de inicio y fin para la paginación
  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = indiceInicio + productosPorPagina;
  const productosPaginados = productosFiltrados.slice(indiceInicio, indiceFin);

  const numeroPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <>
      <div className="tienda">
        <div className="portada-tienda">
          <h1 className="text-white text-6xl font-bold">
            Nuestra Tienda
          </h1>
        </div>
        <div className="grid grid-cols-[20%_auto] py-5">
          {/* Los filtros para la tienda */}
          <div className="filtro">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="font-bold text-2xl">Filtros de Productos</h2>
              <h3 className="font-medium text-2xl text-red-600">Colores</h3>
              <ul className="space-y-2">
                {["rojo", "azul", "negro"].map((color) => (
                  <li
                    key={color}
                    className={`p-2 bg-gray-100 rounded cursor-pointer ${
                      filtroColor === color ? "bg-red-500 text-red-100" : ""
                    }`}
                    onClick={() =>
                      toggleFiltro(filtroColor, setFiltroColor, color)
                    }
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </li>
                ))}
              </ul>
              <h3 className="font-medium text-2xl text-red-600">Modelos</h3>
              <ul className="space-y-2">
                {["inalambrico", "alambrico"].map((modelo) => (
                  <li
                    key={modelo}
                    className={`p-2 bg-gray-100 rounded cursor-pointer ${
                      filtroModelo === modelo ? "bg-red-500 text-red-100" : ""
                    }`}
                    onClick={() =>
                      toggleFiltro(filtroModelo, setFiltroModelo, modelo)
                    }
                  >
                    {modelo.charAt(0).toUpperCase() + modelo.slice(1)}
                  </li>
                ))}
              </ul>
              <h3 className="font-medium text-2xl text-red-600">Marcas</h3>
              <ul className="space-y-2">
                {["JBL", "EWTTO", "MSI"].map((marca) => (
                  <li
                    key={marca}
                    className={`p-2 bg-gray-100 rounded cursor-pointer ${
                      filtroMarca === marca ? "bg-red-500 text-red-100" : ""
                    }`}
                    onClick={() =>
                      toggleFiltro(filtroMarca, setFiltroMarca, marca)
                    }
                  >
                    {marca}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            {/* Los productos mostrados desde la tienda */}
            <div className="contenedor-productos-tienda">
              {productosPaginados.map((producto) => (
                <div className="producto" key={producto.id}>
                  <figure>
                    <img src={producto.img} alt={producto.nombreProducto} />
                  </figure>
                  <div className="info-producto">
                    <div className="info-producto-detalles">
                      <h2>{producto.nombreProducto}</h2>
                      <p className="precio">S/.{producto.precio}</p>
                    </div>
                    <div>
                      <button onClick={() => agregarProducto(producto)}>
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
          <div>
            {/* Paginación */}
            <div className="paginacion">
              {Array.from({ length: numeroPaginas }, (_, index) => (
                <button
                  key={index}
                  className={`paginacion-boton ${
                    paginaActual === index + 1 ? "activo" : ""
                  }`}
                  onClick={() => cambiarPagina(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tienda;
