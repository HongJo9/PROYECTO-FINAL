import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-sm hover:underline">Inicio</a>
            </li>
            <li className="mb-2">
              <a href="/tienda" className="text-sm hover:underline">Tienda</a>
            </li>
            <li className="mb-2">
              <a href="/nosotros" className="text-sm hover:underline">Nosotros</a>
            </li>
            <li className="mb-2">
              <a href="/contactanos" className="text-sm hover:underline">Contáctanos</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <p className="text-sm">Email: @tuempresa.com</p>
          <p className="text-sm">Teléfono: (+51) 955 257 611</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Empresa Hong Jo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
