import React from "react";
import "./PortadaHome.css";

export default function PortadasHome() {
  return (
    <>
      <div className="px-5">
        <img className="rounded-3xl" src="portada general.jpg" alt="" />
      </div>
      <div className="portada-home1 p-5">
        <div className="media-portada">
          <div className="portada-home2 pb-5">
            <div className="portada-home211 rounded-3xl"></div>
            <div className="portada-home212 rounded-3xl"></div>
          </div>
          <div className="portada-home21 rounded-3xl"></div>
        </div>
        <div>
          <div className="portada-home22 rounded-3xl"></div>
          <div className="portada-home2 py-5">
            <div className="portada-home221 rounded-3xl"></div>
            <div className="portada-home222 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
