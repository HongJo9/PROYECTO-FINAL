import { data } from '../Data'; // Asegúrate de que el nombre del archivo y la importación coincidan exactamente.
import './ListaProductos.css'

export const ListaProductos = ({
  carrito,
  setCarrito,
  contador,
  setContador,
  total,
  setTotal,
}) => {
  const agregarProducto = (producto) => {
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
      const productosActualizados = carrito.map(item =>
        item.id === producto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCarrito(productosActualizados);
    } else {
      setCarrito([...carrito, producto]);
    }

    setTotal(prevTotal => prevTotal + producto.price);
    setContador(prevCount => prevCount + 1);
  };

  return (
    <div className='contenedor-productos'>
      {data.map(producto => (
        <div className='producto' key={producto.id}>
          <figure>
            <img src={producto.img} alt={producto.nameProduct} />
          </figure>
          <div className='info-producto'>
            <h2>{producto.nameProduct}</h2>
            <p className='precio'>S/.{producto.price}</p>
            <button onClick={() => agregarProducto(producto)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
