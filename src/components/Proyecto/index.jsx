import "./styles.scss";

import React, { useContext } from "react";
import { ResContext } from "../../context/ResProvider";

const Proyecto = ({ img, subtitle, url }) => {
  const { setImgInfo } = useContext(ResContext);

  const openProject = () => {
    const screen = document.querySelector(".dark-screen");
    screen.classList.add("dark-screen-activated");
    setImgInfo({
      img,
      url,
    });
  };
  return (
    <div className="card">
      <div
        className="card-image"
        onClick={() => {
          openProject();
        }}
      >
        <img src={`./images/${img}`} alt="proyecto-ej" />
      </div>
      <div className="card-body">
        <p className="card-subtitle">{subtitle}</p>
        <h3 className="card-title">Titulo ejemplo</h3>
        <p className="card-description">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Proyecto;
