import React, { createContext, useEffect, useState } from "react";

export const ResContext = createContext();
const ResProvider = (props) => {
  const [Resolution, setResolution] = useState("cargando...");
  const [ImgInfo, setImgInfo] = useState({ img: "", url: "" });

  window.addEventListener("resize", () => {
    changeHover(window.innerWidth, screen.width);
  });

  const changeHover = (wnWidth, scWidth) => {
    // const aRef = document.getElementsByClassName("ref-link");
    // const btns = document.getElementsByClassName("btn");
    // if (wnWidth <= 1440 || scWidth <= 1440) {
    //   aRef[0].classList.remove("ref-link-hover");
    //   btns[0].classList.remove("btn-hover");
    // } else {
    //   aRef[0].classList.add("ref-link-hover");
    //   btns[0].classList.add("btn-hover");
    // }
    if (wnWidth <= 1440 || scWidth <= 1440) {
      setResolution("mobile");
    } else {
      setResolution("desktop");
    }
  };

  useEffect(() => {
    changeHover(window.innerWidth, screen.width);
  }, []);

  return (
    <ResContext.Provider
      value={{ Resolution, setResolution, ImgInfo, setImgInfo }}
    >
      {props.children}
    </ResContext.Provider>
  );
};

export default ResProvider;
