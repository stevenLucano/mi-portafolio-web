import "./styles.scss";

import React, { useContext } from "react";
import { ResContext } from "../../context/ResProvider";

const Proyecto = ({ img, subtitle, url }) => {
  const { setImgInfo } = useContext(ResContext);

  const openInfo = () => {
    const screen = document.querySelector(".dark-screen");
    const imgProj = document.querySelector(".image-info");
    const linkProj = document.querySelector(".link-info");

    screen.classList.add("dark-screen-activated");
    imgProj.classList.add("image-info-activated");
    linkProj.classList.add("link-info-activated");

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
          openInfo();
        }}
        title={url}
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
