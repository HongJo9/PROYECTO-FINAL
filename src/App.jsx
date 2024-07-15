import { useState } from 'react';
import { Encabezado } from './components/Encabezado';
import { ListaProductos } from './components/ListaProductos';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [contador, setContador] = useState(0);

  return (
    <>
      <Encabezado
        carrito={carrito}
        setCarrito={setCarrito}
        total={total}
        setTotal={setTotal}
        contador={contador}
        setContador={setContador}
      />
      <ListaProductos
        carrito={carrito}
        setCarrito={setCarrito}
        total={total}
        setTotal={setTotal}
        contador={contador}
        setContador={setContador}
      />
    </>
  );
}

export default App;
