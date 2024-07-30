import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-44">
        <div className="max-w-xs md:max-w-md lg:max-w-xs">
          <img className="w-52 mb-4" src="logo.jpg" alt="Logo" />
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            suscipit aliquam beatae delectus, minus iste!
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Nuestro Menú</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-sm hover:underline">
                Inicio
              </a>
            </li>
            <li className="mb-2">
              <a href="/tienda" className="text-sm hover:underline">
                Tienda
              </a>
            </li>
            <li className="mb-2">
              <a href="/nosotros" className="text-sm hover:underline">
                Nosotros
              </a>
            </li>
            <li className="mb-2">
              <a href="/contactanos" className="text-sm hover:underline">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Contacto</h3>
          <p className="text-sm">Email: @tuempresa.com</p>
          <p className="text-sm">Teléfono: (+51) 955 257 611</p>
        </div>
        <div className="rounded-lg max-w-xs mx-auto">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">
            ¡Suscríbete ahora!
          </h3>
          <form className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Introduce tu email"
              className="px-4 py-2 border border-gray-300 rounded-lg mb-4 md:mb-0 md:mr-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="text-center p-3 mt-8 bg-black">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Empresa Hong Jo. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
