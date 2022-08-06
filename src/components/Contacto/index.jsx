import "./styles.scss";

import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    /* Tener en cuenta que vite maneja import.meta.env y las variables deben iniciar con VITE_KEY */
    /* Se utilizo vite-plugin-environment para poder usar variables env en VERCEL*/
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // console.log(form.current);
  };

  return (
    <section id="contacto">
      <div className="contact-container">
        <h2 className="contact-title">Contactame</h2>
        <p className="contact-content">
          Me gusta afrontar cualquier tipo de desafío. Así que si deseas ponerme
          a prueba o tienes alguna duda, no dudes en contactarme.
        </p>
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <div className="inputBox">
            <input type="text" name="nombre" required />
            <span className="text">Nombre</span>
            <span className="shadow"></span>
          </div>
          <div className="inputBox">
            <input type="text" name="email" required />
            <span className="text">Correo electrónico</span>
            <span className="shadow"></span>
          </div>
          <div className="inputBox">
            <input type="text" name="asunto" id="nombre" required />
            <span className="text">Asunto</span>
            <span className="shadow"></span>
          </div>
          <div className="inputBox textarea">
            <textarea name="mensaje" required></textarea>
            <span className="text">Escribe tu mensaje aquí...</span>
            <span className="shadow"></span>
          </div>
          <div className="button-submit">
            <button type="submit">
              <div>
                <span className="bg"></span>
                <span className="text">Enviar</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
