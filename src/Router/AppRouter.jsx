import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Tienda from "../Pages/Tienda";
import Nosotros from "../Pages/Nosotros";
import Contactanos from "../Pages/Contactanos";
import Paginanoexiste from "../Pages/Paginanoexiste";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRouter() {
  return (
    <>
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="*" element={<Paginanoexiste />} />
      </Routes>
    </>
  );
}
