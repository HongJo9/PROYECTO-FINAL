import React from "react";
import "./Comentarios.css";

export default function Comentarios() {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="font-bold text-5xl pt-20 pb-3">Recientes Noticias</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor!</p>
      </div>
      <div className="noticias pb-20">
        <div>
          <img className="imagen-comentario" src="noticia1.jpg" alt="" />
          <h5 className="py-5">5 de Octubre, 2023 por Hong jo</h5>
          <h4 className="font-bold text-3xl pb-3">Precios de Infarto</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quibusdam autem illum asperiores quaerat dolore ratione quidem
            commodi dolores officiis!
          </p>
        </div>
        <div>
          <img className="imagen-comentario" src="noticia2.jpg" alt="" />
          <h5 className="py-5">5 de Octubre, 2023 por Hong jo</h5>
          <h4 className="font-bold text-3xl pb-3">Precios de Infarto</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quibusdam autem illum asperiores quaerat dolore ratione quidem
            commodi dolores officiis!
          </p>
        </div>
        <div>
          <img className="imagen-comentario" src="noticia3.jpg" alt="" />
          <h5 className="py-5">5 de Octubre, 2023 por Hong jo</h5>
          <h4 className="font-bold text-3xl pb-3">Precios de Infarto</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quibusdam autem illum asperiores quaerat dolore ratione quidem
            commodi dolores officiis!
          </p>
        </div>
      </div>
    </div>
  );
}
