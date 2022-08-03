import "./styles.scss";
import React, { useContext, useEffect } from "react";
import { ResContext } from "../../context/ResProvider";

const InfoProyecto = () => {
  const { Resolution, ImgInfo } = useContext(ResContext);

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      closeInfo();
    }
  });
  const closeInfo = () => {
    const screen = document.querySelector(".dark-screen");
    const imgProj = document.querySelector(".image-info");
    const linkProj = document.querySelector(".link-info");

    screen.classList.remove("dark-screen-activated");
    imgProj.classList.remove("image-info-activated");
    linkProj.classList.remove("link-info-activated");
  };

  useEffect(() => {
    const darkScreen = document.querySelector(".dark-screen");
    darkScreen.addEventListener("click", (e) => {
      if (e.target.classList.contains("dark-screen")) {
        closeInfo();
      }
    });
  }, []);

  let positionY =
    Resolution == "desktop"
      ? window.scrollY + 100
      : window.scrollY + screen.height / 6;

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
        <img src={`./images/${ImgInfo.img}`} alt="Imagen del proyecto" />
      </div>
      <div className="link-info">
        <a href="#">{ImgInfo.url}</a>
      </div>
    </div>
  );
};

export default InfoProyecto;
