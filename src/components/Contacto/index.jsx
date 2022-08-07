import "./styles.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ResContext } from "../../context/ResProvider";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const { Resolution } = useContext(ResContext);

  const [errorsDetected, setErrorsDetected] = useState([]);
  const [showError, setShowError] = useState(false);
  const [inicio, setInicio] = useState(true);

  const form = useRef();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const detectErr = (errors) => {
    if (Object.keys(errors).length > 0) {
      if (Object.keys(errors).length !== errorsDetected.length) {
        setErrorsDetected(Object.keys(errors));
      }
    } else {
      if (Object.keys(errors).length !== errorsDetected.length) {
        setErrorsDetected([]);
      }
    }
  };

  const limpiarCampos = () => {
    let input = document.querySelectorAll(".inputBox input");
    input = [...input];

    input.forEach((el) => {
      const campos = document.querySelectorAll(`.input-${el.name}`);

      campos[0].classList.remove("text-right");
      campos[1].classList.remove("shadow-right");
    });

    const camposTextA = document.querySelectorAll(`.input-mensaje`);
    camposTextA[0].classList.remove("text-right");
    camposTextA[1].classList.remove("shadow-right");
  };

  const onSubmit = (data, e) => {
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
          Swal.fire({
            position: "center",
            color: "green",
            icon: "success",
            title: "El mensaje se envió con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
          limpiarCampos();
          e.target.reset();
          reset({ data: {} });
          setInicio(true);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            toast: "true",
            position: "bottom-end",
            icon: "error",
            title: "Ocurrió un problema",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  const detectCont = () => {
    if (inicio) {
      let input = document.querySelectorAll("input");
      input = [...input];

      input.forEach((el) => {
        const campos = document.querySelectorAll(`.input-${el.name}`);
        if (el.value === "") {
          campos[0].classList.remove("text-right");
          campos[1].classList.remove("shadow-right");
        } else {
          campos[0].classList.add("text-right");
          campos[1].classList.add("shadow-right");
        }
      });

      const textA = document.querySelector("textarea");
      const camposTextA = document.querySelectorAll(`.input-mensaje`);
      if (textA.value === "") {
        camposTextA[0].classList.remove("text-right");
        camposTextA[1].classList.remove("shadow-right");
      } else {
        camposTextA[0].classList.add("text-right");
        camposTextA[1].classList.add("shadow-right");
      }
    }
  };

  useEffect(() => {
    let texts = document.querySelectorAll(".inputBox span.text");
    let shadows = document.querySelectorAll(".inputBox span.shadow");

    if (!inicio) {
      texts = [...texts];
      shadows = [...shadows];
      texts.forEach((el) => {
        el.classList.remove("text-error");
        el.classList.add("text-right");
      });
      shadows.forEach((el) => {
        el.classList.remove("shadow-error");
        el.classList.add("shadow-right");
      });
    }

    if (errorsDetected.length > 0) {
      errorsDetected.forEach((el) => {
        let campos = document.getElementsByClassName(`input-${el}`);
        campos = [...campos];

        campos[0].classList.add("text-error");
        campos[0].classList.remove("text-right");

        campos[1].classList.add("shadow-error");
        campos[1].classList.remove("shadow-right");
      });
    }
  }, [errorsDetected]);

  useEffect(() => {
    if (showError) {
      if (errorsDetected.length > 0) {
        Swal.fire({
          toast: "true",
          position: "bottom-start",
          icon: "error",
          title: "Debe rellenar todos los campos",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      setShowError(false);
    }
  }, [showError, errorsDetected]);

  return (
    <section id="contacto">
      <div className="contact-container">
        <h2 className="contact-title">Contactame</h2>
        <p className="contact-content">
          Me gusta afrontar cualquier tipo de desafío. Así que si deseas ponerme
          a prueba o tienes alguna duda, no dudes en contactarme.
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          onChange={() => {
            detectCont("nombre");
          }}
        >
          <div className="cols">
            <div className="inputBox">
              <input {...register("nombre", { required: true })} />
              <span className="text input-nombre">Nombre</span>
              <span className="shadow input-nombre"></span>
            </div>
            <div className="inputBox">
              <input {...register("email", { required: true })} />
              <span className="text input-email">E-mail</span>
              <span className="shadow input-email"></span>
            </div>
          </div>
          <div className="inputBox">
            <input {...register("asunto", { required: true })} />
            <span className="text input-asunto">Asunto</span>
            <span className="shadow input-asunto"></span>
          </div>
          <div className="inputBox textarea">
            <textarea {...register("mensaje", { required: true })}></textarea>
            <span className="text input-mensaje">
              Escribe tu mensaje aquí...
            </span>
            <span className="shadow input-mensaje"></span>
          </div>
          <div className="button-submit">
            <button
              type="submit"
              onClick={() => {
                setShowError(true);
                setInicio(false);
              }}
            >
              <div>
                <span className="bg"></span>
                <span className="text">Enviar</span>
              </div>
            </button>
          </div>
          {errors && detectErr(errors)}
          {!errors && detectErr(errors)}
        </form>
      </div>
    </section>
  );
};

export default Contacto;
