import "./styles.scss";

import React from "react";
import VistaProyectos from "../VistaProyectos";

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h2>Algunos de mis proyectos</h2>
      <VistaProyectos subt="HTML + CSS (Responsivo)" />
      {/* <VistaProyectos /> */}
    </section>
  );
};

export default Portafolio;
