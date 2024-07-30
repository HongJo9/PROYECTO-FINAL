import { data } from "../Data"; // Asegúrate de que el nombre del archivo y la importación coincidan exactamente.
import "./ListaProductos.css";
import { useContext } from "react";
import proveedor from "../context/proveedor";

export const ListaProductos = () => {
  const { carrito, setCarrito, total, setTotal, contador, setContador } =
    useContext(proveedor);

    //Comparara si el producto existe en el carritomy si exisitiera simplemente aunmenta la cantidad 
  const agregarProducto = (producto) => {
    //.find hace comparacion si existe el mismo, y si lo hace, se crea un nuevo array, pero solo para indicar que sea verdadero  
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

  return (
    <div className="pt-20">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Best Seller Products</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          ipsum?
        </p>
      </div>
      <div className="contenedor-productos">
        {data.map((producto) => (
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
  );
};
