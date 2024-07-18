import { useState } from "react";
import { Link } from "react-router-dom";
import "./Encabezado.css";

export const Encabezado = ({
  carrito,
  setCarrito,
  total,
  contador,
  setContador,
  setTotal,
}) => {
  const [activo, setActivo] = useState(false);

  const eliminarProducto = (producto) => {
    const resultados = carrito.filter((item) => item.id !== producto.id);
    setTotal(total - producto.price * producto.quantity);
    setContador(contador - producto.quantity);
    setCarrito(resultados);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setContador(0);
  };

  return (
    <header>
      <div className="amburguesa">
        <img className="w-10" src="amburguesa.png" alt="" />
      </div>
      <div className="flex items-center gap-8">
        <img className="w-28" src="logo.jpg" alt="" />
        <nav>
          <ul className="flex justify-center space-x-10 text-black">
            <li className="hover:text-gray-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="/tienda">Tienda</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="/contactanos">Contactanos</Link>
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

          <div
            className={`contenedor-carrito-productos ${
              activo ? "" : "carrito-oculto"
            }`}
          >
            {carrito.length ? (
              <>
                <div className="fila-productos">
                  {carrito.map((producto) => (
                    <div className="producto-carrito" key={producto.id}>
                      <div className="info-producto-carrito">
                        <span className="cantidad-producto-carrito">
                          {producto.quantity}
                        </span>
                        <p className="titulo-producto-carrito">
                          {producto.nameProduct}
                        </p>
                        <span className="precio-producto-carrito">
                          S/.{producto.price}
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
        </div>
      </div>
    </header>
  );
};
