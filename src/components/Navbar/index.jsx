import React, { useContext, useEffect, useState } from "react";
import { ResContext } from "../../context/ResProvider";
import "./styles.scss";

const Navbar = () => {
  const { Resolution } = useContext(ResContext);
  // const [open, setOpen] = useState(false);

  const openMenu = () => {
    // setOpen(!open);
    const navbar = document.querySelector(".navbar");
    const btn = document.querySelector(".btn-float");
    // console.log(navbar);
    navbar.classList.toggle("navbar-open");
    btn.classList.toggle("btn-float-open");
  };
  useEffect(() => {
    console.log(Resolution);
  }, [Resolution]);

  // useEffect(() => {
  //   console.log(open);
  //   if (open) {
  //   }
  // }, [open]);
  return (
    <>
      <nav className="navbar">
        <a className="navbar-link" href="#inicio">
          Inicio
        </a>
        <a className="navbar-link" href="#portafolio">
          Portafolio
        </a>
        <a className="navbar-link" href="#contacto">
          Contacto
        </a>
      </nav>
      <div
        className="btn-float"
        onClick={() => {
          openMenu();
        }}
      >
        {/* <div className="btn-icon"></div> */}
      </div>
    </>
  );
};

export default Navbar;
