import "./styles.scss";
import React, { useContext } from "react";
import { ResContext } from "../../context/ResProvider";

const InfoProyecto = () => {
  const { Resolution, ImgInfo } = useContext(ResContext);

  const closeInfo = () => {
    const screen = document.querySelector(".dark-screen");
    screen.classList.remove("dark-screen-activated");
  };

  let positionY =
    Resolution == "desktop" ? window.scrollY + 100 : window.scrollY + 300;

  return (
    <div
      className="dark-screen"
      style={{ "--height-page": `${document.documentElement.scrollHeight}px` }}
    >
      <div className="image-info" style={{ "--position-y": `${positionY}px` }}>
        <div
          className="close-info"
          onClick={() => {
            closeInfo();
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <img src={`./src/images/${ImgInfo.img}`} alt="Imagen del proyecto" />
      </div>
      <div className="link-info">
        <a href="#">{ImgInfo.url}</a>
      </div>
    </div>
  );
};

export default InfoProyecto;
