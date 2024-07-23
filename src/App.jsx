import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Encabezado } from "./components/Encabezado";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Tienda from "./Pages/Tienda";
import Nosotros from "./Pages/Nosotros";
import Contactanos from "./Pages/Contactanos";
import ContextApp from "./context/ContextApp";

function App() {
  return (
    <ContextApp>
      <Router>
        <Encabezado>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
        </Encabezado>
      </Router>
      <Footer />
    </ContextApp>
  );
}

export default App;
