import React, {useState} from "react";
import proveedor from "./proveedor";

const ContextApp = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [contador, setContador] = useState(0);
  const [menu, setMenu] = useState(false);
  const [activo, setActivo] = useState(false);

  return (
    <proveedor.Provider
      value={{ carrito, setCarrito, total, setTotal, contador, setContador , menu, setMenu,activo, setActivo }}
    >
      {children}
    </proveedor.Provider>
  );
};

export default ContextApp;
