import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Encabezado } from "./components/Encabezado";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Tienda from "./Pages/Tienda";
import Nosotros from "./Pages/Nosotros";
import Contactanos from "./Pages/Contactanos";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [contador, setContador] = useState(0);

  return (
    <>
      <Router>
        <Encabezado
          carrito={carrito}
          setCarrito={setCarrito}
          total={total}
          setTotal={setTotal}
          contador={contador}
          setContador={setContador}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                carrito={carrito}
                setCarrito={setCarrito}
                total={total}
                setTotal={setTotal}
                contador={contador}
                setContador={setContador}
              />
            }
          />
          <Route
            path="/tienda"
            element={
              <Tienda
                carrito={carrito}
                setCarrito={setCarrito}
                total={total}
                setTotal={setTotal}
                contador={contador}
                setContador={setContador}
              />
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
