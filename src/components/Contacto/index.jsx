import "./styles.scss";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    /* Tener en cuenta que vite maneja import.meta.env y las variables deben iniciar con VITE_KEY */
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacto">
      <h2>Contactame!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, placeat?
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Correo electrónico"
        />
        <input type="text" name="asunto" id="asunto" placeholder="Asunto" />
        <textarea
          name="mensaje"
          id=""
          cols="30"
          rows="10"
          placeholder="Mensaje..."
        ></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default Contacto;
