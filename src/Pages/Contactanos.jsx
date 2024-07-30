import "./General.css";
import React from "react";

const Contactanos = () => {
  return (
    <div className="contactanos bg-gray-100 ">
      <div className="portada-contactanos text-center py-12 bg-cover bg-center" style={{ backgroundImage: "url('Baner-de-paginas-CONTACTOS.jpg')" }}>
        <h1 className="text-white text-6xl font-bold">Contáctanos</h1>
      </div>
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Información de Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Si tienes alguna pregunta, comentario o necesitas ayuda, no dudes en contactarnos. Estamos aquí para ayudarte y asegurarnos de que tengas la mejor experiencia posible.
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> contacto@tiendaauriculares.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Teléfono:</strong> (+51) 955 257 611
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Dirección:</strong> Calle Falsa 123, Lima, Perú
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Envíanos un Mensaje
            </h2>
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu Nombre"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje:</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu Mensaje"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
