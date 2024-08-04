import { Encabezado } from "./components/Encabezado";
import Footer from "./components/Footer";
import ContextApp from "./context/ContextApp";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <ContextApp>
      <Encabezado />
      <AppRouter />
      <Footer />
    </ContextApp>
  );
}

export default App;
