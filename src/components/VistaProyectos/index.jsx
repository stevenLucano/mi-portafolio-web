import "./styles.scss";
import React from "react";
import Proyecto from "../Proyecto";

const VistaProyectos = ({ subt }) => {
  return (
    <article className="section-project">
      <Proyecto img="tengen.jpg" subtitle={subt} url="http://uzui-tengen.com" />
      <Proyecto
        img="itachi.jpg"
        subtitle={subt}
        url="http://itachi-uchiha.com"
      />
      <Proyecto img="tengen.jpg" subtitle={subt} url="http://uzui-tengen.com" />
    </article>
  );
};

export default VistaProyectos;
