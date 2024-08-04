import "./General.css";
import React from "react";
import Portada from "../components/Portada";

const Nosotros = () => {
  return (
    <div className="nosotros bg-gray-100">
      <div className="portada-nosotros text-center bg-cover bg-center" style={{ backgroundImage: "url('Baner de paginas NOSOTROS.jpg')" }}>
        <h1 className="text-white text-6xl font-bold">Sobre Nosotros</h1>
      </div>
      <div className="container mx-auto px-4 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="nosotros.jpg"
              alt="Auriculares"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-4">
              En nuestra tienda de auriculares, nos apasiona ofrecer la mejor
              calidad de sonidos para los amantes de la música. Fundada en [Año],
              hemos crecido hasta convertirnos en un referente en el mercado de
              auriculares, siempre buscando las últimas innovaciones y
              tecnologías para nuestros clientes.
            </p>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-gray-600 mb-4">
              Nuestro objetivo es proporcionar a nuestros clientes una
              experiencia auditiva inigualable, con productos que combinan
              calidad, comodidad y estilo. Nos esforzamos por mantener un alto
              estándar en la selección de auriculares y accesorios, asegurando
              que cada producto cumpla con nuestras estrictas expectativas.
            </p>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-600">
              Si tienes alguna pregunta o necesitas más información, no dudes
              en contactarnos. Estamos aquí para ayudarte y asegurarnos de que
              encuentres los auriculares perfectos para ti.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="9262.jpg"
                alt="Equipo 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Juan Pérez</h3>
              <p className="text-gray-600">CEO & Fundador</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="11591.jpg"
                alt="Equipo 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                María García
              </h3>
              <p className="text-gray-600">Directora de Marketing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="1826.jpg"
                alt="Equipo 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Luis Torres</h3>
              <p className="text-gray-600">Gerente de Ventas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
