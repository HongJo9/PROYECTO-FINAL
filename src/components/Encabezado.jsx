import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Encabezado.css";
import proveedor from "../context/proveedor";

export const Encabezado = () => {
  const {
    carrito,
    setCarrito,
    total,
    setTotal,
    contador,
    setContador,
    menu,
    setMenu,
    activo,
    setActivo,
  } = useContext(proveedor);

  const eliminarProducto = (producto) => {
    const resultados = carrito.filter((item) => item.id !== producto.id);
    setTotal(total - producto.precio * producto.cantCarrito);
    setContador(contador - producto.cantCarrito);
    setCarrito(resultados);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setContador(0);
  };

  return (
    <>
      <header className="z-10">
        <div className="amburguesa">
          <img
            className="w-10"
            src="amburguesa.png"
            alt=""
            onClick={() => setMenu(true)}
          />
        </div>
        <div className="flex items-center gap-8">
          <Link to="/">
            <img className="w-28" src="logo.jpg" alt="" />
          </Link>
          <nav>
            <ul className="flex justify-center space-x-10 text-black">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-gray-500 font-bold"
                      : "hover:text-gray-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tienda"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-gray-500 font-bold"
                      : "hover:text-gray-500"
                  }
                >
                  Tienda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-gray-500 font-bold"
                      : "hover:text-gray-500"
                  }
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactanos"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-gray-500 font-bold"
                      : "hover:text-gray-500"
                  }
                >
                  Contactanos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-7">
          <div className="login">
            <h2>Login</h2>
          </div>
          <div className="lupa">
            <img className="w-6" src="busqueda.png" alt="" />
          </div>
          <div
            className="contenedor-icono cursor-pointer"
            onClick={() => setActivo(!activo)}
          >
            <img className="w-6" src="icono de carrito.png" alt="" />
            <div className="contenedor-carrito-icono">
              <div className="contador-productos">
                <span id="contador-productos">{contador}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`contenedor-carrito-productos ${
          activo ? "" : "carrito-oculto"
        }`}
      >
        <div className="flex">
          <span className="flex items-center justify-center w-3/4 border-b-2">
            Carrito de compras
          </span>
          <span
            className="bg-red-700 p-5 text-white text-right cursor-pointer w-1/4"
            onClick={() => {
              setActivo(false);
            }}
          >
            Cerrar
          </span>
        </div>
        {carrito.length ? (
          <>
            <div className="fila-productos">
              {carrito.map((producto) => (
                <div className="producto-carrito" key={producto.id}>
                  <div className="info-producto-carrito">
                    <span className="cantidad-producto-carrito">
                      {producto.cantCarrito}
                    </span>
                    <p className="titulo-producto-carrito">
                      {producto.nombreProducto}
                    </p>
                    <span className="precio-producto-carrito">
                      S/.{producto.precio}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icono-cerrar"
                    onClick={() => {
                      eliminarProducto(producto);
                      setActivo(true);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className="total-carrito">
              <h3>Total:</h3>
              <span className="total-pagar">S/.{total}</span>
            </div>

            <div className="btn-vaciar" onClick={vaciarCarrito}>
              <button>Vaciar Carrito</button>
            </div>
          </>
        ) : (
          <p className="carrito-vacio">El carrito está vacío</p>
        )}
      </div>
      <div
        className={`menu-responsivo ${
          menu ? "menu-responsivo-active" : ""
        } bg-red-700 w-1/2 h-screen top-0 z-10`}
      >
        <div>
          <h2 className="flex justify-end items-center pt-5 px-5 bg text-white ">
            <span
              className="bg-slate-400 py-1 items-center px-3"
              onClick={() => setMenu(false)}
            >
              X
            </span>
          </h2>
        </div>
        <div className="p-10">
          <h2 className="text-white font-bold text-3xl px-5">Menu</h2>
          <ul className="text-white">
            <li className="p-3" onClick={() => setMenu(false)}>
              <Link to="/">Home</Link>
            </li>
            <hr />
            <li className="p-3" onClick={() => setMenu(false)}>
              <Link to="/tienda">Tienda</Link>
            </li>
            <hr />
            <li className="p-3" onClick={() => setMenu(false)}>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <hr />
            <li className="p-3" onClick={() => setMenu(false)}>
              <Link to="/contactanos">Contactanos</Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
};
